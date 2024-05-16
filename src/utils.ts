import { ToastPromiseParams, toast } from "react-toastify";
import { TokenType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showToast(source: Promise<any>, status: ToastPromiseParams) {
  toast.promise(source, status);
}

export const getToken = (type: TokenType): string | null => {
  let token = localStorage.getItem(type);
  if (token) token = JSON.parse(token);
  return token;
};
