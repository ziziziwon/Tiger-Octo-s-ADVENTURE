import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSceneStore } from '../store/useSceneStore';
import { useMemoryStore } from '../store/memoryStore';
import SceneLoader from './SceneLoader';
import EmotionLog from './EmotionLog';
import Credits from './Credits';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const resetGame = useSceneStore((state) => state.resetGame);
  const resetMemories = useMemoryStore((state) => state.resetMemories);

  const handleHome = () => {
    resetGame();
    resetMemories();
    navigate('/');
  };

  return (
    <div className="relative">
      {/* 홈 버튼 */}
      <button
        onClick={handleHome}
        className="fixed top-4 left-4 px-4 py-2 bg-white/90 border-2 border-black font-sans font-semibold hover:bg-white transition-colors rounded shadow-lg pointer-events-auto"
        style={{ zIndex: 60 }}
      >
        🏠 HOME
      </button>

      {/* 감정 로그 */}
      <EmotionLog />

      {/* 크레딧 (저작권 표기) */}
      <Credits />

      {/* 씬 로더 - 자동으로 현재 씬 렌더링 */}
      <SceneLoader />
    </div>
  );
};

export default GamePage;

