import { useEffect, useState } from "react";
import {
  fetchMintedTokens,
  getCurrentWalletConnected,
  mintNFT,
} from "../utils/interact.js";
import { Row, Col, Alert } from "react-bootstrap";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ninja = styled.img`
width: 200px;
height: 200px;
margin: 5px;
border-radius: 10px;
`

const NinjaAdjust = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 100px;
  margin: 20px 30px;
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
      console.log(error)
    }
  };

  function increment() { setCount(count + 1); }
  function decrement() { setCount(count - 1); }

  const price = count > 3 && count < 5 ? 1.7 : count >= 5 && count < 10 ? 1.5 : count >= 10 ? 1.2 : 2

  var txnId = `https://andromeda-explorer.metis.io/tx/${status}/`

  return (
    <Col id="mint" className="text-center" style={{ paddingTop: '100px' }}>
      {info <= 5000 ? (
        <Col>
          <Row>
            <h1 style={{ paddingBottom: "70px" }}>Mint your Ninjas</h1>
            <h1 style={{ fontSize: "70px" }}>{info} / 5000</h1>
            <h3 style={{ padding: "30px 0" }}>How Many?</h3>
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
                <p style={{ paddingTop: "15px" }}>Total Cost: {parseFloat(price * count).toFixed(1)} Metis</p>
              )}
              <p style={{ paddingTop: "10px" }}>1 - 2 Ninjas = 2 Metis each<br />
                3 - 5 Ninjas = 1.7 Metis each<br />
                6 - 10 Ninjas = 1.5 Metis each<br />
                10+ Ninjas = 1.2 Metis each</p>
              {error && <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              }
            </div>
          </Row>
        </Col >
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
                src={`/images/ninjas/${Math.floor(Math.random() * (5 - 10) + 1 + 10)}.png`}
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