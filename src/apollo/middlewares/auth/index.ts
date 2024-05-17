import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { DefaultContext, Observable, from, fromPromise } from "@apollo/client";

import apolloClient from "../..";
import { TokenType, Tokens } from "../../../types";
import { GET_NEW_TOKENS } from "./queries";
import { FailedOperation, GetNewTokens } from "./types";
import { getToken } from "../../../utils";
import { router } from "../../../main";

let isRefreshing = false;
let failedOperations: FailedOperation[] = [];

const getNewTokens = async (): Promise<Tokens> => {
  const refreshToken = getToken(TokenType.REFRESH_TOKEN);

  try {
    const { data } = await apolloClient.mutate<GetNewTokens>({
      mutation: GET_NEW_TOKENS,
      variables: {
        refreshToken,
      },
    });

    const tokens = data!.getNewTokens;

    localStorage.setItem(TokenType.ACCESS_TOKEN, JSON.stringify(tokens.accessToken));
    localStorage.setItem(TokenType.REFRESH_TOKEN, JSON.stringify(tokens.refreshToken));

    return tokens;
  } catch (error: unknown) {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);
    localStorage.removeItem(TokenType.REFRESH_TOKEN);

    router.navigate("/login");

    // so that useLocalStorage can be kicked
    window.dispatchEvent(new StorageEvent("storage", { key: TokenType.ACCESS_TOKEN, newValue: null }));
    window.dispatchEvent(new StorageEvent("storage", { key: TokenType.REFRESH_TOKEN, newValue: null }));

    throw error;
  }
};

const handle401Errors = onError((error) => {
  const { graphQLErrors, forward, operation } = error;

  // skip non 401 errors
  if (graphQLErrors?.[0]?.extensions?.code !== "UNAUTHENTICATED") return;

  // `Tokens` represents successful state and `null` represents error state
  let promise: Promise<Tokens | null> | null = null;

  if (isRefreshing) {
    promise = new Promise<Tokens | null>((resolve) => {
      failedOperations.push({ operation, settlePromiseWith: resolve });
    });
  } else {
    isRefreshing = true;

    promise = getNewTokens()
      .then((tokens) => {
        // retry failed requests
        failedOperations.forEach((item) => item.settlePromiseWith(tokens));
        return tokens;
      })
      .catch((error) => {
        console.error(error);
        failedOperations.forEach((item) => item.settlePromiseWith(null));
        return null;
      })
      .finally(() => {
        failedOperations = [];
        isRefreshing = false;
      });
  }

  return fromPromise(promise).flatMap((value) => {
    if (!value) {
      return new Observable((observer) => {
        observer.error(error);
      });
    }

    const { accessToken } = value;

    operation.setContext(({ headers }: DefaultContext) => {
      return {
        headers: {
          ...headers,
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    });

    return forward(operation);
  });
});

const initialHandler = setContext((_, prevContext) => {
  const { headers } = prevContext;

  if (isRefreshing) return prevContext;

  const accessToken = getToken(TokenType.ACCESS_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

export default from([initialHandler, handle401Errors]);
