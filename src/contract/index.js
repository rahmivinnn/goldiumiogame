import contract from "./AVAXGods.json";
console.log(contract.abi);

// Testnet address for the game contract
export const ADDRESS = "0x62c6230Ec5ebd8f770E3dD8Af6E3f0c7E5778Cbb";

export const { abi: ABI } = contract;

// Initialize Web3Modal options
export const providerOptions = {
  binancechainwallet: {
    package: true
  },
  walletconnect: {
    package: true,
    options: {
      infuraId: "your-infura-id" // Get from infura.io
    }
  }
};
