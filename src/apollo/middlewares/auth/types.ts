import { Operation } from "@apollo/client";
import { Tokens } from "../../../types";

export interface FailedOperation {
  operation: Operation;
  settlePromiseWith: (value: Tokens | null) => void;
}

export interface GetNewTokens {
  getNewTokens: Tokens;
}
