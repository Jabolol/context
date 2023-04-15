import React, { Dispatch, SetStateAction, useState } from "react";
import { BiError } from "react-icons/bi";
import arweave from "arweave";
import ArweaveLogo from "./Arweave";

const NONE = "None";
const AR_CONNECT = "ArConnect";
const ARWEAVE_APP = "ArweaveApp";

export const WalletSelectButton = (props: {
  setIsConnected: (value: React.SetStateAction<boolean>) => void;
  isMobile: boolean;
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [activeWallet, setActiveWallet] = React.useState(NONE);
  const [addressText, setAddressText] = React.useState("xxxxx...xxx");

  async function onWalletSelected(walletName: string) {
    let address = await window.arweaveWallet.getActiveAddress();
    if (address) {
      const firstFive = address.substring(0, 5);
      const lastFive = address.substring(address.length - 5);
      setAddressText(`${firstFive}...${lastFive}`);
      props.setIsConnected(true);
    }
    setActiveWallet(walletName);
  }

  return (
    <>
      <WalletButton
        walletName={activeWallet}
        walletAddress={addressText}
        setShowModal={setShowModal}
        isMobile={props.isMobile}
      />
      {showModal && (
        <WalletModal
          onClose={() => setShowModal(false)}
          onConnected={(walletName: string) => onWalletSelected(walletName)}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

const WalletButton = (props: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  walletName: string;
  walletAddress: string;
  isMobile: boolean;
}) => {
  switch (props.walletName) {
    case AR_CONNECT:
      return (
        <div className="walletButton">
          <img src="ArConnect_Logo.png" alt="wallet icon" />
          <p>{props.walletAddress}</p>
        </div>
      );
    case ARWEAVE_APP:
      return (
        <div className="walletButton altFill">
          <img src="ArweaveApp_Logo.svg" alt="wallet icon" />
          <p>{props.walletAddress}</p>
        </div>
      );
    default:
      return (
        <button
          onClick={() => props.setShowModal(true)}
          className={props.isMobile
            ? "inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            : "inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"}
          aria-label="Select Wallet"
          title="Select Wallet"
        >
          Select Wallet
        </button>
      );
  }
};

const WalletModal = (props: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onClose: (value: React.SetStateAction<boolean>) => void;
  onConnected: (walletName: string) => Promise<void>;
}) => {
  const [unsupported, setUnsupported] = useState<{
    arweave: boolean;
    coinbase: boolean;
    opera: boolean;
    wallet: boolean;
    fortmatic: boolean;
  }>({
    arweave: false,
    coinbase: false,
    opera: false,
    wallet: false,
    fortmatic: false,
  });
  async function connectWallet(walletName: string) {
    if (!window.arweaveWallet) {
      setUnsupported((o) => ({ ...o, arweave: true }));
      await new Promise((r) => setTimeout(r, 5000));
      setUnsupported((o) => ({ ...o, arweave: false }));
      return;
    }
    switch (walletName) {
      case AR_CONNECT:
        await window.arweaveWallet.connect([
          "ACCESS_ADDRESS",
          "SIGN_TRANSACTION",
          "DISPATCH",
        ]);
        break;
      case ARWEAVE_APP:
        break;
      default:
        throw new Error(
          `Attempted to connect unknown wallet ${walletName}`,
        );
    }
    props.onConnected(walletName);
    props.onClose(false);
  }

  return (
    <>
      <div
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative rounded-lg shadow bg-gray-700">
            <button
              onClick={() => props.setShowModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
              data-modal-hide="crypto-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                >
                </path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-4 border-b rounded-t border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl text-white">
                Connect wallet
              </h3>
            </div>
            <div className="p-6">
              <p className="text-sm font-normal text-gray-500 text-gray-400">
                Connect with one of our available providers.
              </p>
              <ul className="my-4 space-y-3">
                {unsupported.arweave
                  ? (
                    <li>
                      <div
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                        role="alert"
                      >
                        <BiError className="w-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Install Arconnect: {" "}
                          <a
                            className="font-bold underline"
                            href="https://arconnect.io/"
                          >
                            https://arconnect.io/
                          </a>
                        </span>
                      </div>
                    </li>
                  )
                  : (
                    <li>
                      <a
                        onClick={() => connectWallet(AR_CONNECT)}
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <ArweaveLogo />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Arweave
                        </span>
                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded bg-gray-700 text-gray-400">
                          Popular
                        </span>
                      </a>
                    </li>
                  )}
                {unsupported.coinbase
                  ? (
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <BiError className="w-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Coinbase Wallet is not supported yet.
                        </span>
                      </a>
                    </li>
                  )
                  : (
                    <li>
                      <a
                        onClick={async () => {
                          setUnsupported((o) => ({ ...o, coinbase: true }));
                          await new Promise((r) => setTimeout(r, 5000));
                          setUnsupported((o) => ({ ...o, coinbase: false }));
                        }}
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <svg
                          className="h-5"
                          viewBox="0 0 292 292"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                            fill="#3259A5"
                          />
                          <path
                            d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                            fill="white"
                          />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Coinbase Wallet
                        </span>
                      </a>
                    </li>
                  )}
                {unsupported.opera
                  ? (
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <BiError className="w-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Opera Wallet is not supported yet.
                        </span>
                      </a>
                    </li>
                  )
                  : (
                    <li>
                      <a
                        onClick={async () => {
                          setUnsupported((o) => ({ ...o, opera: true }));
                          await new Promise((r) => setTimeout(r, 5000));
                          setUnsupported((o) => ({ ...o, opera: false }));
                        }}
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <svg
                          className="h-5"
                          viewBox="0 0 75.591 75.591"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <linearGradient
                            id="a"
                            gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                            gradientUnits="userSpaceOnUse"
                            x2="1"
                          >
                            <stop offset="0" stopColor="#ff1b2d" />
                            <stop offset=".3" stopColor="#ff1b2d" />
                            <stop offset=".614" stopColor="#ff1b2d" />
                            <stop offset="1" stopColor="#a70014" />
                          </linearGradient>
                          <linearGradient
                            id="b"
                            gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                            gradientUnits="userSpaceOnUse"
                            x2="1"
                          >
                            <stop offset="0" stopColor="#9c0000" />
                            <stop offset=".7" stopColor="#ff4b4b" />
                            <stop offset="1" stopColor="#ff4b4b" />
                          </linearGradient>
                          <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                            <path
                              d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                              fill="url(#a)"
                            />
                            <path
                              d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                              fill="url(#b)"
                            />
                          </g>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Opera Wallet
                        </span>
                      </a>
                    </li>
                  )}
                {unsupported.wallet
                  ? (
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <BiError className="w-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          WalletConnect is not supported yet.
                        </span>
                      </a>
                    </li>
                  )
                  : (
                    <li>
                      <a
                        onClick={async () => {
                          setUnsupported((o) => ({ ...o, wallet: true }));
                          await new Promise((r) => setTimeout(r, 5000));
                          setUnsupported((o) => ({ ...o, wallet: false }));
                        }}
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <svg
                          className="h-5"
                          viewBox="0 0 512 512"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <radialGradient
                              cx="0%"
                              cy="50%"
                              fx="0%"
                              fy="50%"
                              r="100%"
                              id="radialGradient-1"
                            >
                              <stop stopColor="#5D9DF6" offset="0%"></stop>
                              <stop stopColor="#006FFF" offset="100%"></stop>
                            </radialGradient>
                          </defs>
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g id="logo">
                              <rect
                                id="base"
                                fill="url(#radialGradient-1)"
                                x="0"
                                y="0"
                                width="512"
                                height="512"
                                rx="256"
                              >
                              </rect>
                              <path
                                d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                                id="WalletConnect"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                              </path>
                            </g>
                          </g>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          WalletConnect
                        </span>
                      </a>
                    </li>
                  )}
                {unsupported.fortmatic
                  ? (
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <BiError className="w-5" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Fortmatic is not supported yet.
                        </span>
                      </a>
                    </li>
                  )
                  : (
                    <li>
                      <a
                        onClick={async () => {
                          setUnsupported((o) => ({ ...o, fortmatic: true }));
                          await new Promise((r) => setTimeout(r, 5000));
                          setUnsupported((o) => ({ ...o, fortmatic: false }));
                        }}
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                      >
                        <svg
                          className="h-4"
                          viewBox="0 0 96 96"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z"
                            fill="#617BFF"
                          />
                          <path
                            d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z"
                            fill="#617BFF"
                          />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Fortmatic
                        </span>
                      </a>
                    </li>
                  )}
              </ul>
              <div>
                <span className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline text-gray-400">
                  <svg
                    className="w-3 h-3 mr-2"
                    focusable="false"
                    data-prefix="far"
                    data-icon="question-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                    >
                    </path>
                  </svg>
                  You will only need to do this once.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
