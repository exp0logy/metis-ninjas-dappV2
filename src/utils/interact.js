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
      if (window.ethereum.networkVersion !== "588")
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x24C' }],
            //  params: [{ chainId: '0x440' }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x24C',
                    chainName: 'Metis Andromeda Testnet',
                    rpcUrls: ['https://stardust.metis.io/?owner=588'],
                  },
                  // {
                  //   chainId: '0x440',
                  //   chainName: 'Metis Andromeda Testnet',
                  //   rpcUrls: ['https://stardust.metis.io/?owner=588'],
                  // },
                ],
              });
            } catch (addError) {
              console.log(addError);
            }
          }
        }
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
    window.alert("Etherum Not Detected in Window. Please install Metamask.")
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
  // const price = count <= 2 ? 2 : count >= 3 && count <= 5 ? 1.7 : count >= 6 && count <= 10 ? 1.5 : 1.2
  // return price

  //
  // Lower logic is for Testnet contract
  //

  const price = count <= 2 ? 0.4 : count >= 3 && count <= 5 ? 0.3 : count >= 6 && count <= 10 ? 0.2 : 0.1
  return price

};

export const mintNFT = async (count) => {
  const web3 = new Web3(window.ethereum);
  const NinjasContract = new web3.eth.Contract(contractABI, contractAddress);

  const value = BigNumber(oneMintPrice(count))
    .shiftedBy(18)
    .times(count)
    .toString();

  try {
    const tx = await NinjasContract.methods.purchase(count).send({
      from: window.ethereum.selectedAddress,
      value: value,
      gasLimit: 3000000
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
