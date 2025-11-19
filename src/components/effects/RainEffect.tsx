import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Raindrop {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

const RainEffect: React.FC = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    const drops: Raindrop[] = [];
    for (let i = 0; i < 50; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 0.5 + Math.random() * 0.5
      });
    }
    setRaindrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-blue-300 opacity-60"
          style={{
            left: `${drop.left}%`,
            top: '-10%'
          }}
          animate={{
            y: ['0vh', '110vh']
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;



