import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxBackgroundProps {
  sceneId: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ sceneId }) => {
  // 씬별 배경 레이어 설정
  const getBackgroundLayers = () => {
    switch (sceneId) {
      case 'scene1':
        return (
          <>
            {/* 하늘 레이어 - 아침 햇살 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at top, #FFF8DC 0%, #FFE5B4 30%, #FFD7A8 60%, #FFB7C5 100%)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.95, 1, 0.95]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* 태양 광선 효과 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sun-ray-${i}`}
                className="absolute"
                style={{
                  top: '10%',
                  left: '50%',
                  width: '2px',
                  height: '30%',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 200, 0.4), transparent)',
                  transformOrigin: 'top center',
                  transform: `rotate(${i * 45}deg)`,
                  zIndex: 0
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scaleY: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut'
                }}
              />
            ))}
            
            {/* 구름 레이어 1 - 느리게 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ zIndex: 1 }}
              animate={{ x: ['-10%', '110%'] }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-16 left-0 w-40 h-20 bg-white/80 rounded-full blur-md shadow-lg" />
              <div className="absolute top-12 left-8 w-32 h-16 bg-white/60 rounded-full blur-md" />
              <div className="absolute top-36 left-60 w-48 h-24 bg-white/70 rounded-full blur-lg shadow-xl" />
              <div className="absolute top-32 left-72 w-36 h-18 bg-white/50 rounded-full blur-md" />
            </motion.div>

            {/* 구름 레이어 2 - 중간 속도 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-60"
              style={{ zIndex: 1 }}
              animate={{ x: ['10%', '-110%'] }}
              transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-24 right-20 w-52 h-26 bg-white/70 rounded-full blur-xl" />
              <div className="absolute top-48 right-40 w-44 h-22 bg-white/50 rounded-full blur-lg" />
            </motion.div>

            {/* 새들 날아가는 효과 */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`bird-${i}`}
                className="absolute text-2xl"
                style={{
                  top: `${20 + i * 10}%`,
                  left: '-5%',
                  zIndex: 2
                }}
                animate={{
                  x: ['0vw', '110vw'],
                  y: [0, -20, 0, 20, 0]
                }}
                transition={{
                  duration: 25 + i * 3,
                  repeat: Infinity,
                  delay: i * 4,
                  ease: 'linear'
                }}
              >
                🦅
              </motion.div>
            ))}

            {/* 언덕 레이어 - 중간 */}
            <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 2 }}>
              <svg viewBox="0 0 1440 320" className="w-full pointer-events-none" style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.1))' }}>
                <path
                  fill="#A8E6CF"
                  fillOpacity="0.7"
                  d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,149.3C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </div>

            {/* 전경 레이어 - 풀밭 */}
            <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 3 }}>
              <svg viewBox="0 0 1440 200" className="w-full pointer-events-none" style={{ filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.15))' }}>
                <path
                  fill="#8FD8A0"
                  d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
              {/* 풀 디테일 */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-600/20 to-transparent" />
            </div>

            {/* 반짝이는 효과 (햇살 반사) */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-yellow-200 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${60 + Math.random() * 30}%`,
                  zIndex: 3
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </>
        );

      case 'scene2':
        return (
          <>
            {/* 하늘 레이어 - 맑은 날씨 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, #FFFFFF 0%, #E0F6FF 20%, #87CEEB 50%, #AEE2FF 80%, #B0E0E6 100%)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 6,
                repeat: Infinity
              }}
            />

            {/* 햇빛 효과 */}
            <motion.div
              className="absolute top-10 right-20 w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 200, 0.6) 0%, rgba(255, 255, 200, 0.3) 50%, transparent 70%)',
                filter: 'blur(20px)',
                zIndex: 0
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />

            {/* 구름 레이어 1 */}
            <motion.div
              className="absolute top-0 w-full h-full"
              style={{ zIndex: 1 }}
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-8 left-1/4 w-56 h-28 bg-white/90 rounded-full blur-lg shadow-2xl" />
              <div className="absolute top-6 left-1/4 ml-8 w-44 h-22 bg-white/70 rounded-full blur-md" />
              <div className="absolute top-28 left-2/3 w-48 h-24 bg-white/80 rounded-full blur-xl shadow-xl" />
              <div className="absolute top-26 left-2/3 ml-6 w-36 h-18 bg-white/60 rounded-full blur-lg" />
              <div className="absolute top-16 left-1/2 w-40 h-20 bg-white/75 rounded-full blur-lg shadow-lg" />
            </motion.div>

            {/* 구름 레이어 2 */}
            <motion.div
              className="absolute top-0 w-full h-full"
              style={{ zIndex: 1 }}
              animate={{ x: ['100%', '0%'] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-20 right-1/4 w-52 h-26 bg-white/85 rounded-full blur-xl shadow-2xl" />
              <div className="absolute top-44 right-1/2 w-44 h-22 bg-white/70 rounded-full blur-lg" />
            </motion.div>

            {/* 도시 스카이라인 - 개선된 디테일 */}
            <div className="absolute bottom-0 left-0 right-0 h-48" style={{ zIndex: 2 }}>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full opacity-40">
                {/* 빌딩들 */}
                <div className="relative w-16 h-28 bg-gradient-to-t from-gray-800 to-gray-700 shadow-xl">
                  <div className="absolute top-2 left-2 right-2 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-300/40" />
                    ))}
                  </div>
                </div>
                <div className="relative w-20 h-36 bg-gradient-to-t from-gray-900 to-gray-700 shadow-2xl">
                  <div className="absolute top-2 left-2 right-2 grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-300/50" />
                    ))}
                  </div>
                </div>
                <div className="relative w-18 h-32 bg-gradient-to-t from-gray-800 to-gray-600 shadow-xl">
                  <div className="absolute top-2 left-2 right-2 grid grid-cols-3 gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-300/40" />
                    ))}
                  </div>
                </div>
                <div className="relative w-24 h-40 bg-gradient-to-t from-gray-900 to-gray-700 shadow-2xl">
                  <div className="absolute top-2 left-2 right-2 grid grid-cols-4 gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-300/45" />
                    ))}
                  </div>
                </div>
                <div className="relative w-14 h-24 bg-gradient-to-t from-gray-800 to-gray-700 shadow-xl">
                  <div className="absolute top-2 left-2 right-2 grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-300/40" />
                    ))}
                  </div>
                </div>
              </div>
              {/* 그림자 효과 */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* 버스 애니메이션 - 더 실감나게 */}
            <motion.div
              className="absolute bottom-28 text-7xl pointer-events-none drop-shadow-2xl"
              style={{ zIndex: 3 }}
              initial={{ x: '-10%' }}
              animate={{ x: '110%' }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              🚌
            </motion.div>

            {/* 작은 자동차들 */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`car-${i}`}
                className="absolute bottom-20 text-3xl pointer-events-none"
                style={{ zIndex: 2 }}
                initial={{ x: '-5%' }}
                animate={{ x: '105%' }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  delay: i * 5,
                  ease: 'linear'
                }}
              >
                🚗
              </motion.div>
            ))}

            {/* 날아가는 낙엽 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`leaf-${i}`}
                className="absolute text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  zIndex: 2
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 100],
                  rotate: [0, 360, 720]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'easeInOut'
                }}
              >
                🍂
              </motion.div>
            ))}
          </>
        );

      case 'scene3':
        return (
          <>
            {/* 어두운 하늘 - 폭풍우 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 30% 30%, #8B9DC3 0%, #778899 30%, #696969 60%, #4A5568 100%)',
                zIndex: 0
              }}
              animate={{ opacity: [0.85, 0.95, 0.85] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* 어두운 구름들 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`dark-cloud-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${i * 15 - 10}%`,
                  top: `${10 + (i % 3) * 10}%`,
                  width: `${100 + i * 20}px`,
                  height: `${50 + i * 10}px`,
                  background: 'rgba(60, 60, 80, 0.6)',
                  filter: 'blur(30px)',
                  zIndex: 1
                }}
                animate={{
                  x: ['-20%', '120%'],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: 'linear'
                }}
              />
            ))}

            {/* 번개 효과 - 더 극적 */}
            <motion.div
              className="absolute inset-0 bg-white"
              style={{ zIndex: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 0, 0.4, 0, 0.3, 0, 0, 0, 0, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* 번개 섬광 선 */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`lightning-${i}`}
                className="absolute"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '0',
                  width: '3px',
                  height: '60%',
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(200, 200, 255, 0.6), transparent)',
                  filter: 'blur(2px)',
                  zIndex: 2,
                  opacity: 0
                }}
                animate={{
                  opacity: [0, 0, 0, 1, 0, 0, 0],
                  scaleY: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}

            {/* 비 내리는 효과 */}
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={`rain-${i}`}
                className="absolute w-0.5 bg-blue-200/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  height: `${20 + Math.random() * 30}px`,
                  zIndex: 3
                }}
                animate={{
                  y: ['0vh', '110vh']
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear'
                }}
              />
            ))}

            {/* 물웅덩이 반사 */}
            <div className="absolute bottom-0 left-0 right-0 h-20" style={{ zIndex: 2 }}>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-800/20 to-transparent" />
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`puddle-${i}`}
                  className="absolute w-12 h-1 rounded-full bg-blue-300/20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: `${Math.random() * 10}px`
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            {/* 거리 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800/60 to-transparent" style={{ zIndex: 2 }} />

            {/* 가로등 불빛 효과 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`streetlight-${i}`}
                className="absolute bottom-32 w-20 h-40"
                style={{
                  left: `${15 + i * 25}%`,
                  background: 'radial-gradient(ellipse at center top, rgba(255, 220, 150, 0.4) 0%, transparent 70%)',
                  filter: 'blur(15px)',
                  zIndex: 2
                }}
                animate={{
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </>
        );

      case 'scene4':
      case 'scene4_resolve':
        return (
          <>
            {/* 석양 배경 - 황금빛 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 80%, #FF6B6B 0%, #FFB6C1 20%, #FFD700 40%, #9370DB 70%, #4A148C 100%)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 8,
                repeat: Infinity
              }}
            />

            {/* 석양 빛 효과 */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-64"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 215, 0, 0.4) 0%, rgba(255, 107, 107, 0.2) 40%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity
              }}
            />

            {/* 반짝이는 별들 - 성능 최적화 */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: 'white',
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                  zIndex: 1,
                  willChange: 'opacity, transform'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.3, 1.2, 0.3]
                }}
                transition={{
                  duration: 1.5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}

            {/* 떠다니는 음표들 */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`note-${i}`}
                className="absolute text-2xl opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${40 + Math.random() * 40}%`,
                  zIndex: 2
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut'
                }}
              >
                {['🎵', '🎶', '♪', '♫'][i % 4]}
              </motion.div>
            ))}

            {/* 공연장 실루엣 - 더 디테일하게 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-56" style={{ zIndex: 2 }}>
              <div className="relative w-full h-full bg-gradient-to-t from-black/70 to-black/40 shadow-2xl">
                {/* 지붕 */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[160px] border-r-[160px] border-b-[40px] border-transparent border-b-black/60" />
                
                {/* 창문 불빛들 */}
                <div className="absolute top-8 left-8 right-8 grid grid-cols-6 gap-3">
                  {[...Array(18)].map((_, i) => (
                    <motion.div
                      key={`window-${i}`}
                      className="w-6 h-8 bg-yellow-300/60 rounded-sm"
                      animate={{
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>

                {/* 입구 빛 */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-t from-yellow-400/80 to-transparent"
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </div>

              {/* 공연장 앞 사람들 실루엣 */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end h-12 opacity-50">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`person-${i}`}
                    className="w-4 h-8 bg-black rounded-t-full"
                    animate={{
                      height: [`${8 + Math.random() * 4}px`, `${10 + Math.random() * 4}px`, `${8 + Math.random() * 4}px`]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 조명 효과 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`light-${i}`}
                className="absolute bottom-56 w-24"
                style={{
                  left: `${30 + i * 8}%`,
                  height: '100px',
                  background: `linear-gradient(to top, rgba(255, ${150 + i * 20}, ${200 - i * 20}, 0.3) 0%, transparent 100%)`,
                  filter: 'blur(20px)',
                  zIndex: 3
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scaleX: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </>
        );

      case 'scene5':
        return (
          <>
            {/* 어두운 무대 배경 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, #1A0033 0%, #0D001A 40%, #000000 100%)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.95, 1, 0.95]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            />

            {/* 메인 스포트라이트 효과 */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-full"
              style={{
                background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.3) 0%, rgba(255, 200, 100, 0.15) 40%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 1
              }}
              animate={{
                opacity: [0.6, 0.9, 0.6],
                scaleX: [1, 1.15, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />

            {/* 조명 빔 효과들 - 적절하게 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`beam-${i}`}
                className="absolute"
                style={{
                  left: `${15 + i * 14}%`,
                  top: '-5%',
                  width: '100px',
                  height: '110%',
                  background: `linear-gradient(to bottom, 
                    rgba(${150 + i * 20}, ${100 + i * 25}, ${255 - i * 30}, 0.25) 0%, 
                    rgba(${150 + i * 20}, ${100 + i * 25}, ${255 - i * 30}, 0.08) 50%,
                    transparent 80%)`,
                  filter: 'blur(30px)',
                  transformOrigin: 'top center',
                  transform: `rotate(${(i - 3) * 10}deg)`,
                  zIndex: 1
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scaleX: [0.9, 1.2, 0.9],
                  rotate: [`${(i - 3) * 10 - 8}deg`, `${(i - 3) * 10 + 8}deg`, `${(i - 3) * 10 - 8}deg`]
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* 관객들의 핸드폰 불빛 - 적당히 */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`light-${i}`}
                className="absolute w-1 h-1.5 rounded-full"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${65 + Math.random() * 25}%`,
                  background: `rgba(255, ${220 + Math.random() * 35}, ${180 + Math.random() * 75}, 0.7)`,
                  boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
                  zIndex: 2
                }}
                animate={{
                  opacity: [0.4, 0.9, 0.4],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{
                  duration: 1.5 + Math.random() * 0.8,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}

            {/* 스모크 효과 - 줄임 */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`smoke-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${i * 20 + 10}%`,
                  bottom: '0',
                  width: `${120 + i * 15}px`,
                  height: `${90 + i * 12}px`,
                  background: 'rgba(180, 180, 220, 0.08)',
                  filter: 'blur(35px)',
                  zIndex: 1
                }}
                animate={{
                  y: [0, -180, -350],
                  opacity: [0.5, 0.2, 0],
                  scale: [1, 1.4, 1.8]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: 'easeOut'
                }}
              />
            ))}

            {/* 무대 바닥 - 은은한 글로우 */}
            <div className="absolute bottom-0 left-0 right-0 h-32"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 150, 100, 0.12) 50%, transparent 80%)',
                zIndex: 2
              }}
            />

            {/* 별 효과 - 성능 최적화 */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  zIndex: 2,
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
                  willChange: 'opacity, transform'
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.3, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* 음표들 - 줄임 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`note-${i}`}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${70 + Math.random() * 20}%`,
                  opacity: 0.25,
                  zIndex: 1
                }}
                animate={{
                  y: [0, -120, -240],
                  x: [0, (Math.random() - 0.5) * 30, 0],
                  opacity: [0, 0.35, 0],
                  rotate: [0, 180]
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: 'easeOut'
                }}
              >
                {['🎵', '🎶', '♪', '♫'][i % 4]}
              </motion.div>
            ))}
          </>
        );

      case 'scene6':
      case 'secret_ending':
        return (
          <>
            {/* 밤하늘 - 깊은 우주 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 30% 20%, #2C1654 0%, #191970 20%, #0F0032 50%, #1A0033 80%, #000000 100%)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 10,
                repeat: Infinity
              }}
            />

            {/* 은하수 효과 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(147, 112, 219, 0.1) 30%, rgba(138, 43, 226, 0.2) 50%, rgba(75, 0, 130, 0.1) 70%, transparent 100%)',
                filter: 'blur(50px)',
                zIndex: 0
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* 별들 - 성능 최적화 */}
            {[...Array(60)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const isSpecial = i % 10 === 0;
              return (
                <motion.div
                  key={`star-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: isSpecial ? `0 0 ${size * 3}px rgba(255, 255, 255, 0.8)` : 'none',
                    zIndex: 1,
                    willChange: 'opacity, transform'
                  }}
                  animate={{
                    opacity: isSpecial ? [0.5, 1, 0.5] : [0.3, 0.8, 0.3],
                    scale: isSpecial ? [1, 1.3, 1] : [1, 1, 1]
                  }}
                  transition={{
                    duration: 1 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              );
            })}

            {/* 별똥별들 */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`shooting-star-${i}`}
                className="absolute h-0.5 w-16 bg-gradient-to-r from-white via-blue-200 to-transparent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  zIndex: 2,
                  filter: 'blur(1px)',
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
                }}
                animate={{
                  x: [-100, 500],
                  y: [0, 200],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 8 + Math.random() * 5,
                  ease: 'easeOut'
                }}
              />
            ))}

            {/* 달 - 더 아름답게 */}
            <motion.div
              className="absolute top-16 right-24 w-32 h-32"
              style={{
                zIndex: 2
              }}
            >
              {/* 달 본체 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200"
                style={{
                  boxShadow: '0 0 60px rgba(255, 255, 200, 0.8), inset -8px -8px 20px rgba(180, 180, 140, 0.4)'
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.85, 0.95, 0.85]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
              />

              {/* 달 크레이터 */}
              <div className="absolute top-4 right-6 w-4 h-4 rounded-full bg-yellow-300/40" />
              <div className="absolute top-8 right-12 w-6 h-6 rounded-full bg-yellow-300/30" />
              <div className="absolute bottom-8 right-8 w-5 h-5 rounded-full bg-yellow-300/35" />

              {/* 달빛 후광 */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 200, 0.3) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(2)'
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1.8, 2.2, 1.8]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              />
            </motion.div>

            {/* 떠다니는 하트 (감동적인 느낌) */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-2xl opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${80 + Math.random() * 20}%`,
                  zIndex: 2
                }}
                animate={{
                  y: [0, -200, -400],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 1.2],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: 'easeOut'
                }}
              >
                💖
              </motion.div>
            ))}

            {/* 음표들이 하늘로 */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`music-${i}`}
                className="absolute text-xl opacity-50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${60 + Math.random() * 30}%`,
                  zIndex: 2
                }}
                animate={{
                  y: [0, -150, -300],
                  x: [0, (Math.random() - 0.5) * 50, 0],
                  opacity: [0, 0.5, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'easeOut'
                }}
              >
                {['🎵', '🎶', '♪', '♫'][i % 4]}
              </motion.div>
            ))}

            {/* 반짝이는 마법 가루 */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`magic-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${200 + Math.random() * 55}, ${150 + Math.random() * 105}, 255, 0.8)`,
                  zIndex: 3,
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 2, 0.5],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* 구름들 (밤 구름) */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`night-cloud-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${i * 25 - 10}%`,
                  bottom: `${10 + i * 5}%`,
                  width: `${120 + i * 30}px`,
                  height: `${50 + i * 10}px`,
                  background: 'rgba(30, 30, 50, 0.4)',
                  filter: 'blur(25px)',
                  zIndex: 1
                }}
                animate={{
                  x: ['-10%', '110%'],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 40 + i * 10,
                  repeat: Infinity,
                  delay: i * 5,
                  ease: 'linear'
                }}
              />
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {getBackgroundLayers()}
    </div>
  );
};

export default ParallaxBackground;

