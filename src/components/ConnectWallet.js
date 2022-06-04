import styled from "styled-components";
import React, { useState } from "react";

const ConWalletButton = styled.button`
    width: 180px;
    border-radius: 25px;
    margin-left:8px;
`

export class ConnectWallet extends React.Component {
    render() {
        return (
            <ConWalletButton className="m-auto">
                Connect Wallet
            </ConWalletButton>
        );
    }
};

export default ConnectWallet;