require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition');
require('dotenv').config();

const {
  MONSOON_RPC_URL,
  MONSOON_CHAIN_ID,
  L2_RPC_URL,       
  L2_CHAIN_ID,     
  PRIVATE_KEY,
  TREASURY_PRIVATE_KEY,
  RESERVE_PRIVATE_KEY,
  MONSOON2_RPC_URL,
  MONSOON2_CHAIN_ID,
  MONSOON2_L2_RPC_URL,
  MONSOON2_L2_CHAIN_ID,
  MONSOON3_RPC_URL,
  MONSOON3_CHAIN_ID,
  MONSOON3_L2_RPC_URL,
  MONSOON3_L2_CHAIN_ID
} = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    monsoon: {
      url: MONSOON_RPC_URL,
      chainId: Number(MONSOON_CHAIN_ID),
      accounts: [`0x${PRIVATE_KEY}`], // Private key for Monsoon (Layer 1)
    },
    l2: { 
      url: L2_RPC_URL,
      chainId: Number(L2_CHAIN_ID),
      accounts: [`0x${TREASURY_PRIVATE_KEY}`, `0x${RESERVE_PRIVATE_KEY}`], // Private keys for Treasury and Reserve (Layer 2)
    },
    monsoon2: {  // Monsoon2 Layer 1 network
      url: MONSOON2_RPC_URL,
      chainId: Number(MONSOON2_CHAIN_ID),  // Chain ID for Monsoon2 Layer 1
      accounts: [`0x${PRIVATE_KEY}`], // Using the same private key as Monsoon1
    },
    monsoon2_l2: {  // Monsoon2 Layer 2 network
      url: MONSOON2_L2_RPC_URL,
      chainId: Number(MONSOON2_L2_CHAIN_ID),  // Chain ID for Monsoon2 Layer 2
      accounts: [`0x${TREASURY_PRIVATE_KEY}`, `0x${RESERVE_PRIVATE_KEY}`], // Private keys for Treasury and Reserve (Layer 2)
    },
    monsoon3: {  // Monsoon3 Layer 1 network
      url: MONSOON3_RPC_URL,
      chainId: Number(MONSOON3_CHAIN_ID),  // Chain ID for Monsoon3 Layer 1
      accounts: [`0x${PRIVATE_KEY}`], // Using the same private key as Monsoon1
    },
    monsoon3_l2: {  // Monsoon3 Layer 2 network
      url: MONSOON3_L2_RPC_URL,
      chainId: Number(MONSOON3_L2_CHAIN_ID),  // Chain ID for Monsoon3 Layer 2
      accounts: [`0x${TREASURY_PRIVATE_KEY}`, `0x${RESERVE_PRIVATE_KEY}`], // Private keys for Treasury and Reserve (Layer 2)
    },
  },
  compilers: [
    {
      version: "0.8.20",
    },
  ],
};
