import styled from "styled-components";
import React from "react";
import { connectWallet } from "../utils/interact";
import { useDispatch, useSelector } from "react-redux";
import { setWallet, setWalletAddress } from "../utils/store/reducers/wallet";

const ConWalletButton = styled.button`
    width: 180px;
    border-radius: 25px;
    margin-left:8px;
`

export default function ConnectWallet() {

    const walletConnected = useSelector((state) => state.wallet.connected);
    const walletAddress = useSelector((state) => state.wallet.address);
    const dispatch = useDispatch();

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        dispatch(setWallet(true));
        dispatch(setWalletAddress(walletResponse.address));
    };

    return (
        <ConWalletButton onClick={connectWalletPressed} className="m-auto">
            {walletAddress.length > 0
                ? "Connected: ..." +
                String(walletAddress).substring(37)
                : "Connect Wallet"}
        </ConWalletButton>
    );
}