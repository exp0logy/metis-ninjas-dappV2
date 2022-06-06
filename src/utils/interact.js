import BigNumber from "bignumber.js";
import Web3 from "web3/dist/web3.min.js";

import contractABI from "./contract-abi.json";

const contractAddress = "0x4FEc2339cC9dcD9bfFDAcC589460111A06cAB80c"; //TESNET 
//const contractAddress = "0xE1f73A7146d23E7dD666CCd5C8D27d976024DeE4"; // MAINNET

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const fetchMintedTokens = async () => {
  //const web3 = new Web3("https://andromeda.metis.io/?owner=1088");    //MAINNET
  const web3 = new Web3("https://stardust.metis.io/?owner=588");        //TESTNET
  const NinjasContract = new web3.eth.Contract(contractABI, contractAddress);
  const info = await NinjasContract.methods.getInfo().call();

  return info[0];
};

const oneMintPrice = (count) => {
  if (count < 5) return 0;
  if (count >= 5 && count < 10) return 0;
  return 0

  //
  // Lower logic is for Testnet contract
  //

  // if (count < 5) return 0.01;
  // if (count >= 5 && count < 10) return 0.005;
  // return 0.003;
};

export const mintNFT = async (count) => {
  if (!window.ethereum)
    return {
      success: false,
      status: "Add Metamask",
      tx: null,
    };

  if (window.ethereum.networkVersion !== "588")
    return {
      success: false,
      status: "Connect to Andromeda Metis",
      tx: null,
    };

  const web3 = new Web3(window.ethereum);
  const NinjasContract = new web3.eth.Contract(contractABI, contractAddress);

  const value = BigNumber(oneMintPrice(count))
    .shiftedBy(18)
    .times(count)
    .toString();

  try {
    const tx = await NinjasContract.methods.purchase(count).send({
      from: window.ethereum.selectedAddress,
      value,
    });
    return {
      success: true,
      status:
        tx.transactionHash,
      tx: tx,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
      tx: null,
    };
  }
};
