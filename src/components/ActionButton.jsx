import React from 'react';

const ActionButton = ({ 
  onClick, 
  disabled, 
  type = 'default',
  children,
  cost = null,
  className = ''
}) => {
  const getButtonStyle = () => {
    const styles = {
      default: 'from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800',
      attack: 'from-red-500 to-red-700 hover:from-red-600 hover:to-red-800',
      heal: 'from-green-500 to-green-700 hover:from-green-600 hover:to-green-800',
      special: 'from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800',
      charge: 'from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800'
    };
    return styles[type] || styles.default;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 rounded-lg font-bold text-white
        transform transition-all duration-200
        bg-gradient-to-r ${getButtonStyle()}
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:scale-105 active:scale-95
        shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {cost !== null && (
          <span className="text-sm bg-black/20 px-2 py-1 rounded-full">
            {cost} GOLD
          </span>
        )}
      </div>
      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
};

export default ActionButton;
