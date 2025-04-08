import React from 'react';
import Card from './Card';
import styles from '../styles';

const NFTCard = () => {
  return (
    <div className="min-h-screen bg-[#0F1012] flex items-center justify-center p-6">
      <div className="relative">
        {/* Glow effect behind card */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-full" />
        
        {/* Card component */}
        <Card 
          restStyles="hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default NFTCard; 