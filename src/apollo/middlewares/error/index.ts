import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

// generic error handler
const error = onError(({ response }) => {
  response?.errors?.forEach((error) => {
    // skip 401 errors
    if (error?.extensions?.code === "UNAUTHENTICATED") return;

    toast.error(error.message);
  });
});

export default error;
