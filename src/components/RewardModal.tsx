import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RewardModalProps {
  isOpen: boolean;
  memory: {
    text: string;
    type: 'lyric' | 'thought' | 'memory';
  };
  onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ isOpen, memory, onClose }) => {
  // 타입별 색상 테마
  const getTheme = () => {
    switch (memory.type) {
      case 'lyric':
        return {
          gradient: 'from-purple-300 via-pink-300 to-orange-300',
          border: 'border-purple-600',
          icon: '🎵',
          iconBg: 'bg-purple-100',
          title: '가사를 발견했어요!',
          btnColor: 'bg-purple-600 hover:bg-purple-700'
        };
      case 'thought':
        return {
          gradient: 'from-blue-300 via-cyan-300 to-teal-300',
          border: 'border-blue-600',
          icon: '💭',
          iconBg: 'bg-blue-100',
          title: '생각이 떠올랐어요!',
          btnColor: 'bg-blue-600 hover:bg-blue-700'
        };
      default:
        return {
          gradient: 'from-yellow-300 via-orange-300 to-pink-300',
          border: 'border-orange-600',
          icon: '✨',
          iconBg: 'bg-yellow-100',
          title: '기억이 돌아왔어요!',
          btnColor: 'bg-tiger hover:bg-orange-600'
        };
    }
  };

  const theme = getTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* 배경 반짝이 파티클 */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -50]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeOut'
              }}
            />
          ))}

          <motion.div
            className="relative max-w-2xl w-full mx-4"
            initial={{ scale: 0.3, opacity: 0, y: 100, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.3, opacity: 0, y: 100, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 글로우 효과 */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} rounded-3xl blur-2xl opacity-60`}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />

            {/* 메인 카드 */}
            <div className={`relative bg-cream border-6 ${theme.border} rounded-3xl p-10 shadow-2xl`}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.5)'
              }}
            >
              {/* 상단 아이콘 배경 */}
              <motion.div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${theme.iconBg} border-4 ${theme.border} rounded-full p-5 shadow-xl`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <motion.span 
                  className="text-8xl block"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {theme.icon}
                </motion.span>
              </motion.div>

              {/* 타이틀 */}
              <motion.h3
                className="font-sans text-3xl text-center text-pixel-dark mb-8 mt-16 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  textShadow: '2px 2px 0 rgba(255,255,255,0.5)',
                  letterSpacing: '0.05em'
                }}
              >
                {theme.title}
              </motion.h3>

              {/* 기억 텍스트 박스 */}
              <motion.div
                className="relative bg-white border-4 border-black rounded-2xl p-8 mb-8 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                {/* 반짝이는 효과 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />

                <p className="relative font-sans text-2xl text-center text-[#4A7AB8] leading-loose font-semibold"
                   style={{ 
                     wordBreak: 'keep-all',
                     lineHeight: '1.9'
                   }}
                >
                  "{memory.text}"
                </p>
              </motion.div>

              {/* 별 장식 */}
              <div className="flex justify-center gap-4 mb-8">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-4xl"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      delay: 0.8 + i * 0.1,
                      y: {
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* 닫기 버튼 */}
              <motion.button
                className={`w-full py-5 ${theme.btnColor} border-4 border-black rounded-xl font-sans font-bold text-white text-xl shadow-lg transition-all relative overflow-hidden`}
                style={{
                  boxShadow: '0 6px 0 rgba(0,0,0,0.3)',
                  letterSpacing: '0.05em'
                }}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 8px 0 rgba(0,0,0,0.3)'
                }}
                whileTap={{ 
                  y: 2,
                  boxShadow: '0 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                {/* 버튼 반짝임 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                <span className="relative">계속하기 ✨</span>
              </motion.button>

              {/* 코너 장식 */}
              <div className="absolute top-6 left-6 text-4xl opacity-20">🎸</div>
              <div className="absolute top-6 right-6 text-4xl opacity-20">🎤</div>
              <div className="absolute bottom-6 left-6 text-4xl opacity-20">🎵</div>
              <div className="absolute bottom-6 right-6 text-4xl opacity-20">💖</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardModal;

