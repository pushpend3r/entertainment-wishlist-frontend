import { useLocalStorage } from "@uidotdev/usehooks";
import { TokenType } from "../types";

function useIsUserLoggedIn(): boolean {
  const [accessToken] = useLocalStorage(TokenType.ACCESS_TOKEN);
  return Boolean(accessToken);
}

export default useIsUserLoggedIn;
