import React, { Dispatch, SetStateAction } from "react";
import arweave from "arweave";

const NONE = "None";
const AR_CONNECT = "ArConnect";
const ARWEAVE_APP = "ArweaveApp";

export const WalletSelectButton = (props: {
    setIsConnected: (value: React.SetStateAction<boolean>) => void;
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

    async function onWalletDisconnected() {
        setActiveWallet(NONE);
        props.setIsConnected(false);
    }

    return (
        <>
            <WalletButton
                walletName={activeWallet}
                walletAddress={addressText}
                setShowModal={setShowModal}
            />
            {showModal && (
                <WalletModal
                    onClose={() => setShowModal(false)}
                    onConnected={(walletName: string) =>
                        onWalletSelected(walletName)
                    }
                    // onDisconnected={() => onWalletDisconnected()}
                />
            )}
        </>
    );
};

const WalletButton = (props: {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    walletName: string;
    walletAddress: string;
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
                <div
                    className="walletButton"
                    onClick={() => props.setShowModal(true)}
                >
                    Select Wallet
                </div>
            );
    }
};

const WalletModal = (props: {
    onClose: (value: React.SetStateAction<boolean>) => void;
    onConnected: (walletName: string) => Promise<void>;
    // onWalletDisconnected(): Promise<void>;
}) => {
    async function connectWallet(walletName: string) {
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
                    `Attempted to connect unknown wallet ${walletName}`
                );
        }
        props.onConnected(walletName);
        props.onClose(false);
    }

    return (
        <div className="modal">
            <div className="scrim" onClick={() => props.onClose(false)} />
            <div className="container">
                <div className="popup">
                    <h1 className="title">Connect Wallet</h1>
                    <button
                        className="closeButton"
                        onClick={() => props.onClose(false)}
                    >
                        <svg width="14" height="14">
                            <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"></path>
                        </svg>
                    </button>
                    <div className="buttonList">
                        <button
                            className="select-button"
                            onClick={() => connectWallet(AR_CONNECT)}
                        >
                            <p>ArConnect</p>
                            <img
                                src="ArConnect_Logo.png"
                                alt="ArConnect icon"
                            />
                        </button>
                        <button
                            className="select-button"
                            onClick={() => connectWallet(ARWEAVE_APP)}
                        >
                            <p>Arweave.app</p>
                            <img
                                src="ArweaveApp_Logo.svg"
                                alt="ArweaveApp icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
