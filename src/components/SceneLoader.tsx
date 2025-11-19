import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSceneStore } from '../store/useSceneStore';
import { useMemoryStore } from '../store/memoryStore';
import { Choice, CollectibleItem as ItemType } from '../data/scenes';
import RainEffect from './effects/RainEffect';
import SparkleEffect from './effects/SparkleEffect';
import LightBloomEffect from './effects/LightBloomEffect';
import ParallaxBackground from './effects/ParallaxBackground';
import CollectibleItem from './CollectibleItem';
import ProgressBar from './ProgressBar';
import ItemCatchGame from './minigames/ItemCatchGame';
import RainMemoryGame from './minigames/RainMemoryGame';
import StarCatcherGame from './minigames/StarCatcherGame';
import RewardModal from './RewardModal';

const SceneLoader: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentSceneId, 
    goToScene, 
    recordEmotion,
    setPersonality,
    addMiniGameResult
  } = useSceneStore();
  const addMemory = useMemoryStore((state) => state.addMemory);
  const currentScene = useSceneStore((state) => state.getCurrentScene());
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [miniGameCompleted, setMiniGameCompleted] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<any>(null);

  // 씬이 바뀔 때 상태 초기화
  useEffect(() => {
    setShowMiniGame(false);
    setMiniGameCompleted(false);
    setShowReward(false);
    setCurrentReward(null);
  }, [currentSceneId]);

  // 씬이 바뀔 때 미니게임 체크
  useEffect(() => {
    if (currentScene?.miniGame && !miniGameCompleted) {
      // 잠시 후 미니게임 표시
      const timer = setTimeout(() => {
        setShowMiniGame(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentSceneId, currentScene, miniGameCompleted]);

  // 디버깅: 상태 변화 로그
  useEffect(() => {
    console.log('📊 상태:', {
      currentSceneId,
      showMiniGame,
      miniGameCompleted,
      showReward,
      hasReward: !!currentReward,
      shouldShowContent: !showMiniGame && !showReward,
      optionsCount: currentScene?.options?.length || 0
    });
  }, [currentSceneId, showMiniGame, miniGameCompleted, showReward, currentReward, currentScene]);

  if (!currentScene) {
    return <div>Loading...</div>;
  }

  const handleChoice = (choice: Choice) => {
    console.log('🎯 선택지 클릭:', choice.text, '→', choice.next);
    
    // 갤러리로 이동
    if (choice.next === 'gallery') {
      navigate('/gallery');
      return;
    }

    // 감정 기록
    if (choice.emotion) {
      recordEmotion(choice.emotion);
    }

    // 성격 설정 (첫 선택에서)
    if (choice.personality) {
      setPersonality(choice.personality);
      console.log('🎭 성격 설정:', choice.personality);
    }

    // 다음 씬으로 이동 (미니게임 상태 초기화)
    setMiniGameCompleted(false);
    setShowMiniGame(false);
    goToScene(choice.next);
  };

  // 미니게임 완료 핸들러
  const handleMiniGameComplete = (result: any) => {
    const gameName = currentScene.miniGame || 'unknown';
    const score = typeof result === 'number' ? result : 
                 Array.isArray(result) ? result.length * 10 : 0;

    // 게임 결과 기록 (점수와 무관하게 항상 기록)
    addMiniGameResult({
      sceneId: currentSceneId,
      gameName,
      score,
      timestamp: Date.now()
    });

    setShowMiniGame(false);
    setMiniGameCompleted(true);

    // 보상 표시 - 최소 점수를 달성해야만 보상 지급
    const minScore = 10; // 최소 10점 이상
    if (currentScene.reward && score >= minScore) {
      console.log(`✨ 기억 획득! 점수: ${score} (최소: ${minScore})`);
      addMemory({
        id: currentScene.reward.id,
        text: currentScene.reward.text,
        sceneId: currentSceneId,
        type: currentScene.reward.type,
        timestamp: Date.now()
      });

      setCurrentReward(currentScene.reward);
      setTimeout(() => {
        setShowReward(true);
      }, 500);
    } else {
      console.log(`❌ 점수 부족! 현재: ${score}, 필요: ${minScore} - 기억을 찾지 못했습니다.`);
    }
  };

  // 보상 모달 닫기 핸들러
  const handleRewardClose = () => {
    console.log('🎉 보상 모달 닫기 - 선택지가 나타납니다');
    setShowReward(false);
    setCurrentReward(null);
  };

  // 이펙트 렌더링
  const renderEffect = () => {
    switch (currentScene.effect) {
      case 'rain':
        return <RainEffect />;
      case 'sparkle':
        return <SparkleEffect />;
      case 'light_bloom':
        return <LightBloomEffect />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 미니게임 - 최우선 레이어 */}
      <AnimatePresence>
        {showMiniGame && currentScene.miniGame === 'itemCatch' && (
          <ItemCatchGame onComplete={handleMiniGameComplete} />
        )}
        {showMiniGame && currentScene.miniGame === 'rainMemory' && (
          <RainMemoryGame onComplete={handleMiniGameComplete} />
        )}
        {showMiniGame && currentScene.miniGame === 'starCatcher' && (
          <StarCatcherGame onComplete={handleMiniGameComplete} />
        )}
      </AnimatePresence>

      {/* 보상 모달 */}
      {currentReward && (
        <RewardModal
          isOpen={showReward}
          memory={currentReward}
          onClose={handleRewardClose}
        />
      )}

      {/* 패럴랙스 배경 */}
      <ParallaxBackground sceneId={currentSceneId} />
      
      {/* 진행도 바 - 미니게임/보상 중에는 비활성화 */}
      {!showMiniGame && !showReward && <ProgressBar />}

      {/* 이펙트 레이어 */}
      {!showMiniGame && !showReward && renderEffect()}

      {/* 수집 가능한 아이템들 - 미니게임/보상 중에는 숨김 */}
      {!showMiniGame && !showReward && currentScene.collectibles && currentScene.collectibles.map((item: ItemType, index: number) => (
        <CollectibleItem
          key={item.id}
          item={item}
          position={{
            x: `${20 + index * 25}%`,
            y: `${30 + (index % 2) * 10}%`
          }}
        />
      ))}

      {/* 메인 콘텐츠 - 미니게임/보상 중에는 숨김 */}
      {!showMiniGame && !showReward && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-20 pointer-events-none" style={{ zIndex: 10 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSceneId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl pointer-events-none"
            >
            {/* 씬 타이틀 */}
            <motion.div
              className="text-center mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <h2 className="font-sans text-2xl md:text-3xl text-white pixel-text-shadow mb-2 font-bold">
                {currentScene.title}
              </h2>
            </motion.div>

            {/* 극단이 캐릭터 */}
            <motion.div
              className="text-8xl mb-8 text-center pointer-events-none"
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <span className="drop-shadow-2xl">🐙</span>
                <span className="text-5xl ml-2">{currentScene.characterEmotion}</span>
              </motion.div>
            </motion.div>

            {/* 대화창 - Glassmorphism */}
            <motion.div
              className="mb-8 mx-4 relative pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="backdrop-blur-xl bg-white/80 border-4 border-black p-6 rounded-2xl shadow-lg relative overflow-hidden select-none">
                {/* 깜빡이는 커서 */}
                <motion.div
                  className="absolute left-3 top-5 font-pixel text-tiger text-xl"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  &gt;
                </motion.div>
                <p 
                  className="font-sans text-lg md:text-xl leading-relaxed pl-8 text-pixel-dark"
                  dangerouslySetInnerHTML={{ __html: currentScene.text }}
                />
                {currentScene.subText && (
                  <motion.p
                    className="font-sans text-base md:text-lg leading-relaxed pl-8 mt-4 italic"
                    style={{ color: '#6B9BD1' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    dangerouslySetInnerHTML={{ __html: currentScene.subText }}
                  />
                )}
              </div>
            </motion.div>

            {/* 선택지 버튼들 - Glassmorphism */}
            <div className="space-y-4 px-4 relative" style={{ zIndex: 100, pointerEvents: 'auto' }}>
              {currentScene.options.map((choice: Choice, index: number) => (
                <motion.button
                  key={`${currentSceneId}-choice-${index}-${choice.text}`}
                  type="button"
                  className="w-full text-left flex items-center justify-between backdrop-blur-md bg-cream/90 border-4 border-black px-8 py-4 rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.15)',
                    pointerEvents: 'auto',
                    touchAction: 'manipulation',
                    position: 'relative',
                    zIndex: 100
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🖱️ 버튼 클릭됨:', choice.text);
                    handleChoice(choice);
                  }}
                  onPointerDown={(e) => {
                    console.log('👆 포인터 다운:', choice.text);
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 155, 0, 0.9)',
                    color: '#ffffff',
                    boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.15)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                {/* 반짝이는 효과 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                  <span className="text-2xl">{choice.emoji}</span>
                  <span className="text-base md:text-lg font-medium">{choice.text}</span>
                </div>
                {choice.emotion && (
                  <span className="text-xl opacity-70 relative z-10 pointer-events-none">{choice.emotion}</span>
                )}
                </motion.button>
              ))}
            </div>

            {/* 엔딩 씬일 때 추가 효과 */}
            {currentSceneId === 'scene5_end' && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="text-9xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🎸
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      )}

      {/* 하단 장식 - 메인 콘텐츠와 겹치지 않도록 */}
      {!showMiniGame && !showReward && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/20 border-t-4 border-black/40 pointer-events-none" style={{ zIndex: 5 }}></div>
      )}
    </div>
  );
};

export default SceneLoader;

