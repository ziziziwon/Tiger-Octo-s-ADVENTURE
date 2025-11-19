import React from 'react';
import { motion } from 'framer-motion';
import { useSceneStore } from '../store/useSceneStore';
import { useMemoryStore } from '../store/memoryStore';

const ProgressBar: React.FC = () => {
  const progress = useSceneStore((state) => state.getProgress());
  const collectedItems = useSceneStore((state) => state.collectedItems);
  const memoryCards = useSceneStore((state) => state.memoryCards);
  const memoryCount = useMemoryStore((state) => state.getMemoryCount());

  return (
    <div className="fixed top-4 right-4 z-40 bg-cream border-4 border-black p-4 rounded-xl w-72 pointer-events-auto">
      {/* 진행도 바 */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-pixel text-xs text-pixel-dark font-bold">PROGRESS</span>
          <span className="font-pixel text-sm text-tiger font-bold">{progress}%</span>
        </div>
        <div className="w-full h-5 bg-white border-3 border-black relative overflow-hidden shadow-md">
          <motion.div
            className="h-full bg-gradient-to-r from-tiger to-orange-500 relative border-r-2 border-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* 픽셀 패턴 효과 */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 6px)'
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* 수집 아이템 카운터 */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="flex flex-col items-center bg-white border-2 border-black rounded-lg p-2">
          <span className="text-xl">📦</span>
          <span className="text-xs font-sans font-bold text-pixel-dark">{collectedItems.length}</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-black rounded-lg p-2">
          <span className="text-xl">💭</span>
          <span className="text-xs font-sans font-bold text-pixel-dark">{memoryCards.length}</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-black rounded-lg p-2">
          <span className="text-xl">✨</span>
          <span className="text-xs font-sans font-bold text-pixel-dark">{memoryCount}</span>
        </div>
      </div>

      {/* 최근 수집한 아이템 미리보기 */}
      {collectedItems.length > 0 && (
        <motion.div
          className="mt-3 pt-3 border-t-3 border-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-pixel text-xs text-pixel-dark font-bold mb-2">RECENT</p>
          <div className="flex gap-2 flex-wrap bg-white border-2 border-black rounded-lg p-2">
            {collectedItems.slice(-4).map((item) => (
              <motion.div
                key={item.id}
                className="text-2xl bg-cream border-2 border-black rounded p-1 cursor-pointer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, y: -2 }}
                title={item.name}
              >
                {item.emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 숨은 엔딩 힌트 */}
      {collectedItems.length >= 8 && collectedItems.length < 10 && (
        <motion.div
          className="mt-3 pt-3 border-t-3 border-tiger bg-yellow-100 border-2 border-tiger rounded-lg p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xs text-tiger font-sans font-semibold animate-pulse text-center">
            ✨ 특별한 무언가가 기다리고 있어요...
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressBar;

