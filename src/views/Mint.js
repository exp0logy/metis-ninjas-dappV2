import { useEffect, useState } from "react";
import {
  fetchMintedTokens,
  mintNFT
} from "../utils/interact.js";
import { Row, Col, Alert } from "react-bootstrap";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const Ninja = styled.img`
width: 200px;
height: 200px;
margin: 5px;
border-radius: 10px;
`

const NinjaAdjust = styled.button`
  padding: 10px 35px;
  border-radius: 100px;
  margin: 20px 30px;
  display: inline-block;
`
const Minter = (props) => {
  const wallet = useSelector((state) => state.wallet.connected);

  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [count, setCount] = useState(0);
  const [mintedTokens, setMintedTokens] = useState([]);
  const [info, setInfo] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMintedTokens();
      setInfo(data);
    };
    fetchData();
  });

  const onMintPressed = async (e) => {
    if (!wallet) { walletError() }
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
      mintSuccess()
      return;
    } else {
      setSuccess(false);
      setError(true);
      console.log(error)
    }
  };

  const walletError = () => {
    toast.error('Wallet Not Connected.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const mintSuccess = () => {
    toast.success('Mint Successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

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

            <Col lg={{ span: 2, offset: 2, order: 1 }} md={{ order: 3 }} sm={{ order: 3 }}>
              <NinjaAdjust disabled={count == 0} onClick={decrement}><strong>-</strong></NinjaAdjust>
            </Col>
            <Col lg={4} md={{ order: 2 }} sm={{ order: 2 }}>
              <NinjaAdjust
                disabled={count == 0}
                onClick={onMintPressed}>
                Mint NFT
              </NinjaAdjust>
            </Col>
            <Col lg={{ span: 2, offset: 0, order: 3 }} md={{ order: 1 }} sm={{ order: 1 }}>
              <NinjaAdjust onClick={increment}><strong>+</strong></NinjaAdjust>
            </Col>
          </Row>
          <Row>
            {!success && count != 0 && (
              <p style={{ paddingTop: "15px" }}>Total Cost: {parseFloat(price * count).toFixed(1)} Metis</p>
            )}
            <p style={{ paddingTop: "10px" }}>1 - 2 Ninjas = 2 Metis each<br />
              3 - 5 Ninjas = 1.7 Metis each<br />
              6 - 10 Ninjas = 1.5 Metis each<br />
              10+ Ninjas = 1.2 Metis each</p>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
            />
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