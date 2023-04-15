import {
  RevokeAction,
  LicenserState,
  ContractResult,
} from "@/contracts/types/types";
import { ContractError } from "warp-contracts";

export const revokeCertificateFromStudent = (
  state: LicenserState,
  action: RevokeAction
): ContractResult => {
  if (!action.input.id) {
    throw new ContractError(
      `Creator must provide the certificateID to remove its content.`
    );
  }
  const indexToRemove = state.certificates.findIndex(
    (c) => c.id === action.input.id
  );
  state.certificates.splice(indexToRemove, 1);
  state.revokedCertificates.push({
    ...action.input,
  });
  return { state };
};
