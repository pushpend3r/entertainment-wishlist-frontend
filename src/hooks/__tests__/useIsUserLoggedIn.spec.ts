import { act, renderHook } from "@testing-library/react";
import useIsUserLoggedIn from "../useIsUserLoggedIn";
import { TokenType } from "../../types";

describe("useIsUserLoggedIn()", () => {
  beforeEach(() => {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);
    localStorage.removeItem(TokenType.REFRESH_TOKEN);
    act(() => {
      window.dispatchEvent(new StorageEvent("storage", { key: TokenType.ACCESS_TOKEN, newValue: null }));
      window.dispatchEvent(new StorageEvent("storage", { key: TokenType.REFRESH_TOKEN, newValue: null }));
    });
  });

  test("render hook initially", () => {
    const { result } = renderHook(useIsUserLoggedIn);
    expect(result.current).toEqual(false);
  });

  test("add accessToken should set result to true", () => {
    const { result } = renderHook(useIsUserLoggedIn);
    localStorage.setItem(TokenType.ACCESS_TOKEN, "123");
    // because `useLocalStorage` looks for storage event
    act(() => {
      window.dispatchEvent(new StorageEvent("storage", { key: TokenType.ACCESS_TOKEN, newValue: "123" }));
    });
    expect(result.current).toEqual(true);
  });

  test("remove accessToken should set result to false", () => {
    const { result } = renderHook(useIsUserLoggedIn);
    localStorage.removeItem(TokenType.ACCESS_TOKEN);
    // because `useLocalStorage` looks for storage event
    act(() => {
      window.dispatchEvent(new StorageEvent("storage", { key: TokenType.ACCESS_TOKEN, newValue: null }));
    });
    expect(result.current).toEqual(false);
  });
});
