// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

vi.mock("react-toastify");

import * as rt from "react-toastify";
import apolloClient from "..";
import { GET_TRENDING } from "../../pages/Home/queries.graphql";
import {
  FAILED_RESPONSE_GET_TRENDING_QUERY,
  SUCCESS_RESPONSE_GET_TRENDING_QUERY,
  RESPONSE_401_ERROR,
  RESPONSE_200_GET_NEW_TOKENS,
} from "../__mocks__/responses.mock";
import { LOGIN } from "../../pages/Login/queries.graphql";

global.fetch = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
});

beforeAll(() => {
  apolloClient.defaultOptions = {
    query: {
      fetchPolicy: "network-only",
    },
  };
});

test("successful api response", async () => {
  vi.mocked(global.fetch).mockResolvedValueOnce({
    text: () => Promise.resolve(JSON.stringify(SUCCESS_RESPONSE_GET_TRENDING_QUERY)),
  });
  const response = await apolloClient.mutate({
    mutation: GET_TRENDING,
  });
  expect(response).toEqual(SUCCESS_RESPONSE_GET_TRENDING_QUERY);
});

test("non 401 error need to be show messages via `react-toastify`", async () => {
  vi.mocked(global.fetch).mockResolvedValueOnce({
    status: 500,
    text: () => Promise.resolve(JSON.stringify(FAILED_RESPONSE_GET_TRENDING_QUERY)),
  });

  try {
    await apolloClient.mutate({
      mutation: GET_TRENDING,
    });
  } catch (error) {
    // no need
  }
  const toastErrorFuncCalls = vi.mocked(rt.toast.error).mock.calls;
  const expectedErrorMessages = FAILED_RESPONSE_GET_TRENDING_QUERY.errors.map((item) => [item.message]);
  expect(toastErrorFuncCalls).toEqual(expectedErrorMessages);
});

suite("401 error trigger `getNewTokens` mutation", () => {
  test("`getNewTokens` mutation success", async () => {
    const mockedFetch = vi.mocked(global.fetch);

    // Fail
    mockedFetch.mockResolvedValueOnce({
      status: 401,
      text: () => Promise.resolve(JSON.stringify(RESPONSE_401_ERROR)),
    });

    // Getting new tokens
    mockedFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(JSON.stringify(RESPONSE_200_GET_NEW_TOKENS)),
    });

    // Retry initial fail request
    mockedFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(JSON.stringify(SUCCESS_RESPONSE_GET_TRENDING_QUERY)),
    });

    try {
      const { data } = await apolloClient.query({
        query: GET_TRENDING,
      });
      expect(data).toEqual(SUCCESS_RESPONSE_GET_TRENDING_QUERY.data);
    } catch (error) {
      // no use
    }

    expect(mockedFetch.mock.calls).toHaveLength(3);
  });

  test("`getNewTokens` mutation fail", async () => {
    const mockedFetch = vi.mocked(global.fetch);

    // Fail
    mockedFetch.mockResolvedValueOnce({
      status: 401,
      text: () => Promise.resolve(JSON.stringify(RESPONSE_401_ERROR)),
    });

    // Getting new tokens also fail
    mockedFetch.mockResolvedValueOnce({
      status: 401,
      text: () => Promise.resolve(JSON.stringify(RESPONSE_401_ERROR)),
    });

    try {
      const { data } = await apolloClient.query({
        query: GET_TRENDING,
      });
      expect(data).toBeNull();
    } catch (error) {
      // no use
    }

    expect(mockedFetch.mock.calls).toHaveLength(2);
  });

  test("expect for `login` mutation operation", async () => {
    const mockedFetch = vi.mocked(global.fetch);

    // Fail
    mockedFetch.mockResolvedValueOnce({
      status: 401,
      text: () => Promise.resolve(JSON.stringify(RESPONSE_401_ERROR)),
    });

    try {
      const { data } = await apolloClient.mutate({
        mutation: LOGIN,
        variables: {
          email: "test@test.com",
          password: "testpassword",
        },
      });
      expect(data).toBeNull();
    } catch (error) {
      // no use
    }

    expect(mockedFetch.mock.calls).toHaveLength(1);
  });
});
