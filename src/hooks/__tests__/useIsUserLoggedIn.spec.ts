import { renderHook } from "@testing-library/react";
import useIsUserLoggedIn from "../useIsUserLoggedIn";
import { TokenType } from "../../types";

describe("useIsUserLoggedIn()", () => {
  beforeEach(() => {
    localStorage.removeItem(TokenType.ACCESS_TOKEN);
    localStorage.removeItem(TokenType.REFRESH_TOKEN);
  });

  test("render hook initially and value should be `false`", () => {
    const { result } = renderHook(useIsUserLoggedIn);
    expect(result.current).toEqual(false);
  });

  test("add `accessToken` should set result to `true`", () => {
    const { result, rerender } = renderHook(useIsUserLoggedIn);
    localStorage.setItem(TokenType.ACCESS_TOKEN, "123");
    rerender();
    expect(result.current).toEqual(true);
  });

  test("remove `accessToken` should set result to `false`", () => {
    const { result, rerender } = renderHook(useIsUserLoggedIn);
    localStorage.removeItem(TokenType.ACCESS_TOKEN);
    rerender();
    expect(result.current).toEqual(false);
  });
});
