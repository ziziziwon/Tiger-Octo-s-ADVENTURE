import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemoryStore } from '../store/memoryStore';

const MemoryHUD: React.FC = () => {
  const memoryCount = useMemoryStore((state) => state.getMemoryCount());
  const totalMemories = 3; // 총 3개의 기억 조각

  return (
    <motion.div
      className="fixed top-28 right-4 z-40 bg-cream border-4 border-black rounded-xl px-4 py-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">✨</span>
        <div>
          <p className="font-pixel text-xs text-pixel-dark font-bold mb-1">기억 조각</p>
          <div className="flex gap-2">
            {[...Array(totalMemories)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-8 h-8 border-3 border-black rounded-lg shadow-md ${
                  i < memoryCount
                    ? 'bg-gradient-to-br from-yellow-300 to-orange-400'
                    : 'bg-white'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <AnimatePresence>
                  {i < memoryCount && (
                    <motion.div
                      className="w-full h-full flex items-center justify-center text-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      ⭐
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemoryHUD;

