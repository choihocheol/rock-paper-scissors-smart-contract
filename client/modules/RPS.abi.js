const abi = [
  { "inputs": [], "stateMutability": "payable", "type": "constructor" },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "digest", "type": "bytes32" },
      { "internalType": "uint256", "name": "time", "type": "uint256" }
    ],
    "name": "createRoom",
    "outputs": [
      { "internalType": "uint256", "name": "roomNum", "type": "uint256" }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "roomNum", "type": "uint256" },
      { "internalType": "enum RPS.Hand", "name": "_hand", "type": "uint8" }
    ],
    "name": "joinRoom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "roomNum", "type": "uint256" }
    ],
    "name": "payout",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
