import React from 'react';
import { motion } from 'framer-motion';

const LightBloomEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 스포트라이트 효과 */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* 좌측 조명 */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64"
        style={{
          background: 'radial-gradient(circle, rgba(255,100,200,0.3) 0%, rgba(255,100,200,0) 70%)',
          filter: 'blur(30px)'
        }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* 우측 조명 */}
      <motion.div
        className="absolute top-1/3 right-0 w-64 h-64"
        style={{
          background: 'radial-gradient(circle, rgba(100,150,255,0.3) 0%, rgba(100,150,255,0) 70%)',
          filter: 'blur(30px)'
        }}
        animate={{
          x: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5
        }}
      />
      
      {/* 바닥 조명 */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-full h-32 -translate-x-1/2"
        style={{
          background: 'linear-gradient(to top, rgba(255,200,100,0.2) 0%, rgba(255,200,100,0) 100%)',
          filter: 'blur(20px)'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
};

export default LightBloomEffect;



