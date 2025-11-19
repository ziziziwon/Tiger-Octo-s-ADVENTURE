import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InviteCard: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Glitch 효과 트리거
    const body = document.body;
    body.style.filter = 'hue-rotate(30deg) contrast(1.3)';
    body.style.mixBlendMode = 'difference';
    
    setTimeout(() => {
      body.style.filter = 'brightness(3)';
    }, 100);
    
    setTimeout(() => {
      body.style.filter = '';
      body.style.mixBlendMode = '';
      navigate('/invite');
    }, 300);
  };

  return (
    <motion.div
      className="relative group overflow-hidden border-4 border-yellow-300 bg-[#fffbea] rounded-xl shadow-[0_0_20px_rgba(255,255,150,0.8)] cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateY: 0,
        boxShadow: [
          '0 0 20px rgba(255,255,150,0.8)',
          '0 0 40px rgba(255,215,0,1)',
          '0 0 20px rgba(255,255,150,0.8)',
        ]
      }}
      transition={{ 
        duration: 1.5,
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }}
      whileHover={{ 
        scale: 1.08,
        rotateZ: [0, -2, 2, -2, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 반짝이는 그라데이션 오버레이 */}
      <motion.div 
        className="absolute inset-0 opacity-20 group-hover:opacity-40"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.5), rgba(255,255,0,0.3) 30%, rgba(255,215,0,0.5) 60%, transparent 100%)'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* 별 반짝임 효과 */}
      <div className="absolute top-2 right-2">
        <motion.span
          className="text-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          ✨
        </motion.span>
      </div>

      {/* 카드 내용 */}
      <div className="relative z-10 p-6 text-center">
        <motion.div
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <h3 className="font-pixel text-xl mb-2 text-[#222]">
            🎟 INVITE
          </h3>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent my-3" />
          <p className="font-sans text-sm opacity-80 mb-1">
            극동아시아 타이거즈
          </p>
          <p className="font-pixel text-xs text-yellow-700 mb-3">
            SECRET CONCERT
          </p>
          <p className="font-sans text-xs opacity-60 italic">
            당신만을 위한 초대장
          </p>
        </motion.div>

        {/* 홀로그램 효과 */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
      </div>

      {/* 클릭 힌트 */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-sans text-[10px] opacity-50"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        클릭하여 입장 →
      </motion.div>
    </motion.div>
  );
};

export default InviteCard;

