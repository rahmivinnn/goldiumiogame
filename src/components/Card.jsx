import React, { useState, useEffect, useRef } from 'react';

const Card = ({
  title,
  variant = 'default',
  att,
  def,
  health,
  mana,
  imageUrl,
  specialAbilities = [],
  isSelected = false,
  onClick,
  disabled = false,
  className = '',
  level = 1,
  isAttacking = false,
  isDefending = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [flameIntensity, setFlameIntensity] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [glowColor, setGlowColor] = useState('rgba(255, 255, 255, 0.1)');

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setFlameIntensity(Math.random() * 0.5 + 0.5);
        setGlowColor(`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setFlameIntensity(0);
      setGlowColor('rgba(255, 255, 255, 0.1)');
    }
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const getFrameUrl = () => {
    const variantMap = {
      default: '/frames/default-frame.svg',
      gold: '/frames/gold-frame.svg',
      silver: '/frames/silver-frame.svg',
      diamond: '/frames/diamond-frame.svg',
      emerald: '/frames/emerald-frame.svg',
      royal: '/frames/royal-frame.svg'
    };
    return variantMap[variant.toLowerCase()] || variantMap.default;
  };

  const getVariantStyle = () => {
    const styles = {
      default: 'from-gray-700 to-gray-900',
      gold: 'from-yellow-500 to-yellow-700',
      silver: 'from-gray-300 to-gray-500',
      diamond: 'from-blue-300 to-blue-500',
      emerald: 'from-green-500 to-green-700',
      royal: 'from-purple-500 to-purple-700'
    };
    return styles[variant.toLowerCase()] || styles.default;
  };

  return (
    <div 
      ref={cardRef}
      className={`
        relative w-72 h-96 cursor-pointer transform transition-all duration-300
        ${isHovered ? 'scale-105' : ''}
        ${isSelected ? 'ring-4 ring-yellow-400' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${isAttacking ? 'animate-attack' : ''}
        ${isDefending ? 'animate-defend' : ''}
        ${className}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        boxShadow: `0 0 30px ${glowColor}`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => !disabled && onClick?.()}
    >
      {/* Card Frame with 3D Effect */}
      <div className="absolute inset-0 transform-gpu transition-transform duration-300" style={{
        transform: `translateZ(20px)`,
        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
      }}>
        <img 
          src={getFrameUrl()} 
          alt="frame"
          className="w-full h-full pointer-events-none"
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 h-full p-6 flex flex-col transform-gpu transition-transform duration-300" style={{
        transform: `translateZ(30px)`
      }}>
        {/* Title and Level with 3D Effect */}
        <div className="flex justify-between items-center mb-4 transform-gpu" style={{
          transform: `translateZ(40px)`
        }}>
          <h3 className="text-xl font-bold text-white truncate flex-1 drop-shadow-lg">{title}</h3>
          <span className="px-2 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-bold drop-shadow-lg">
            Lv.{level}
          </span>
        </div>

        {/* Character Image with Enhanced 3D and Flame Effects */}
        <div className="relative w-full h-36 mb-4 group transform-gpu" style={{
          transform: `translateZ(50px)`
        }}>
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 animate-flame" style={{ opacity: flameIntensity }}>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
            </div>
          </div>
          <img 
            src={imageUrl} 
            alt={title}
            className={`
              w-full h-full object-contain rounded-lg transform transition-all duration-300
              ${isHovered ? 'scale-110' : ''}
              drop-shadow-lg
            `}
          />
          <div className={`
            absolute inset-0 rounded-lg bg-gradient-to-b ${getVariantStyle()} 
            opacity-20 transition-opacity duration-300
            ${isHovered ? 'opacity-40' : ''}
          `} />
        </div>

        {/* Stats with Enhanced 3D and Hover Effects */}
        <div className="grid grid-cols-2 gap-2 mb-2 transform-gpu" style={{
          transform: `translateZ(40px)`
        }}>
          {[
            { icon: '⚔️', value: att, color: 'red', label: 'ATK' },
            { icon: '🛡️', value: def, color: 'blue', label: 'DEF' },
            { icon: '❤️', value: health, color: 'green', label: 'HP' },
            { icon: '✨', value: mana, color: 'purple', label: 'MP' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`
                flex items-center gap-2 bg-black/30 rounded-lg p-1.5 group 
                hover:bg-${stat.color}-500/20 transition-all duration-300
                transform hover:scale-105 hover:translate-z-10
              `}
            >
              <span className={`text-${stat.color}-500 group-hover:animate-pulse`}>{stat.icon}</span>
              <span className="text-white font-semibold text-sm">{stat.label}: {stat.value}</span>
            </div>
          ))}
        </div>

        {/* Special Abilities with 3D Effect */}
        {specialAbilities.length > 0 && (
          <div className="bg-black/30 rounded-lg p-2 mt-auto max-h-[5.5rem] overflow-hidden group transform-gpu" style={{
            transform: `translateZ(30px)`
          }}>
            <h4 className="text-sm font-semibold text-white/90 mb-1 flex items-center gap-2">
              <span className="text-yellow-400 group-hover:animate-spin">⭐</span>
              Special Abilities:
            </h4>
            <div className="space-y-1 overflow-y-auto custom-scrollbar pr-1" style={{ maxHeight: "3.5rem" }}>
              {specialAbilities.map((ability, index) => (
                <div 
                  key={index}
                  className="text-xs bg-white/5 rounded px-2 py-1 flex items-center gap-1.5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-purple-300 flex-shrink-0 group-hover:animate-bounce">🔮</span>
                  <span className="text-white/80 truncate">{ability}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Battle Effects */}
      {isAttacking && (
        <div className="absolute inset-0 animate-attack-flash" style={{
          transform: `translateZ(60px)`
        }}>
          <div className="absolute inset-0 bg-red-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
          <div className="absolute inset-0 animate-attack-sparkles"></div>
        </div>
      )}
      {isDefending && (
        <div className="absolute inset-0 animate-defend-flash" style={{
          transform: `translateZ(60px)`
        }}>
          <div className="absolute inset-0 bg-blue-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
          <div className="absolute inset-0 animate-shield-effect"></div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @keyframes attack {
          0% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
          25% { transform: perspective(1000px) translateZ(-20px) rotateX(-5deg) rotateY(-5deg); }
          50% { transform: perspective(1000px) translateZ(150px) rotateX(5deg) rotateY(5deg); }
          75% { transform: perspective(1000px) translateZ(-10px) rotateX(-2deg) rotateY(-2deg); }
          100% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
        }
        @keyframes defend {
          0% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
          25% { transform: perspective(1000px) translateZ(20px) rotateX(5deg) rotateY(5deg); }
          50% { transform: perspective(1000px) translateZ(-50px) rotateX(-10deg) rotateY(-10deg); }
          75% { transform: perspective(1000px) translateZ(10px) rotateX(2deg) rotateY(2deg); }
          100% { transform: perspective(1000px) translateZ(0) rotateX(0) rotateY(0); }
        }
        @keyframes attack-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes defend-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes flame {
          0% { transform: scale(1) translateY(0); opacity: 0.5; }
          50% { transform: scale(1.1) translateY(-5px); opacity: 0.8; }
          100% { transform: scale(1) translateY(0); opacity: 0.5; }
        }
        @keyframes attack-sparkles {
          0% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%); }
          50% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%); }
          100% { background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%); }
        }
        @keyframes shield-effect {
          0% { transform: scale(1); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-attack {
          animation: attack 1s ease-in-out;
        }
        .animate-defend {
          animation: defend 1s ease-in-out;
        }
        .animate-attack-flash {
          animation: attack-flash 0.5s ease-in-out infinite;
        }
        .animate-defend-flash {
          animation: defend-flash 0.5s ease-in-out infinite;
        }
        .animate-flame {
          animation: flame 1s ease-in-out infinite;
        }
        .animate-attack-sparkles {
          animation: attack-sparkles 0.5s ease-in-out infinite;
        }
        .animate-shield-effect {
          animation: shield-effect 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Card;
