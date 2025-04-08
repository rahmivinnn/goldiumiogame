import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-black p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Card Battle Game
        </h1>
        
        <p className="text-gray-400 text-xl mb-8">
          Experience epic card battles with amazing characters!
        </p>

        <button
          onClick={() => navigate('/battle')}
          className="px-8 py-4 text-xl font-bold rounded-xl
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            transform hover:scale-105 transition-all duration-200
            text-white shadow-lg shadow-purple-500/30"
        >
          Start Battle
        </button>
      </div>
    </div>
  );
};

export default Home;
