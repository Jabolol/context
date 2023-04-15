// src/contracts/contract.ts

import { ContractError } from "warp-contracts";
import { readMessage } from "./actions/read/readCertificate";
import { LicenserState, AddAction, RevokeAction, ContractResult } from "./types/types";
import { addCertificateToStudent } from "./actions/write/addCertificateToStudent";
import { revokeCertificateFromStudent } from "./actions/write/revokeCertificateFromStudent";

export function handle(
  state: LicenserState,
  action: AddAction | RevokeAction
): ContractResult {
  switch (action.function) {
    case "addCertificateToStudent":
      return addCertificateToStudent(state, action);
    case "revokeCertificateFromStudent":
      return revokeCertificateFromStudent(state, action);
    default:
      throw new ContractError(
        `No function supplied or function not recognised"`
      );
  }
}
