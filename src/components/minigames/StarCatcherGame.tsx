import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StarCatcherGameProps {
  onComplete: (score: number) => void;
}

interface Star {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: 'normal' | 'special' | 'golden';
  emoji: string;
}

interface CollectEffect {
  id: number;
  x: number;
  y: number;
  points: number;
  color: string;
}

const StarCatcherGame: React.FC<StarCatcherGameProps> = ({ onComplete }) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [basketX, setBasketX] = useState(50);
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(25);
  const [isPlaying, setIsPlaying] = useState(true);
  const [caughtStars, setCaughtStars] = useState(0);
  const [collectEffects, setCollectEffects] = useState<CollectEffect[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // 별 생성 - 성능 최적화
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setStars(prev => {
        // 최대 별 개수 제한 (성능 최적화)
        if (prev.length >= 8) return prev;
        
        const randomType = Math.random();
        let type: 'normal' | 'special' | 'golden' = 'normal';
        let emoji = '⭐';
        
        if (randomType > 0.9) {
          type = 'golden';
          emoji = '🌟';
        } else if (randomType > 0.7) {
          type = 'special';
          emoji = '✨';
        }

        const newStar: Star = {
          id: Date.now() + Math.random(),
          x: Math.random() * 85 + 5,
          y: -5,
          speed: Math.random() * 1.5 + 1.5,
          type,
          emoji
        };
        return [...prev, newStar];
      });
    }, 1000); // 생성 간격 증가

    return () => clearInterval(interval);
  }, [isPlaying]);

  // 별 이동 및 충돌 감지 - 성능 최적화
  useEffect(() => {
    if (!isPlaying) return;

    const moveInterval = setInterval(() => {
      setStars(prev => {
        const newStars = prev.map(star => ({ ...star, y: star.y + star.speed }));
        
        // 바구니와 충돌 체크
        newStars.forEach(star => {
          if (star.y > 85 && star.y < 95) {
            const distance = Math.abs(star.x - basketX);
            if (distance < 8) {
              // 별 점수
              const points = star.type === 'golden' ? 30 : star.type === 'special' ? 20 : 10;
              const color = star.type === 'golden' ? '#FFD700' : star.type === 'special' ? '#FF69B4' : '#FFA500';
              
              setScore(s => s + points);
              setCaughtStars(c => c + 1);
              
              // 수집 효과 추가
              const effectId = Date.now() + Math.random();
              setCollectEffects(prev => [...prev, {
                id: effectId,
                x: star.x,
                y: star.y,
                points,
                color
              }]);
              
              // 효과 자동 제거
              setTimeout(() => {
                setCollectEffects(prev => prev.filter(e => e.id !== effectId));
              }, 1000);
              
              // 별 제거
              setStars(s => s.filter(st => st.id !== star.id));
            }
          }
        });
        
        // 화면 밖으로 나간 별 제거
        return newStars.filter(star => star.y < 105);
      });
    }, 70); // 프레임 간격 증가로 성능 향상

    return () => clearInterval(moveInterval);
  }, [isPlaying, basketX]);

  // 마우스 이동
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isPlaying || !gameAreaRef.current) return;
      
      const rect = gameAreaRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      setBasketX(Math.max(5, Math.min(95, x)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isPlaying]);

  // 키보드 이동 - 속도 증가
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      if (e.key === 'ArrowLeft') {
        setBasketX(x => Math.max(5, x - 5));
      } else if (e.key === 'ArrowRight') {
        setBasketX(x => Math.min(95, x + 5));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
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

  const handleRestart = () => {
    setStars([]);
    setBasketX(50);
    setScore(0);
    setCaughtStars(0);
    setCollectEffects([]);
    setGameTime(25);
    setIsPlaying(true);
  };

  const getEvaluation = () => {
    if (score >= 150) return { text: '완벽해요!', color: 'text-yellow-500', emoji: '🌟' };
    if (score >= 100) return { text: '훌륭해요!', color: 'text-blue-500', emoji: '⭐' };
    if (score >= 50) return { text: '잘했어요!', color: 'text-green-500', emoji: '✨' };
    return { text: '좋아요!', color: 'text-pink-500', emoji: '💫' };
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-2xl h-[600px] bg-gradient-to-b from-indigo-900 via-purple-900 to-black border-4 border-black rounded-2xl overflow-hidden shadow-2xl">
        {/* 별들 배경 - 성능 최적화 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${3 + i % 3}s infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* 헤더 */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-md border-b-2 border-white/20 flex justify-between items-center z-10">
          <div className="font-pixel text-xs text-white bg-purple-900/80 px-3 py-1 border-2 border-white/30 rounded">
            ⏰ {gameTime}s
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleRestart}
              className="px-3 py-2 bg-purple-600/90 border-2 border-white/30 font-sans text-xs font-semibold text-white rounded shadow-md hover:bg-purple-700 hover:-translate-y-0.5 transition-all"
            >
              🔄 다시하기
            </button>
            <button
              onClick={() => onComplete(0)}
              className="px-3 py-2 bg-red-500/90 border-2 border-white/30 font-sans text-xs font-semibold text-white rounded shadow-md hover:bg-red-600 hover:-translate-y-0.5 transition-all"
            >
              ✕ 닫기
            </button>
          </div>
          <div className="font-pixel text-xs text-yellow-300 bg-purple-900/80 px-3 py-1 border-2 border-white/30 rounded">
            ⭐ {score}
          </div>
        </div>

        {/* 게임 영역 */}
        <div ref={gameAreaRef} className="relative w-full h-full pt-16">
        {/* 설명 */}
        {gameTime > 22 && (
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-cream border-3 border-black rounded-lg shadow-lg p-4 text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-sans text-sm font-bold text-pixel-dark mb-1">
              🌟 떨어지는 별을 받으세요!
            </p>
            <p className="font-sans text-xs text-pixel-dark/70 mb-1">
              마우스 또는 ← → 키로 이동
            </p>
            <p className="font-sans text-[10px] text-pixel-dark/50">
              ⭐ 10점 | ✨ 20점 | 🌟 30점
            </p>
          </motion.div>
        )}

        {/* 떨어지는 별들 - 성능 최적화 */}
        <AnimatePresence mode="sync">
          {stars.map(star => (
            <motion.div
              key={star.id}
              className="absolute pointer-events-none"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                willChange: 'transform, opacity'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {star.emoji}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 수집 효과들 */}
        <AnimatePresence>
          {collectEffects.map(effect => (
            <motion.div
              key={effect.id}
              className="absolute pointer-events-none z-30 font-bold text-2xl"
              style={{
                left: `${effect.x}%`,
                top: `${effect.y}%`,
                color: effect.color,
                textShadow: '0 0 10px rgba(255,255,255,0.8)'
              }}
              initial={{ opacity: 1, scale: 1, y: 0 }}
              animate={{ opacity: 0, scale: 1.5, y: -50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              +{effect.points}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 바구니 (극단이 문어) - 딜레이 제거 */}
        <div
          className="absolute bottom-6 transform -translate-x-1/2 z-20"
          style={{ 
            left: `${basketX}%`,
            willChange: 'left'
          }}
        >
          <div className="text-8xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            🐙
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-black/20 rounded-full blur-sm" />
        </div>

        {/* 게임 종료 */}
        {!isPlaying && gameTime === 0 && (
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-cream border-4 border-black rounded-2xl p-8 text-center max-w-md"
              initial={{ scale: 0.5, y: 50, rotate: -10 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
            >
              <div className="text-6xl mb-4">{getEvaluation().emoji}</div>
              <h3 className="font-sans text-3xl font-bold text-pixel-dark mb-4">
                별을 모았어요!
              </h3>
              <div className={`font-sans text-2xl ${getEvaluation().color} font-bold mb-4`}>
                {getEvaluation().text}
              </div>
              <p className="font-sans text-xl text-pixel-dark/80 mb-2">
                점수: {score}점
              </p>
              <p className="font-sans text-lg text-pixel-dark/70">
                수집한 별: {caughtStars}개
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* 안내 텍스트 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-5 pointer-events-none">
          <motion.p
            className="font-sans text-sm text-white/80 italic bg-purple-900/60 px-4 py-2 rounded-lg"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            "별이 되어 나를 비춰줄래..."
          </motion.p>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StarCatcherGame;

