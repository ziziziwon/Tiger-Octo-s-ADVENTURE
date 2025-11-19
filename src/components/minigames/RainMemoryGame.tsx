import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RainMemoryGameProps {
  onComplete: (score: number) => void;
}

interface Raindrop {
  id: number;
  x: number;
  y: number;
  speed: number;
  memoryText: string;
}

const memoryFragments = [
"우리 처음 만났었던 그 날처럼",
"살짝 비 냄새가 나고 있고",
"그때와 다른 것이 있다면",
"너무 멀리 있어",
"볼 수가 없다는 것",
"애석하지만 지금 어쩌겠어",
"너는 기억조차 못 하는걸",
"당연하겠지 그때는 네가 보는",
"풍경 속에 나무인 걸",
"그대를 그리다 오늘 하루도 흘러가고",
"그대는 비 냄새를 맡으며",
"나무가 들려주길",
"언젠가 어디선가 만날 수 있기를",
"비 냄새가 나는 곳에서"
];

const RainMemoryGame: React.FC<RainMemoryGameProps> = ({ onComplete }) => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);
  const [collectedMemories, setCollectedMemories] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(40); // 40초로 증가 (기억 조각이 많아졌으므로)
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMemory, setShowMemory] = useState<string | null>(null);

  // 빗방울 생성 - 기억 조각 14개
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setRaindrops(prev => {
        // 최대 6개로 제한 (기억이 많아졌으므로 약간 증가)
        if (prev.length >= 6) return prev;
        
        const newRaindrop: Raindrop = {
          id: Date.now(),
          x: Math.random() * 80 + 10, // 더 중앙에
          y: -5,
          speed: Math.random() * 0.8 + 0.8, // 0.8-1.6으로 훨씬 느리게
          memoryText: memoryFragments[Math.floor(Math.random() * memoryFragments.length)]
        };
        return [...prev, newRaindrop];
      });
    }, 1200); // 1.2초마다 생성 (기억 조각 14개를 위해)

    return () => clearInterval(interval);
  }, [isPlaying]);

  // 빗방울 이동 - 느리게
  useEffect(() => {
    if (!isPlaying) return;

    const moveInterval = setInterval(() => {
      setRaindrops(prev => 
        prev
          .map(drop => ({ ...drop, y: drop.y + drop.speed }))
          .filter(drop => drop.y < 110)
      );
    }, 20); 

    return () => clearInterval(moveInterval);
  }, [isPlaying]);

  // 타이머
  useEffect(() => {
    if (!isPlaying || gameTime <= 0) return;

    const timer = setInterval(() => {
      setGameTime(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          setTimeout(() => onComplete(score), 1500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, gameTime, score, onComplete]);

  const handleRaindropClick = (raindrop: Raindrop) => {
    setScore(prev => prev + 10);
    
    // 기억 조각 추가
    if (!collectedMemories.includes(raindrop.memoryText)) {
      setCollectedMemories(prev => [...prev, raindrop.memoryText]);
    }
    
    // 기억 조각 표시
    setShowMemory(raindrop.memoryText);
    setTimeout(() => setShowMemory(null), 2000);
    
    // 빗방울 제거
    setRaindrops(prev => prev.filter(d => d.id !== raindrop.id));
  };

  const handleRestart = () => {
    setRaindrops([]);
    setCollectedMemories([]);
    setScore(0);
    setGameTime(40);
    setIsPlaying(true);
    setShowMemory(null);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-2xl h-[600px] bg-gradient-to-b from-slate-400 via-blue-300 to-indigo-400 border-4 border-black rounded-2xl overflow-hidden shadow-2xl">
        {/* 헤더 */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-white/40 backdrop-blur-md border-b-2 border-black/10 flex justify-between items-center z-10">
          <div className="font-pixel text-xs text-pixel-dark bg-cream/80 px-3 py-1 border-2 border-black rounded">
            ⏰ {gameTime}s
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleRestart}
              className="px-3 py-2 bg-sky/90 border-2 border-black font-sans text-xs font-semibold rounded shadow-md hover:bg-sky hover:-translate-y-0.5 transition-all"
            >
              🔄 다시하기
            </button>
            <button
              onClick={() => onComplete(0)}
              className="px-3 py-2 bg-pixel-pink/90 border-2 border-black font-sans text-xs font-semibold rounded shadow-md hover:bg-pixel-pink hover:-translate-y-0.5 transition-all"
            >
              ✕ 닫기
            </button>
          </div>
          <div className="font-pixel text-xs text-tiger bg-cream/80 px-3 py-1 border-2 border-black rounded">
            💧 {score}
          </div>
        </div>

        {/* 게임 영역 */}
        <div className="relative w-full h-full pt-16">
        {/* 설명 */}
        {gameTime > 37 && (
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-cream border-3 border-black rounded-lg shadow-lg p-4 text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-sans text-sm font-bold text-pixel-dark mb-1">
              💧 빗방울을 클릭해 가사를 모으세요!
            </p>
            <p className="font-sans text-xs text-pixel-dark/70">
              14개의 가사 조각을 수집할 수 있어요 ✨
            </p>
          </motion.div>
        )}

        {/* 빗방울들 - 크기 증가 */}
        <AnimatePresence>
          {raindrops.map(drop => (
            <motion.div
              key={drop.id}
              className="absolute cursor-pointer"
              style={{
                left: `${drop.x}%`,
                top: `${drop.y}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => handleRaindropClick(drop)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="text-6xl" style={{ 
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                textShadow: '0 0 20px rgba(100, 200, 255, 0.8)'
              }}>💧</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 떠오르는 기억 조각 */}
        <AnimatePresence>
          {showMemory && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 border-3 border-blue-500 rounded-xl p-6 shadow-2xl z-20"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -50 }}
            >
              <p className="font-sans text-xm text-blue-600 italic font-bold text-center">
                "{showMemory}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 게임 종료 */}
        {!isPlaying && gameTime === 0 && (
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-cream border-4 border-black rounded-2xl p-8 text-center max-w-md"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
            >
              <h3 className="font-sans text-3xl font-bold text-pixel-dark mb-4">
                가사를 모왔어요 💙
              </h3>
              <p className="font-sans text-xl text-pixel-dark/80 mb-4">
                점수: {score}점
              </p>
              <div className="bg-white border-2 border-black rounded-lg p-4 mb-6">
                <p className="font-sans text-sm text-pixel-dark/70 mb-2">
                  수집한 가사 조각:
                </p>
                {collectedMemories.map((memory, i) => (
                  <p key={i} className="font-sans text-sm text-blue-600 italic">
                    "{memory}"
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 수집한 기억 카운터 */}
        <div className="absolute bottom-2 left-4 right-4 bg-white/80 border-3 border-black rounded-xl p-3 shadow-lg z-10">
          <p className="font-sans text-xs font-bold text-pixel-dark mb-1 text-center">
            📖 수집한 가사: {collectedMemories.length}/{memoryFragments.length}
          </p>
          <div className="flex gap-1 justify-center flex-wrap">
            {collectedMemories.map((memory, i) => (
              <p key={i} className="font-sans text-[10px] text-blue-600 italic">
                ✓ {memory}
              </p>
            ))}
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RainMemoryGame;

