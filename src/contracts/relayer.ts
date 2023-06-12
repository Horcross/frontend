
export const relayerABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_slashVerifierAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_eevmos",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "slashedStaker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "slashingContract",
        "type": "address"
      }
    ],
    "name": "BanStaker",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "slashedStaker",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "slashingContract",
        "type": "address"
      }
    ],
    "name": "UnbanStaker",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "stakerAddresses",
        "type": "address[]"
      }
    ],
    "name": "banStaker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "relayer",
        "type": "address"
      }
    ],
    "name": "checkRelayer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eevmos",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "relayer",
        "type": "address"
      }
    ],
    "name": "getRelayer",
    "outputs": [
      {
        "internalType": "uint256[4]",
        "name": "",
        "type": "uint256[4]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      }
    ],
    "name": "isBan",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "quit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "registered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "relayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "receiver",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "hash",
        "type": "uint256"
      }
    ],
    "name": "relay",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "relayProofs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256[2]",
            "name": "a",
            "type": "uint256[2]"
          },
          {
            "internalType": "uint256[2][2]",
            "name": "b",
            "type": "uint256[2][2]"
          },
          {
            "internalType": "uint256[2]",
            "name": "c",
            "type": "uint256[2]"
          }
        ],
        "internalType": "struct Restake.ProofData",
        "name": "proofData",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "relayer",
        "type": "address"
      }
    ],
    "name": "slash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "slashVerifier",
    "outputs": [
      {
        "internalType": "contract ISlashVerifier",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "stakerAddresses",
        "type": "address[]"
      }
    ],
    "name": "unbanStaker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]