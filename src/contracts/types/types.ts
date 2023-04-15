// will hold all the possible inputs that user can write to our contract
export interface AddAction {
  function: "addCertificateToStudent";
  input: certificateInput;
  caller: string;
}

export interface RevokeAction {
  function: "revokeCertificateFromStudent";
  input: revokeInput;
  caller: string;
}

export type File = { image: Blob; pdf: Blob } | { pdf: Blob } | { image: Blob };

export type certificateInput = {
  id: number;
  file: File;
  recipient: string;
  issuer: string;
  promotion: Date;
  courseName: string;
  courseDescription: string;
  courseStartDate: Date;
  courseEndDate: Date;
  grade?: string;
  DigitalSignature?: string;
  CertificateUrl?: string;
  AdditionalNotes?: string;
};

export type revokeInput = {
    id: number;
    revokeReason: string;
    revokeDate: Date;
    revocationAuthority?: string;
    digitalSignature?: string;
}

// state of the contract which will be updated when users will interact with it
export interface LicenserState {
  certificates: certificateInput[];
  revokedCertificates: revokeInput[];
}

// What can be returned from our contract
export type ContractResult = { state: LicenserState } | { result: certificateInput } | { result: revokeInput };

// DAO PART

export interface Contributor {
  role: string;
}

export type ProposalStatus = "proposal" | "abandoned" | "approved";
export const FieldTypeAllowedValues = [
  "String",
  "Int",
  "Float",
  "Boolean",
  "Schema",
  "Map",
  "Ref",
  "Refs",
] as const;
export type FieldType = typeof FieldTypeAllowedValues[number];

export interface Field {
  description: string;
  type: FieldType;
  schemaId?: string;
  schemaVersion?: number;
  required?: boolean;
}

export interface Proposal {
  name: string;
  proposer: string;
  schema: SchemaData;
  createdDate: number;
  updatedDate?: number;
  status: ProposalStatus;
  schemaVersion: number;
}

export interface SchemaGroupState {
  canEvolve: boolean;
  evolve?: string;
  codebase: string;
  groupId: string;
  contributors: {
    [dataId: string]: Contributor;
  };
  schemas: {
    [schemaId: string]: Schema;
  };
  config: SchemaGroupConfig;
  init: boolean;
}

export type Schema = {
  data: SchemaData;
  historic: Proposal[];
};

export type SchemaDataCollection = {
  [schema: string]: SchemaData;
};

export type SchemaData = {
  [name: string]: Field;
};
export interface SchemaGroupConfig {
  registry: string;
}

export interface SchemaGroupAction {
  input: SchemaGroupInput;
  caller: string;
}

export interface SchemaGroupInput {
  function: SchemaGroupFunction;
  proposalName?: string;
  proposalId?: number;
  schema?: Schema;
  schemaData?: SchemaData;
  role?: string;
  value?: string;
  status?: ProposalStatus;
  schemaVersion?: number;
  schemaId?: string;
  groupId?: string;
  dataIdCaller?: string;
  dataId?: string;
  keyId?: string;
  keyType?: KeyType;
  signature?: string;
  signatureData?: any;
  data?: any;
  configProp?: string;
  codebase?: string;
}

export type SchemaGroupFunction =
  | "addContributor"
  | "getContributors"
  | "addProposal"
  | "editProposal"
  | "editContributor"
  | "evolve"
  | "write"
  | "verify"
  | "setConfig"
  | "addSchema"
  | "getSchema"
  | "init"
  | "getCodebase";

export type ActionResult = {
  error: string | boolean;
};
export type SchemaGroupResult = { state: SchemaGroupState } | { result: any };
