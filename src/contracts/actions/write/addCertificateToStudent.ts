import { AddAction, LicenserState, ContractResult } from "@/contracts/types/types";
import { ContractError } from "warp-contracts";

export const addCertificateToStudent = (
  state: LicenserState,
  action : AddAction
): ContractResult => {
  const metadata = state.certificates;
  if (!action.input) {
    throw new ContractError(`Creator must provide a message content.`);
  }

  const id = metadata.length + 1;
  action.input.id = id;
  
  state.certificates.push({
    ...action.input
  });

  return { state };
};
