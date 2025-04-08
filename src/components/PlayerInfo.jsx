import React from 'react';

const PlayerInfo = ({ player, isActive }) => {
  const healthPercentage = (player.health / player.maxHealth) * 100;
  const manaPercentage = (player.mana / player.maxMana) * 100;

  return (
    <div className={`
      p-4 rounded-lg backdrop-blur-sm
      ${isActive ? 'bg-purple-900/50 ring-2 ring-purple-500' : 'bg-gray-900/50'}
      transition-all duration-300
    `}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold">{player.name}</h3>
        <div className="flex space-x-2">
          {player.activeEffects.map((effect, index) => (
            <div 
              key={index}
              className="px-2 py-1 rounded-full bg-purple-500/30 text-purple-200 text-xs"
            >
              {effect}
            </div>
          ))}
        </div>
      </div>

      {/* Health Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>HP</span>
          <span>{player.health}/{player.maxHealth}</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300"
            style={{ width: `${healthPercentage}%` }}
          />
        </div>
      </div>

      {/* Mana Bar */}
      <div>
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>MP</span>
          <span>{player.mana}/{player.maxMana}</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
            style={{ width: `${manaPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
