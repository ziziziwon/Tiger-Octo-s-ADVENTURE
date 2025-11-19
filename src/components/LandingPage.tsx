import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center pixel-bg pixel-grid relative overflow-hidden">
      {/* 픽셀 구름 애니메이션 */}
      <div className="absolute top-20 left-0 w-32 h-16 bg-white opacity-80 cloud" style={{ animationDelay: '0s' }}>
        <div className="w-full h-full" style={{
          clipPath: 'polygon(20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 100% 40%, 100% 80%, 0 80%, 0 40%)'
        }}></div>
      </div>
      <div className="absolute top-40 left-1/4 w-40 h-20 bg-white opacity-70 cloud" style={{ animationDelay: '10s' }}>
        <div className="w-full h-full" style={{
          clipPath: 'polygon(20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 100% 40%, 100% 80%, 0 80%, 0 40%)'
        }}></div>
      </div>
      <div className="absolute top-32 right-0 w-36 h-18 bg-white opacity-75 cloud" style={{ animationDelay: '5s' }}>
        <div className="w-full h-full" style={{
          clipPath: 'polygon(20% 40%, 30% 20%, 50% 30%, 70% 20%, 80% 40%, 100% 40%, 100% 80%, 0 80%, 0 40%)'
        }}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="z-10 text-center px-4">
        {/* 극단이 캐릭터 (플레이스홀더) */}
        <motion.div
          className="mb-8 mx-auto"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto bg-tiger border-4 border-black rounded-lg relative"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* 호랑이 문어 픽셀 아트 플레이스홀더 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🐙</div>
            </div>
            {/* 눈 */}
            <div className="absolute top-8 left-6 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute top-8 right-6 w-4 h-4 bg-black rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-pixel text-2xl md:text-3xl lg:text-4xl text-tiger pixel-text-shadow mb-3 leading-relaxed">
            TIGER OCTO'S
            <br />
            ADVENTURE
          </h1>
        </motion.div>

        {/* 서브타이틀 */}
        <motion.p
          className="font-sans text-lg md:text-xl text-pixel-dark mb-2 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          극단이의 우당탕 모험
        </motion.p>

        <motion.p
          className="font-sans text-base md:text-lg text-pixel-dark/70 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "극동아시아 타이거즈 공연장까지 가는 길"
        </motion.p>

        {/* 시작 버튼 */}
        <motion.button
          className="pixel-btn uppercase"
          onClick={handleStartGame}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START ADVENTURE
        </motion.button>

        {/* 부가 정보 */}
        <motion.div
          className="mt-8 text-pixel-dark/50 text-sm font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p>🎮 픽셀 레트로 인터랙티브 스토리</p>
        </motion.div>

        {/* Behind the Scene 버튼 */}
        <motion.button
          className="mt-6 px-6 py-2 bg-white/80 border-2 border-black font-sans text-sm font-medium hover:bg-white transition-colors rounded"
          onClick={() => navigate('/behind')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          🎨 Behind the Scene
        </motion.button>
      </div>

      {/* 바닥 장식 (초록 언덕) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-green-500 border-t-4 border-black">
        <div className="absolute -top-4 left-1/4 w-20 h-8 bg-green-600 border-2 border-black rounded-full"></div>
        <div className="absolute -top-6 right-1/3 w-24 h-10 bg-green-600 border-2 border-black rounded-full"></div>
        <div className="absolute -top-3 right-1/4 w-16 h-6 bg-green-600 border-2 border-black rounded-full"></div>
      </div>
    </div>
  );
};

export default LandingPage;

