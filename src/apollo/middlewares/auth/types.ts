import { Operation } from "@apollo/client";
import { Tokens } from "../../../gql/graphql";

export interface FailedOperation {
  operation: Operation;
  settlePromiseWith: (value: Tokens | null) => void;
}
