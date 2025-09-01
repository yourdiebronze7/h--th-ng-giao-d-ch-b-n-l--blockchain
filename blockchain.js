const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contractAddress = '0x...'; // Địa chỉ smart contract
const contractABI = []; // ABI của smart contract

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getProductOrigin(productId) {
    const origin = await contract.methods.getProductOrigin(productId).call();
    return origin;
}

module.exports = { getProductOrigin };