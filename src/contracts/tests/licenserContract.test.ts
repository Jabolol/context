import ArLocal from "arlocal";
import { JWKInterface } from "arweave/node/lib/wallet";
import { LoggerFactory, Warp, WarpFactory, Contract } from "warp-contracts";
import { DeployPlugin, InjectedArweaveSigner } from 'warp-contracts-plugin-deploy';

import { LicenserState, certificateInput } from "../types/types";
import fs from "fs";
import path from "path";
import { readAndCreateBlob } from "../utils/localFileToBlob";

jest.setTimeout(30000);

describe("Testing the Atomic NFT Token", () => {
  let ownerWallet: JWKInterface;
  let owner: string;

  let user2Wallet: JWKInterface;
  let user2: string;

  let user3Wallet: JWKInterface;
  let user3: string;

  let initialState: LicenserState;

  let arlocal: ArLocal;
  let warp: Warp;
  let licenser: Contract<LicenserState>;

  let contractSrc: string;

  let contractId: string;

  beforeAll(async () => {
    arlocal = new ArLocal(1820, false);
    await arlocal.start();

    LoggerFactory.INST.logLevel("error");
    //LoggerFactory.INST.logLevel('debug', 'WasmContractHandlerApi');

    warp = WarpFactory.forLocal(1820).use(new DeployPlugin());

    ({ jwk: ownerWallet, address: owner } = await warp.generateWallet());

    ({ jwk: user2Wallet, address: user2 } = await warp.generateWallet());

    ({ jwk: user3Wallet, address: user3 } = await warp.generateWallet());

    initialState = {
      certificates: [],
      revokedCertificates: [],
    };

    contractSrc = fs.readFileSync(
      path.join(__dirname, "../../../dist/contract.js"),
      "utf8"
    );

    ({ contractTxId: contractId } = await warp.deploy({
      wallet: ownerWallet,
      initState: JSON.stringify(initialState),
      src: contractSrc,
    }));
    console.log("Deployed contract at: ", contractId);
    licenser = warp.contract<LicenserState>(contractId).connect(ownerWallet);
    licenser.setEvaluationOptions({ 
      internalWrites: true,
      unsafeClient: 'allow',
      allowBigInt: true,
    });
  });

  afterAll(async () => {
    await arlocal.stop();
  });

  it("should properly deploy contract", async () => {
    const contractTx = await warp.arweave.transactions.get(contractId);

    expect(contractTx).not.toBeNull();
  });

  it("should read Licenser state", async () => {
    expect((await licenser.readState()).cachedValue.state).toEqual(initialState);
  });

  it("should properly post certificate", async () => {
    await licenser.writeInteraction({
      function: "addCertificateToStudent",
      content: {
        id: 1,
        file: await readAndCreateBlob("./public/scholario.png"),
        recipient: "David Salvatella",
        issuer: "Scholario",
        courseName: "Master in Computer Science",
        promotion: "2020-2021",
        courseStartDate: "2020-09-01",
        courseEndDate: "2021-07-01",
        courseDescription:
          "Master in Computer Science at the University of Barcelona (UB)",
        grade: "9.5",
      },
    });
    const { cachedValue } = await licenser.readState();
    expect(cachedValue.state.certificates[0]).toEqual({
      id: 1,
      file: await readAndCreateBlob("./public/scholario.png"),
      recipient: "David Salvatella",
      issuer: "Scholario",
      courseName: "Master in Computer Science",
      promotion: "2020-2021",
      courseStartDate: "2020-09-01",
      courseEndDate: "2021-07-01",
      courseDescription:
        "Master in Computer Science at the University of Barcelona (UB)",
      grade: "9.5",
    });
  });

  it("should not post certificate with no content", async () => {
    await expect(
      licenser.writeInteraction(
        { function: "addCertificateToStudent" },
        { strict: true }
      )
    ).rejects.toThrow("Creator must provide a message content.");
  });

  it("should properly revoke certificate", async () => {
    await licenser.writeInteraction({
      function: "revokeCertificate",
      content: {
        id: 1,
        revokeReason: "The certificate is not valid anymore",
        revokeDate: "2021-07-01",
        revocationAuthority: "Scholario CEO, Pol Schmidt",
      },
    });
    const { cachedValue } = await licenser.readState();
    expect(cachedValue.state.revokedCertificates[0]).toEqual({
      id: 1,
      revokeReason: "The certificate is not valid anymore",
      revokeDate: "2021-07-01",
      revocationAuthority: "Scholario CEO, Pol Schmidt",
    });
    expect(cachedValue.state.certificates).toEqual([]);
  });
});
