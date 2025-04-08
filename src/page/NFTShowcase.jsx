import React from 'react';
import { NFTCard } from '../components';

const NFTShowcase = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-rajdhani font-bold text-center text-[#FFD700] mb-12 tracking-wider">
          NFT Card Showcase
        </h1>
        <div className="flex justify-center items-center">
          <NFTCard />
        </div>
      </div>
    </div>
  );
};

export default NFTShowcase; 