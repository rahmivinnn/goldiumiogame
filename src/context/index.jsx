import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { ethers } from "ethers";

import Web3Modal from "web3modal";
import { ABI, ADDRESS, providerOptions } from "../contract";
import { createEventListener } from "./createEventListener";
import { GetParams } from "../utils/onboard";

const GlobalContext = createContext();

// Mock data untuk testing
const mockGameData = {
  players: [
    { playerName: "Player 1", playerHealth: 25, playerMana: 4 },
    { playerName: "Player 2", playerHealth: 25, playerMana: 4 }
  ],
  pendingBattles: [
    { name: "Test Battle 1", battleStatus: 0 },
    { name: "Test Battle 2", battleStatus: 0 }
  ],
  activeBattle: {
    name: "Active Battle",
    players: ["0x123", "0x456"],
    winner: "0x00",
    battleStatus: 1
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("0x123456789");  // Default address
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState({
    // Mock contract methods
    isPlayer: () => Promise.resolve(true),
    getAllBattles: () => Promise.resolve(mockGameData.pendingBattles),
    getPlayer: () => Promise.resolve({ playerHealth: 25, playerMana: 4 }),
    getPlayerToken: () => Promise.resolve({ attackStrength: 10, defenseStrength: 5 })
  });
  const [battleName, setBattleName] = useState("");
  const [gameData, setGameData] = useState(mockGameData);
  const [battleGround, setBattleGround] = useState("bg-astral");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState({ status: false, type: "info", message: "" });
  const player1Ref = useRef();
  const player2Ref = useRef();
  const navigate = useNavigate();

  // Simplified connect wallet function that automatically succeeds
  const connectWallet = async () => {
    return true;
  };

  useEffect(() => {
    // Auto-navigate to battle after short delay
    const timer = setTimeout(() => {
      navigate('/battle/test-battle');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    contract,
    walletAddress,
    showAlert,
    setShowAlert,
    battleName,
    setBattleName,
    gameData,
    battleGround,
    setBattleGround,
    errorMessage,
    setErrorMessage,
    player1Ref,
    player2Ref,
    connectWallet
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
