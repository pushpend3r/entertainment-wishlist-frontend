import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

const error = onError(({ response }) => {
  response?.errors?.forEach((error) => {
    toast.error(error.message);
  });
});

export default error;
