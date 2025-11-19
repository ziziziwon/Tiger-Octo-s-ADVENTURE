import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FallingItem {
  id: number;
  emoji: string;
  x: number;
  y: number;
  speed: number;
}

interface ItemCatchGameProps {
  onComplete: (caughtItems: string[]) => void;
}

const ItemCatchGame: React.FC<ItemCatchGameProps> = ({ onComplete }) => {
  const [playerX, setPlayerX] = useState(50); // percentage
  const [items, setItems] = useState<FallingItem[]>([]);
  const [caughtItems, setCaughtItems] = useState<string[]>([]);
  const [gameTime, setGameTime] = useState(20); // 20초로 증가
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 아이템 생성 (더 느리게)
  useEffect(() => {
    if (isPaused) return;
    
    const itemTypes = ['🎸', '🎫', '🍬', '💳', '🌂'];
    
    const interval = setInterval(() => {
      const newItem: FallingItem = {
        id: Date.now(),
        emoji: itemTypes[Math.floor(Math.random() * itemTypes.length)],
        x: Math.random() * 80 + 10, // 중앙 쪽에 더 많이
        y: 0,
        speed: 1.2 + Math.random() * 0.8 // 속도 느리게
      };
      setItems(prev => [...prev, newItem]);
    }, 1500); // 1.5초마다 생성

    return () => clearInterval(interval);
  }, [isPaused]);

  // 타이머
  useEffect(() => {
    if (isPaused) return;
    
    if (gameTime <= 0) {
      onComplete(caughtItems);
      return;
    }

    const timer = setInterval(() => {
      setGameTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameTime, caughtItems, onComplete, isPaused]);

  // 아이템 이동 및 충돌 감지
  useEffect(() => {
    if (isPaused) return;
    
    const gameLoop = setInterval(() => {
      setItems(prevItems => {
        const updatedItems = prevItems.map(item => ({
          ...item,
          y: item.y + item.speed
        }));

        // 충돌 감지 (판정 범위 넓게)
        updatedItems.forEach(item => {
          if (item.y >= 80 && item.y <= 95) {
            if (Math.abs(item.x - playerX) < 12) { // 판정 범위 확대
              setCaughtItems(prev => [...prev, item.emoji]);
              setScore(prev => prev + 10);
              item.y = 200; // 화면 밖으로
            }
          }
        });

        // 화면 밖 아이템 제거
        return updatedItems.filter(item => item.y < 100);
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [playerX, isPaused]);

  // 게임 리셋
  const handleRestart = () => {
    setItems([]);
    setCaughtItems([]);
    setGameTime(20);
    setScore(0);
    setPlayerX(50);
    setIsPaused(false);
  };

  // 키보드 조작
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (isPaused) return;
    
    if (e.key === 'ArrowLeft') {
      setPlayerX(prev => Math.max(5, prev - 7)); // 이동 속도 증가
    } else if (e.key === 'ArrowRight') {
      setPlayerX(prev => Math.min(95, prev + 7));
    }
  }, [isPaused]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-2xl h-[600px] bg-gradient-to-b from-yellow-100 via-orange-100 to-pink-100 border-4 border-black rounded-2xl overflow-hidden shadow-2xl">
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
              onClick={() => onComplete(caughtItems)}
              className="px-3 py-2 bg-pixel-pink/90 border-2 border-black font-sans text-xs font-semibold rounded shadow-md hover:bg-pixel-pink hover:-translate-y-0.5 transition-all"
            >
              ✕ 닫기
            </button>
          </div>
          <div className="font-pixel text-xs text-tiger bg-cream/80 px-3 py-1 border-2 border-black rounded">
            ⭐ {score}
          </div>
        </div>

        {/* 안내 */}
        <div className="absolute top-20 left-0 right-0 text-center z-10">
          <p className="font-sans text-sm text-pixel-dark bg-cream border-3 border-black inline-block px-5 py-2 rounded-lg shadow-lg">
            ⬅️ ➡️ 방향키로 아이템을 잡으세요! ✨
          </p>
        </div>

        {/* 게임 영역 */}
        <div className="relative w-full h-full">
          {/* 떨어지는 아이템들 */}
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                key={item.id}
                className="absolute text-4xl"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* 플레이어 (극단이) */}
          <motion.div
            className="absolute bottom-8 text-6xl z-30"
            style={{
              left: `${playerX}%`,
              transform: 'translateX(-50%)'
            }}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity
            }}
          >
            🐙
          </motion.div>

          {/* 바닥 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-300 via-green-200 to-transparent" />
        </div>

        {/* 잡은 아이템 표시 */}
        <div className="absolute bottom-2 left-4 right-4 flex gap-2 justify-center z-10">
          {caughtItems.slice(-5).map((item, index) => (
            <motion.div
              key={index}
              className="text-3xl bg-cream border-3 border-black rounded-xl p-2 shadow-lg"
              initial={{ scale: 0, y: 50, rotate: -180 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCatchGame;

