import React from 'react';
import { motion } from 'framer-motion';

const Credits: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-2 right-2 z-50 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-white/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <p className="font-sans">
        🎵 Inspired by 극동아시아타이거즈
      </p>
      <p className="font-sans text-[10px] mt-1 text-white/50">
        Personal Portfolio Project · Non-commercial Use
      </p>
    </motion.div>
  );
};

export default Credits;

