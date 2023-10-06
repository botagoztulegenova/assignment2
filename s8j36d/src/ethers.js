import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const privateKey = 'YOUR_PRIVATE_KEY';
const wallet = new ethers.Wallet(privateKey, provider);

// Replace these with your contract's ABI and address
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "enum RockPaperScissors.Choice",
				"name": "_playerChoice",
				"type": "uint8"
			}
		],
		"name": "play",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gameHistory",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "enum RockPaperScissors.Choice",
				"name": "playerChoice",
				"type": "uint8"
			},
			{
				"internalType": "enum RockPaperScissors.Choice",
				"name": "contractChoice",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "enum RockPaperScissors.Result",
				"name": "result",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress = 0x266C35c83a1d501dbEc0725BaB56Ac6DD8C766A2;

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Call a read-only function on the contract
async function callContractFunction() {
  const result = await contract.someFunction();
  console.log('Result of someFunction:', result);
}

// Send a transaction to the contract
async function sendTransaction() {
  const txResponse = await contract.someFunctionWithParams(param1, param2);
  await txResponse.wait();
  console.log('Transaction hash:', txResponse.hash);
}

// Example usage
callContractFunction();
// sendTransaction(); // Uncomment this line to send a transaction to the contract
