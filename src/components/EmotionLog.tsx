import React from 'react';
import { motion } from 'framer-motion';
import { useSceneStore } from '../store/useSceneStore';

const EmotionLog: React.FC = () => {
  const emotionalChoices = useSceneStore((state) => state.emotionalChoices);
  const personality = useSceneStore((state) => state.personality);

  if (emotionalChoices.length === 0) return null;

  // 감정 카운팅
  const emotionCounts = emotionalChoices.reduce((acc: any, emotion) => {
    acc[emotion] = (acc[emotion] || 0) + 1;
    return acc;
  }, {});

  const personalityText = {
    careful: '꼼꼼한',
    hasty: '성급한',
    kind: '다정한'
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-40 bg-cream border-4 border-black p-4 rounded-xl max-w-xs pointer-events-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex items-center gap-2 mb-3 bg-white border-2 border-black rounded-lg p-2">
        <span className="text-2xl">💖</span>
        <h3 className="text-sm text-pixel-dark font-bold">감정 기록</h3>
      </div>
      
      {/* 성격 표시 */}
      {personality && (
        <div className="mb-3 p-2 bg-tiger border-2 border-black rounded-lg">
          <p className="text-sm font-sans text-center text-white">
            <span className="font-bold">{personalityText[personality]}</span> 극단이
          </p>
        </div>
      )}

      {/* 감정 칩들 */}
      <div className="flex flex-wrap gap-2 bg-white border-2 border-black rounded-lg p-2">
        {Object.entries(emotionCounts).map(([emotion, count]: [string, any]) => (
          <motion.div
            key={emotion}
            className="flex items-center gap-1 bg-cream border-2 border-black px-2 py-1 rounded shadow-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <span className="text-xl">{emotion}</span>
            <span className="text-xs font-sans font-bold">×{count}</span>
          </motion.div>
        ))}
      </div>

      {/* 진행도 */}
      <div className="mt-3 pt-3 border-t-3 border-black text-center">
        <p className="text-xs text-pixel-dark font-sans font-semibold">
          📊 {emotionalChoices.length}개의 감정 기록됨
        </p>
      </div>
    </motion.div>
  );
};

export default EmotionLog;

