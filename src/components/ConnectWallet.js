import styled from "styled-components";
import React, { useState } from "react";
import { connectWallet } from "../utils/interact";

const ConWalletButton = styled.button`
    width: 180px;
    border-radius: 25px;
    margin-left:8px;
`

export default function ConnectWallet() {

    const [walletAddress, setWallet] = useState('');
    const [status, setStatus] = useState('');

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address)
    };

    return (
        <ConWalletButton onClick={connectWalletPressed} className="m-auto">
            {walletAddress.length > 0
                ? "Connected: ..." +
                String(walletAddress).substring(38)
                : "Connect Wallet"}
        </ConWalletButton>
    );
}