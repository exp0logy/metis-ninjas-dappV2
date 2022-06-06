import { useEffect, useState } from "react";
import {
  fetchMintedTokens,
  getCurrentWalletConnected,
  mintNFT,
} from "../utils/interact.js";
import { Row, Col, Toast, Alert, ToastContainer, Popover } from "react-bootstrap";
import styled from "styled-components";

const Ninja = styled.img`
width: 200px;
height: 200px;
margin: 5px;
border-radius: 10px;
`

const NinjaAdjust = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 100px;
  margin: 0 10px;
`


const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(0);
  const [mintedTokens, setMintedTokens] = useState([]);
  const [info, setInfo] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { address, status } = await getCurrentWalletConnected();

      setWallet(address);
      setStatus(status);

      addWalletListener();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMintedTokens();
      setInfo(data);
    };
    fetchData();
  });

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("");
          // setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const onMintPressed = async (e) => {
    e.preventDefault();
    const { success, status, tx } = await mintNFT(count);
    console.log(status, success);
    setStatus(status);
    if (success) {
      setSuccess(true);
      let mintedTokensFromTX;

      // If user mints >1 NFT, it returns an array. If 1 NFT => Object
      if (Array.isArray(tx.events.Transfer)) {
        mintedTokensFromTX = tx.events.Transfer.map(
          (item) => item.returnValues.tokenId
        );
      } else {
        mintedTokensFromTX = [tx.events.Transfer.returnValues.tokenId];
      }

      setMintedTokens(mintedTokensFromTX);
      return;
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  function increment() { setCount(count + 1); }
  function decrement() { setCount(count - 1); }

  const price = count > 3 && count < 5 ? 1.7 : count >= 5 && count < 10 ? 1.5 : count >= 10 ? 1.2 : 2

  const dismissWarning = () => { setError(false) };

  var txnId = `https://andromeda-explorer.metis.io/tx/${status}/`

  return (
    <Col id="mint" className="text-center" style={{ paddingTop: '50px' }}>
      {info <= 5000 ? (
        <Col>
          <Row>
            <h2>Minted: {info} / 5000</h2>
            <h3 style={{ padding: "10px 0" }}>How Many?</h3>
            <h2 style={{ padding: "10px 0" }}>{count}</h2>
          </Row>
          <Row style={{ padding: "10px 0" }}>
            <div className="text-center">
              <NinjaAdjust disabled={count == 0} onClick={decrement}>-</NinjaAdjust>
              <NinjaAdjust
                disabled={count == 0}
                onClick={onMintPressed}>
                Mint NFT
              </NinjaAdjust>
              <NinjaAdjust onClick={increment}>+</NinjaAdjust>
              {!success && count != 0 && (
                <h4 style={{ padding: "15px 0" }}>Total Cost: {parseFloat(price * count).toFixed(1)} Metis</h4>
              )}
              {error &&
                <ToastContainer position="middle-center">
                  <Toast bg="danger" onClose={() => setError(false)} show={error} delay={5000} autohide>
                    <Toast.Header>
                      <strong className="me-auto">Ninja Master</strong>
                    </Toast.Header>
                    <Toast.Body>Have you connected your wallet?</Toast.Body>
                  </Toast>
                </ToastContainer>}
            </div>
          </Row>
        </Col>
      ) : (
        <h3>All Ninjas have been minted!</h3>
      )
      }
      <Col>
        {success && mintedTokens.length !== 0 && (
          <Col style={{ paddingTop: "20px" }} className="nft_images">
            <Alert variant={success}>
              <a href={txnId}>View Your Transaction</a>
            </Alert>

            <h2 style={{ padding: "20px 0" }}>Your Ninja Champions!</h2>
            {mintedTokens.map((item) => (
              <Ninja
                src={`/images/TEST/${Math.floor(Math.random() * (5 - 10) + 1 + 10)}.png`}
                alt="Toadz"
              />
            ))}
          </Col>
        )
        }
      </Col>



    </Col >





  )
};


export default Minter;