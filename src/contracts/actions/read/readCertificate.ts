import {
  LicenserState,
  ContractResult,
  AddAction,
} from "@/contracts/types/types";
import { ContractError } from "warp-contracts";

export const readMessage = (
  state: LicenserState,
  { input: { id } }: AddAction
): ContractResult => {
  const certificate = state.certificates.find((m) => m.id == id);

  if (!certificate) {
    throw new ContractError(`Certificate with id: ${id} does not exist`);
  }

  return { result: certificate };
};
