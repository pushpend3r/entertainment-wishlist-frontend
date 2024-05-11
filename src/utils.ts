import { ToastPromiseParams, toast } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showToast(source: Promise<any>, status: ToastPromiseParams) {
  toast.promise(source, status);
}
