import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { downloadPoster } from '../utils/posterGenerator';

const MemoryStage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050507] via-[#1a1035] to-[#07010e]">
      {/* 무대 배경 */}
      <div className="absolute inset-0">
        {/* 무대 바닥 그라데이션 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(26,16,53,0.6) 0%, transparent 100%)',
          }}
        />

        {/* Spotlight 효과 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25)_0%,transparent_70%)] blur-3xl opacity-70 animate-pulse" />
        
        {/* 별/먼지 입자 효과 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
                key={i}
              className="absolute bg-yellow-300 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                }}
              />
            ))}
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* 보상 카드 */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-2 border-yellow-300 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(255,215,0,0.6)]">
            {/* 카드 내부 glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl" />
            
            <div className="relative z-10">
              <motion.h2 
                className="font-pixel text-2xl md:text-3xl text-yellow-300 mb-2 tracking-wider"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🎁 EXCLUSIVE BONUS
              </motion.h2>
              
                <motion.div
                className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />

              <motion.p
                className="font-sans text-base md:text-lg text-yellow-100 mb-8 tracking-wider font-medium leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "You've unlocked the unreleased poster<br />
                of <strong className="text-yellow-200">극동아시아 타이거즈</strong>!"
              </motion.p>

            <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={downloadPoster}
                  className="font-pixel text-sm px-8 py-4 bg-yellow-300 text-black rounded-xl border-2 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📥 Poster Download
                </motion.button>
                
                <motion.button
                  onClick={() => navigate('/')}
                  className="block font-sans text-sm text-yellow-200/50 hover:text-yellow-100 transition-colors mx-auto mt-4"
                  whileHover={{ scale: 1.05, letterSpacing: '0.1em' }}
                  transition={{ duration: 0.2 }}
                >
                  홈으로 돌아가기 →
                </motion.button>
                </motion.div>

              <motion.p
                className="font-sans text-xs text-yellow-100/40 mt-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                "너도 이제 극아타의 세계에 초대받았어."
              </motion.p>
                  </div>
                </div>
            </motion.div>
      </div>

    </div>
  );
};

export default MemoryStage;
