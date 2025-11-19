import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CollectibleItem as Item } from '../data/scenes';
import { useSceneStore } from '../store/useSceneStore';

interface CollectibleItemProps {
  item: Item;
  position?: { x: string; y: string };
}

const CollectibleItem: React.FC<CollectibleItemProps> = ({ item, position = { x: '50%', y: '50%' } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollected, setIsCollected] = useState(false);
  const collectItem = useSceneStore((state) => state.collectItem);
  const collectedItems = useSceneStore((state) => state.collectedItems);

  // 이미 수집했는지 확인
  const alreadyCollected = collectedItems.some(i => i.id === item.id);

  const handleClick = () => {
    if (!alreadyCollected && !isCollected) {
      collectItem(item);
      setIsCollected(true);
      
      // 수집 효과음 (선택사항)
      // new Audio('/sounds/collect.mp3').play();
    }
  };

  if (alreadyCollected || isCollected) {
    return null; // 이미 수집한 아이템은 표시하지 않음
  }

  return (
    <motion.div
      className="absolute cursor-pointer pointer-events-auto"
      style={{
        left: position.x,
        top: position.y,
        zIndex: 15
      }}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* 아이템 아이콘 */}
      <div className="relative">
        <motion.div
          className="text-5xl filter drop-shadow-lg"
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 0.5 }}
        >
          {item.emoji}
        </motion.div>

        {/* 반짝이는 효과 */}
        <motion.div
          className="absolute -inset-2 bg-yellow-300 rounded-full opacity-20 blur-md"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
      </div>

      {/* 호버 시 이름 표시 */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="bg-black/80 text-white px-3 py-2 rounded-lg font-sans text-sm border-2 border-white/30">
              <p className="font-bold">{item.name}</p>
              <p className="text-xs opacity-80">{item.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 수집 시 애니메이션 */}
      {isCollected && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ 
            scale: [1, 2, 0],
            opacity: [1, 0.5, 0],
            y: -100
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl">{item.emoji}</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CollectibleItem;

