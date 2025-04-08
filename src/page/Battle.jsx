import React, { useState } from 'react';
import Card from '../components/Card';

const Battle = () => {
  const [player1, setPlayer1] = useState({
    playerName: "Player 1",
    att: 8,
    def: 6,
    health: 100,
    mana: 10,
    goldBalance: 1000,
    level: 25,
    imageUrl: "/characters/garfield-gold.svg",
    specialAbilities: [
      { name: "Food Heal", cost: 3, goldCost: 50 },
      { name: "Monday Rage", cost: 5, goldCost: 100 },
      { name: "Lazy Attack", cost: 2, goldCost: 30 },
      { name: "Cat Nap", cost: 4, goldCost: 80 },
      { name: "Pizza Power", cost: 6, goldCost: 150 }
    ]
  });

  const [player2] = useState({
    playerName: "Player 2",
    att: 5,
    def: 8,
    health: 100,
    mana: 4,
    goldBalance: 1000,
    level: 18,
    imageUrl: "/characters/garfield-silver.svg",
    specialAbilities: [
      { name: "Happy Bark", cost: 0.1, goldCost: 20 },
      { name: "Tail Spin", cost: 0.2, goldCost: 40 },
      { name: "Puppy Eyes", cost: 0.15, goldCost: 30 },
      { name: "Bark Attack", cost: 0.25, goldCost: 50 },
      { name: "Doggy Dash", cost: 0.3, goldCost: 60 }
    ]
  });

  const [gameLog, setGameLog] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ type: '', message: '', damage: 0 });
  const [shakeEffect, setShakeEffect] = useState(false);
  const [turnCount, setTurnCount] = useState(1);
  const [activeEffects, setActiveEffects] = useState({
    player1: [],
    player2: []
  });
  const [battlePhase, setBattlePhase] = useState('PREPARE');
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [energyCount, setEnergyCount] = useState(3);
  const [comboCount, setComboCount] = useState(0);
  const [showButtonEffect, setShowButtonEffect] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [actionCost, setActionCost] = useState(0);

  const makeAMove = (action) => {
    let newPlayer1 = { ...player1 };
    let newPlayer2 = { ...player2 };
    let logMessage = "";
    let damage = 0;

    switch (action) {
      case "attack":
        if (newPlayer1.mana >= 2) {
          damage = Math.max(1, newPlayer1.att - newPlayer2.def);
          newPlayer2.health = Math.max(0, newPlayer2.health - damage);
          newPlayer1.mana -= 2;
          logMessage = `${newPlayer1.playerName} attacked for ${damage} damage!`;
          setPopupContent({ type: 'attack', message: 'ATTACK!', damage });
        }
        break;
      case "heal":
        if (newPlayer1.mana >= 3) {
          const healAmount = 20;
          newPlayer1.health = Math.min(100, newPlayer1.health + healAmount);
          newPlayer1.mana -= 3;
          logMessage = `${newPlayer1.playerName} healed for ${healAmount} health!`;
          setPopupContent({ type: 'heal', message: 'HEAL!', damage: healAmount });
        }
        break;
      case "special":
        if (newPlayer1.mana >= 5) {
          damage = newPlayer1.att * 2.5;
          newPlayer2.health = Math.max(0, newPlayer2.health - damage);
          newPlayer1.mana -= 5;
          logMessage = `${newPlayer1.playerName} unleashed ultimate attack for ${damage} damage!`;
          setPopupContent({ type: 'special', message: 'ULTIMATE ATTACK!', damage });
        }
        break;
      case "charge":
        newPlayer1.mana = Math.min(10, newPlayer1.mana + 3);
        logMessage = `${newPlayer1.playerName} charged mana!`;
        setPopupContent({ type: 'charge', message: 'MANA CHARGED!', damage: 3 });
        break;
      case "shield":
        if (newPlayer1.mana >= 4) {
          const shieldBoost = 6;
          newPlayer1.def += shieldBoost;
          newPlayer1.mana -= 4;
          logMessage = `${newPlayer1.playerName} activated shield! Defense increased by ${shieldBoost}!`;
          setPopupContent({ type: 'shield', message: 'SHIELD UP!', damage: shieldBoost });
        }
        break;
      case "lazy_attack":
        if (newPlayer1.mana >= 2 && newPlayer1.goldBalance >= 30) {
          damage = Math.max(1, (newPlayer1.att * 1.5) - newPlayer2.def);
          newPlayer2.health = Math.max(0, newPlayer2.health - damage);
          newPlayer1.mana -= 2;
          newPlayer1.goldBalance -= 30;
          logMessage = `${newPlayer1.playerName} used Lazy Attack for ${damage} damage!`;
          setPopupContent({ type: 'special', message: 'LAZY ATTACK!', damage });
        }
        break;
      case "cat_nap":
        if (newPlayer1.mana >= 4 && newPlayer1.goldBalance >= 80) {
          const healAmount = 30;
          newPlayer1.health = Math.min(100, newPlayer1.health + healAmount);
          newPlayer1.mana -= 4;
          newPlayer1.goldBalance -= 80;
          logMessage = `${newPlayer1.playerName} took a Cat Nap and recovered ${healAmount} health!`;
          setPopupContent({ type: 'heal', message: 'CAT NAP!', damage: healAmount });
        }
        break;
      case "pizza_power":
        if (newPlayer1.mana >= 6 && newPlayer1.goldBalance >= 150) {
          damage = newPlayer1.att * 3;
          newPlayer2.health = Math.max(0, newPlayer2.health - damage);
          newPlayer1.att += 3; // Permanent attack boost
          newPlayer1.mana -= 6;
          newPlayer1.goldBalance -= 150;
          logMessage = `${newPlayer1.playerName} used Pizza Power for ${damage} damage and gained 3 attack!`;
          setPopupContent({ type: 'special', message: 'PIZZA POWER!', damage });
        }
        break;
      default:
        break;
    }

    if (logMessage) {
      setGameLog(prev => [logMessage, ...prev].slice(0, 5));
      setShowPopup(true);
      setShakeEffect(true);
      setTimeout(() => setShowPopup(false), 2000);
      setPlayer1(newPlayer1);
    }
  };

  const handleButtonClick = (action, event, cost = 0) => {
    const rect = event.target.getBoundingClientRect();
    setClickPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    setShowButtonEffect(true);
    setTimeout(() => setShowButtonEffect(false), 1000);

    if (cost > 0) {
      setPendingAction(action);
      setActionCost(cost);
      setShowConfirmation(true);
    } else {
      makeAMove(action);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/game-bg.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Top Battle Info */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
              <span className="text-white">Turn {turnCount}</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-white">Energy: {energyCount}/10</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
              <span className="text-white">Combo: x{comboCount}</span>
            </div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
            <span className="text-yellow-400">💰</span>
            <span className="text-white font-bold">{player1.goldBalance} GOLD</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Battle Arena
        </h1>

        {/* Battle Field */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ${shakeEffect ? 'animate-shake' : ''}`}>
          {/* Player 1 Card */}
          <div className="flex flex-col items-center">
            <Card
              title={player1.playerName}
              variant="gold"
              att={player1.att}
              def={player1.def}
              health={player1.health}
              mana={player1.mana}
              imageUrl={player1.imageUrl}
              specialAbilities={player1.specialAbilities.map(ability => ability.name)}
              level={player1.level}
            />
          </div>

          {/* Player 2 Card */}
          <div className="flex flex-col items-center">
            <Card
              title={player2.playerName}
              variant="silver"
              att={player2.att}
              def={player2.def}
              health={player2.health}
              mana={player2.mana}
              imageUrl={player2.imageUrl}
              specialAbilities={player2.specialAbilities.map(ability => ability.name)}
              level={player2.level}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { text: "Attack (2 Mana)", action: "attack", color: "red", cost: 0 },
            { text: "Heal (3 Mana)", action: "heal", color: "green", cost: 0 },
            { text: "Special (5 Mana)", action: "special", color: "purple", cost: 0 },
            { text: "Charge Mana", action: "charge", color: "blue", cost: 0 },
            { text: "Shield (4 Mana)", action: "shield", color: "yellow", cost: 0 },
            { text: "Lazy Attack (2 Mana, 30 GOLD)", action: "lazy_attack", color: "orange", cost: 30 },
            { text: "Cat Nap (4 Mana, 80 GOLD)", action: "cat_nap", color: "teal", cost: 80 },
            { text: "Pizza Power (6 Mana, 150 GOLD)", action: "pizza_power", color: "pink", cost: 150 },
            { text: "Pass Turn", action: "pass", color: "indigo", cost: 0 },
            { text: "Clear Log", action: "clear", color: "gray", cost: 0 }
          ].map((btn, index) => (
            <button
              key={index}
              className={`
                relative overflow-hidden px-4 py-2 bg-${btn.color}-500 
                text-white font-bold rounded-lg hover:bg-${btn.color}-600 
                transition-all transform hover:scale-105
              `}
              onClick={(e) => handleButtonClick(btn.action, e, btn.cost)}
            >
              {btn.text}
              {showButtonEffect && (
                <div
                  className="absolute bg-white/30 rounded-full animate-ripple"
                  style={{
                    left: clickPosition.x,
                    top: clickPosition.y,
                    width: '4px',
                    height: '4px'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Game Log */}
        <div className="mt-8 w-full max-w-md bg-black/50 backdrop-blur-sm rounded-lg p-4">
          <h3 className="text-white font-bold mb-2">Battle Log:</h3>
          <div className="space-y-1 max-h-32 overflow-y-auto custom-scrollbar">
            {gameLog.map((log, index) => (
              <p key={index} className="text-gray-300 text-sm">{log}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Effects */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="transform perspective-1000">
            <div className={`
              text-6xl font-bold text-center transform-gpu animate-popup
              ${popupContent.type === 'attack' ? 'text-red-500' :
                popupContent.type === 'heal' ? 'text-green-500' :
                popupContent.type === 'special' ? 'text-purple-500' :
                popupContent.type === 'charge' ? 'text-blue-500' :
                'text-yellow-500'
              }
            `}>
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-50 bg-white"></div>
                <span className="relative">{popupContent.message}</span>
                {popupContent.damage > 0 && (
                  <div className="text-4xl mt-4 animate-bounce-slow">
                    {popupContent.damage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Action</h3>
            <p className="text-gray-300 mb-4">
              This action will cost {actionCost} GOLD. Do you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
                onClick={() => {
                  setShowConfirmation(false);
                  makeAMove(pendingAction);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(50); opacity: 0; }
        }
        @keyframes popup {
          0% { transform: scale(0.5) translateY(-50px); opacity: 0; }
          50% { transform: scale(1.2) translateY(0); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-ripple { animation: ripple 0.6s linear forwards; }
        .animate-popup { animation: popup 0.5s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .perspective-1000 { perspective: 1000px; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Battle;
