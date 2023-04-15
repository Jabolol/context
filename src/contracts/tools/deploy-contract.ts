import fs from "fs";
import path from "path";
import { WarpFactory } from "warp-contracts";
import crypto from "node:crypto"
import {
  DeployPlugin,
  InjectedArweaveSigner,
} from "warp-contracts-plugin-deploy";
import getTags from "../utils/getTags";
import { ArweaveWebSockets } from "arweave-wallet-connector-node";
import { LicenserState } from "../types/types";

(async () => {
  const warp = WarpFactory.forMainnet().use(new DeployPlugin());
  const contractSrc = fs.readFileSync(
    path.join(process.cwd(), "dist/contract.js"),
    "utf8"
  );
  // const jwk = await warp.arweave.wallets.generate();
  // const walletAddress = "OXCMXSVAQriRdqCRjz6ts15ECXXODuncnCNVj0UHyDc"
    /*
  const providerURL = "arweave.app";
  const yourApplicationInfo = {
    name: "Your application name",
    logo: "URL of your logo to be displayed to users",
  };

  const wallet = new ArweaveWebSockets(providerURL, yourApplicationInfo);
  */
  // const address = await wallet.connect();
  // await wallet.connect();
  // const userSigner = new InjectedArweaveSigner(wallet.namespaces.arweaveWallet);
  // await userSigner.setPublicKey();

  const initialState: LicenserState = {
    certificates: [],
    revokedCertificates: [],
  };
  const jwk = await warp.arweave.wallets.generate();


  console.log("Deployment started");
  const { contractTxId, srcTxId } = await warp.deploy(
    {
      wallet: jwk,
      initState: JSON.stringify(initialState),
      src: contractSrc,
    },
    true
  );
  console.log("Deployment completed: " + contractTxId + " " + srcTxId);

})();
