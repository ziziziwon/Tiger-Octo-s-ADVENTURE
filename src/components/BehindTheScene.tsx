import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BehindTheScene: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-pixel-blue to-pixel-pink py-12 px-4 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={() => navigate('/')}
            className="pixel-btn text-xs"
            whileHover={{ scale: 1.05 }}
          >
            ← HOME
          </motion.button>
          
          <motion.h1
            className="font-pixel text-2xl md:text-4xl text-tiger pixel-text-shadow text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎬 BEHIND THE SCENE
          </motion.h1>

          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* 프로젝트 개요 */}
        <motion.div
          className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl mb-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="font-pixel text-xl text-pixel-dark mb-6 flex items-center gap-3">
            <span className="text-3xl">🎨</span> PROJECT OVERVIEW
          </h2>
          <div className="space-y-4 font-sans text-base leading-relaxed text-pixel-dark/90">
            <p>
              <strong className="text-tiger text-lg">"극단이의 우당탕 모험"</strong>은 단순한 픽셀 게임이 아닙니다. 
              <span className="block mt-2 text-lg font-semibold text-purple-600">
                "감정의 인터랙션"을 탐구한 실험적 웹 경험입니다.
              </span>
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-tiger/10 border-2 border-tiger rounded-lg p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-sm mb-2">프로젝트 목표</h4>
                <p className="text-xs">픽셀 감성 + 현대 웹 + 감정적 스토리텔링</p>
              </div>
              <div className="bg-sky/10 border-2 border-sky rounded-lg p-4">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-bold text-sm mb-2">타겟</h4>
                <p className="text-xs"> 감성적 인터랙티브 경험을 찾는 유저</p>
              </div>
              <div className="bg-pixel-pink/30 border-2 border-pixel-pink rounded-lg p-4">
                <div className="text-3xl mb-2">⏱️</div>
                <h4 className="font-bold text-sm mb-2">플레이 타임</h4>
                <p className="text-xs">15-20분 (미니게임 포함)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 프로젝트 통계 */}
        <motion.div
          className="backdrop-blur-xl bg-gradient-to-r from-tiger/20 via-sky/20 to-pixel-pink/20 border-4 border-black p-6 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-pixel text-lg text-pixel-dark mb-4 text-center">📊 PROJECT STATS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl font-pixel text-tiger">13</div>
              <div className="text-xs font-sans mt-1">씬 개수</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-pixel text-sky">3</div>
              <div className="text-xs font-sans mt-1">미니게임</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-pixel text-purple-600">10+</div>
              <div className="text-xs font-sans mt-1">수집 아이템</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-pixel text-pink-600">6</div>
              <div className="text-xs font-sans mt-1">배경 효과</div>
            </div>
          </div>
        </motion.div>

        {/* 메인 섹션들 */}
        <div className="space-y-6">
          {/* 디자인 프로세스 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🎭</span> DESIGN PROCESS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-tiger text-white rounded-full flex items-center justify-center font-pixel text-lg">1</div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">컨셉 & 리서치</h4>
                  <p className="text-sm text-pixel-dark/70">극동아시아타이거즈의 음악적 정체성 분석, 팬들의 감정 여정 리서치, 픽셀 아트와 현대 웹 디자인의 융합 가능성 탐색</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sky text-white rounded-full flex items-center justify-center font-pixel text-lg">2</div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">스토리 설계</h4>
                  <p className="text-sm text-pixel-dark/70">6개 씬 구성, 각 씬마다 감정 테마 설정(설렘→여정→긴장→위기→해소→감동), 분기형 스토리 라인 설계</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-pixel text-lg">3</div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">비주얼 디자인</h4>
                  <p className="text-sm text-pixel-dark/70">색상 팔레트 정의, 씬별 배경 효과 프로토타입, 픽셀 UI 컴포넌트 디자인 시스템 구축</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-pixel text-lg">4</div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">인터랙션 구현</h4>
                  <p className="text-sm text-pixel-dark/70">미니게임 3종 개발, Framer Motion 애니메이션 적용, Zustand 상태 관리 및 localStorage 저장 구현</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-pixel text-lg">5</div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2">테스트 & 개선</h4>
                  <p className="text-sm text-pixel-dark/70">난이도 조절, 클릭 이슈 해결, 레이아웃 최적화, 배경 효과 성능 개선</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 씬별 디자인 결정 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🎬</span> SCENE DESIGN BREAKDOWN
            </h3>
            <div className="space-y-4">
              {[
                { 
                  scene: 'Scene 1: 출발', 
                  emoji: '🌅', 
                  color: 'from-yellow-200 to-orange-200',
                  textColor: 'text-pixel-dark',
                  conceptColor: 'text-orange-900',
                  concept: '아침의 설렘',
                  design: '태양 광선 효과, 날아가는 새들, 밝은 파스텔 색상으로 긍정적이고 희망찬 분위기 연출. 구름의 느린 움직임으로 여유로운 시작을 표현.'
                },
                { 
                  scene: 'Scene 2: 여정', 
                  emoji: '🚌', 
                  color: 'from-blue-200 to-cyan-200',
                  textColor: 'text-pixel-dark',
                  conceptColor: 'text-blue-900',
                  concept: '기대와 두근거림',
                  design: '도시 스카이라인, 움직이는 차량들, 낙엽으로 도시의 생동감 표현. 빌딩 창문 불빛으로 시간의 흐름을 암시.'
                },
                { 
                  scene: 'Scene 3: 비', 
                  emoji: '⛈️', 
                  color: 'from-slate-400 to-indigo-400',
                  textColor: 'text-white',
                  conceptColor: 'text-blue-100',
                  concept: '감정의 깊이',
                  design: '80개의 빗방울, 번개 효과, 가로등 빛으로 감성적이고 사색적인 분위기. 물웅덩이 반사 효과로 리얼리티 추가.'
                },
                { 
                  scene: 'Scene 4: 공연장 앞', 
                  emoji: '🌆', 
                  color: 'from-purple-400 to-pink-400',
                  textColor: 'text-white',
                  conceptColor: 'text-yellow-100',
                  concept: '긴장과 기대',
                  design: '석양 그라데이션, 떠다니는 음표, 공연장 실루엣과 창문 불빛으로 클라이맥스 직전의 긴장감 조성.'
                },
                { 
                  scene: 'Scene 5: 무대', 
                  emoji: '🎸', 
                  color: 'from-purple-900 to-black',
                  textColor: 'text-white',
                  conceptColor: 'text-yellow-300',
                  concept: '감동의 절정',
                  design: '스포트라이트, 조명 빔, 관객 불빛으로 실제 콘서트 같은 몰입감. 스모크와 별 효과로 마법같은 순간 강조.'
                },
                { 
                  scene: 'Scene 6: 여운', 
                  emoji: '🌙', 
                  color: 'from-indigo-900 to-purple-900',
                  textColor: 'text-white',
                  conceptColor: 'text-pink-300',
                  concept: '감동과 성찰',
                  design: '은하수, 150개의 별, 별똥별, 떠다니는 하트와 음표로 감동의 여운과 따뜻한 마무리 표현.'
                }
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-r ${item.color} border-2 border-black rounded-lg p-4`}>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                    <div className="flex-1">
                      <h4 className={`font-bold text-base mb-1 ${item.textColor || 'text-pixel-dark'}`}>{item.scene}</h4>
                      <p className={`text-xs font-semibold mb-2 ${item.conceptColor || 'text-purple-900'}`}>테마: {item.concept}</p>
                      <p className={`text-xs leading-relaxed ${item.textColor || 'text-pixel-dark'} ${item.textColor ? 'opacity-90' : 'opacity-80'}`}>{item.design}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 미니게임 디자인 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span> MINI-GAME DESIGN
            </h3>
            <div className="space-y-6">
              <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">📦</span>
                  <h4 className="font-bold text-lg">아이템 캐치 게임</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>목적:</strong> 급하게 짐을 챙기는 극단이의 성격 표현</p>
                  <p><strong>메커니즘:</strong> 떨어지는 아이템을 좌우 키보드로 받기</p>
                  <p><strong>디자인 의도:</strong> 단순하지만 긴장감 있는 시작, 플레이어의 반사신경 테스트</p>
                  <p><strong>난이도 조절:</strong> 게임 시간 20초, 아이템 속도 중간, 유저 피드백 반영하여 3회 수정</p>
                </div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">💧</span>
                  <h4 className="font-bold text-lg">감정의 빗방울 (Rain Memory)</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>목적:</strong> 비 오는 날의 추억을 되살리는 감성적 인터랙션</p>
                  <p><strong>메커니즘:</strong> 천천히 떨어지는 큰 빗방울을 마우스로 클릭하여 수집</p>
                  <p><strong>디자인 의도:</strong> 클릭할 때마다 "비 냄새" 가사 한 줄씩 떠오르며, 비와 함께 추억을 되찾는 경험</p>
                  <p><strong>난이도 조절:</strong> 40초간 진행, 14개의 가사 조각, 빗방울 크기 증가, 최대 6개로 제한</p>
                </div>
              </div>
              <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">⭐</span>
                  <h4 className="font-bold text-lg">별 수집기 (Star Catcher)</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>목적:</strong> 공연의 감동을 별처럼 모아가는 완결의 순간</p>
                  <p><strong>메커니즘:</strong> 떨어지는 별들을 극단이(문어)로 받기 (마우스/키보드 이동)</p>
                  <p><strong>디자인 의도:</strong> "별"영감 받아, 플레이어가 직접 별을 모으며 추억을 완성</p>
                  <p><strong>난이도 조절:</strong> 25초간 진행, ⭐일반(10점) ✨특별(20점) 🌟황금(30점) 별 등장</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 색상 팔레트 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🌈</span> COLOR SYSTEM
            </h3>
            <div className="mb-6">
              <p className="text-sm text-pixel-dark/80 mb-4">
                각 색상은 감정을 표현하는 도구로 선택하였습니다. 픽셀 감성을 유지하면서도 현대적이고 따뜻한 느낌을 주는 파스텔 톤 중심의 팔레트입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-24 bg-tiger border-3 border-black rounded-lg mb-2 shadow-lg" />
                <p className="text-sm font-sans font-bold">Tiger Orange</p>
                <p className="text-xs font-sans text-pixel-dark/70 mb-1">#FF9B00</p>
                <p className="text-xs text-pixel-dark/60 italic">열정, 에너지</p>
              </div>
              <div>
                <div className="w-full h-24 bg-cream border-3 border-black rounded-lg mb-2 shadow-lg" />
                <p className="text-sm font-sans font-bold">Cream</p>
                <p className="text-xs font-sans text-pixel-dark/70 mb-1">#FCECDD</p>
                <p className="text-xs text-pixel-dark/60 italic">따뜻함, 편안함</p>
              </div>
              <div>
                <div className="w-full h-24 bg-sky border-3 border-black rounded-lg mb-2 shadow-lg" />
                <p className="text-sm font-sans font-bold">Sky Blue</p>
                <p className="text-xs font-sans text-pixel-dark/70 mb-1">#5F7FFF</p>
                <p className="text-xs text-pixel-dark/60 italic">꿈, 희망</p>
              </div>
              <div>
                <div className="w-full h-24 bg-pixel-pink border-3 border-black rounded-lg mb-2 shadow-lg" />
                <p className="text-sm font-sans font-bold">Pixel Pink</p>
                <p className="text-xs font-sans text-pixel-dark/70 mb-1">#FFB7C5</p>
                <p className="text-xs text-pixel-dark/60 italic">감성, 설렘</p>
              </div>
            </div>
          </motion.div>

          {/* 기술 스택 & 아키텍처 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">💻</span> TECH STACK
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-xl">⚛️</span> Frontend
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>React 18 + TypeScript</strong>
                      <p className="text-xs text-pixel-dark/70">컴포넌트 기반 아키텍처, 타입 안정성</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Framer Motion</strong>
                      <p className="text-xs text-pixel-dark/70">60fps 애니메이션, 감정 표현 최적화</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Tailwind CSS</strong>
                      <p className="text-xs text-pixel-dark/70">빠른 스타일링, 커스텀 픽셀 클래스</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Canvas API</strong>
                      <p className="text-xs text-pixel-dark/70">별 파티클 시스템 (150개), 동적 포스터 생성</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-xl">🧠</span> State & Routing
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <div>
                      <strong>Zustand</strong>
                      <p className="text-xs text-pixel-dark/70">경량 상태 관리, localStorage 연동</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <div>
                      <strong>React Router v6</strong>
                      <p className="text-xs text-pixel-dark/70">SPA 라우팅, 씬 전환 관리</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <div>
                      <strong>localStorage</strong>
                      <p className="text-xs text-pixel-dark/70">진행도 저장, 세션 유지</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-600 rounded-lg p-4">
              <h4 className="font-bold mb-3">🏗️ 아키텍처 특징</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span><strong>JSON 기반 스토리 시스템:</strong> 씬 데이터 분리로 유지보수성 향상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span><strong>컴포넌트 재사용:</strong> ParallaxBackground, RewardModal 등</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span><strong>레이어드 z-index 시스템:</strong> 배경(-1~3), UI(10+), 게임(50+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span><strong>pointer-events 최적화:</strong> 클릭 이슈 해결</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span><strong>After Credit Scene 시스템:</strong> 초대장 → 별 파티클 → 포스터 </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 기술적 도전과제 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🔧</span> TECHNICAL CHALLENGES
            </h3>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                  <span>❌</span> 문제: SVG 배경 요소가 버튼 클릭 차단
                </h4>
                <p className="text-sm text-pixel-dark/80 mb-2">
                  ParallaxBackground의 SVG 요소들이 선택지 버튼 위에 겹쳐져 클릭이 안 되는 현상
                </p>
                <h4 className="font-bold text-sm mb-1 text-green-700 flex items-center gap-2">
                  <span>✓</span> 해결책
                </h4>
                <p className="text-sm text-pixel-dark/70">
                  1) ParallaxBackground z-index를 -1로 설정<br/>
                  2) 모든 배경 요소에 pointer-events-none 추가<br/>
                  3) 상호작용 UI에만 pointer-events-auto 명시
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                  <span>❌</span> 문제: 미니게임 난이도 과다로 유저 이탈
                </h4>
                <p className="text-sm text-pixel-dark/80 mb-2">
                  초기 테스트에서 미니게임이 너무 어려워 스토리 진행을 방해
                </p>
                <h4 className="font-bold text-sm mb-1 text-green-700 flex items-center gap-2">
                  <span>✓</span> 해결책
                </h4>
                <p className="text-sm text-pixel-dark/70">
                  1) 아이템 캐치: 게임 시간 20초로 증가, 아이템 속도 감소<br/>
                  2) 빗방울 기억: 40초로 증가, 14개 가사 조각, 빗방울 크기 2배 확대, 속도 60% 감소, 최대 6개 제한<br/>
                  3) 별 수집기: 25초간 진행, 마우스 딜레이 제거, 수집 효과 추가<br/>
                  4) "닫기" 버튼 추가로 스킵 가능하게 개선
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                  <span>❌</span> 문제: 배경 효과가 너무 화려해서 텍스트 가독성 저하
                </h4>
                <p className="text-sm text-pixel-dark/80 mb-2">
                  Scene 5 무대 씬에서 조명/레이저/음표 등 과도한 요소로 산만함
                </p>
                <h4 className="font-bold text-sm mb-1 text-green-700 flex items-center gap-2">
                  <span>✓</span> 해결책
                </h4>
                <p className="text-sm text-pixel-dark/70">
                  요소 수 대폭 감소 (조명 10→6, 음표 20→8), 투명도 낮춤 (0.7→0.25), 더 강한 blur 효과로 배경감 강조
                </p>
              </div>
            </div>
          </motion.div>

          {/* UX 개선 과정 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">📈</span> UX IMPROVEMENTS
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h4 className="font-bold mb-1">갤러리 레이아웃 최적화</h4>
                  <p className="text-sm text-pixel-dark/70">크기 축소, 중복 게임 결과 제거, 그리드 재정렬로 디자인 흐름 개선</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-bold mb-1">보상 시스템 강화</h4>
                  <p className="text-sm text-pixel-dark/70">미니게임 완료 시 가사/기억 조각 보상, 감정적 가치 부여, 메모리 갤러리 연동</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h4 className="font-bold mb-1">진행도 시각화</h4>
                  <p className="text-sm text-pixel-dark/70">ProgressBar, EmotionLog로 실시간 피드백, 수집 아이템/감정 기록을 시각적으로 표현</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-bold mb-1">인터랙션 명확화</h4>
                  <p className="text-sm text-pixel-dark/70">호버 효과 강화, 버튼 그림자/애니메이션, 이모지 아이콘으로 직관성 향상</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎟</div>
                <div>
                  <h4 className="font-bold mb-1">타이거즈의 초대장 (완결 경험)</h4>
                  <p className="text-sm text-pixel-dark/70">모든 수집 완료 시 나타나는 특별한 After Credit Scene, "관객이 세계의 일부가 되는" 감정적 절정</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 성과 & 배운 점 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span> KEY LEARNINGS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2 text-lg">
                  <span className="text-2xl">💡</span> 기술적 성장
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Framer Motion의 고급 애니메이션 기법 습득</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>z-index & pointer-events 레이어 시스템 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Zustand + localStorage 상태 영속화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>JSON 기반 CMS 구조 설계 경험</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Canvas API로 파티클 시스템 & 동적 이미지 생성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>CSS filter/blend-mode로 Glitch 전환 효과 구현</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2 text-lg">
                  <span className="text-2xl">🎨</span> 디자인 인사이트
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>레트로 감성을 현대적으로 재해석하는 방법</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>스토리텔링과 인터랙션의 융합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>유저 테스트의 중요성 (난이도 조절)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>감정을 디자인 요소로 표현하는 기법</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>After Credit Scene으로 완성하는 서사적 경험</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Canvas 파티클로 몰입감 극대화</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 향후 개선 방향 */}
          <motion.div
            className="backdrop-blur-xl bg-white/90 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span> FUTURE ROADMAP
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <span>🎵</span> 실제 음악 통합
                </h4>
                <p className="text-sm text-pixel-dark/70">극동아시아타이거즈 곡을 BGM으로, 씬 전환 시 페이드 효과</p>
              </div>
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <span>📱</span> 모바일 최적화
                </h4>
                <p className="text-sm text-pixel-dark/70">터치 제스처 추가, 반응형 레이아웃 개선, PWA 지원</p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <span>🎮</span> 추가 미니게임
                </h4>
                <p className="text-sm text-pixel-dark/70">공연장 미로 게임(Scene 4), 버스 피하기 게임(Scene 2) 구현</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-600 rounded-lg p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <span>💾</span> 소셜 공유 기능
                </h4>
                <p className="text-sm text-pixel-dark/70">갤러리 이미지 저장, 결과 공유, Open Graph 메타태그</p>
              </div>
              <div className="bg-pink-50 border-2 border-pink-600 rounded-lg p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <span>🌍</span> 다국어 지원
                </h4>
                <p className="text-sm text-pixel-dark/70">영어 버전 추가로 글로벌 팬들에게도 경험 제공</p>
              </div>
            </div>
          </motion.div>

          {/* 숨겨진 이야기 */}
          <motion.div
            className="backdrop-blur-xl bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-black p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.05 }}
          >
            <h3 className="font-pixel text-lg text-pixel-dark mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> HIDDEN STORIES
            </h3>

            <div className="space-y-6">
              {/* 타이거즈의 초대장 */}
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 border-4 border-yellow-600 rounded-lg p-6 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🎟</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3 text-yellow-900">극동아시아타이거즈의 초대장 (After Credit Scene)</h4>
                    <p className="text-sm mb-4 leading-relaxed text-pixel-dark">
                      모든 추억을 수집하면 갤러리에 <strong className="text-yellow-700">반짝이는 초대장 카드</strong>가 나타납니다. 
                      <br/> 이것은 단순한 엔딩이 아닌, <strong>"관객이 세계의 일부가 되는 순간"</strong>을 경험하는 특별한 씬입니다.
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="bg-white/70 border-2 border-yellow-400 rounded p-3">
                        <p className="text-xs font-bold text-yellow-900 mb-1">🌕 1단계: 초대장 획득</p>
                        <p className="text-xs text-pixel-dark/70">
                          모든 아이템을 수집하면 갤러리에 <strong>Glitch 효과</strong>와 함께 초대장이 등장합니다.
                        </p>
                      </div>
                      
                      <div className="bg-white/70 border-2 border-pink-400 rounded p-3">
                        <p className="text-xs font-bold text-pink-900 mb-1">🌌 2단계: 초대장 페이지</p>
                        <p className="text-xs text-pixel-dark/70">
                          픽셀 밤하늘 배경과 <strong>Canvas 별 파티클</strong>이 춤추는 초대 페이지로 이동합니다.
                        </p>
                      </div>
                      
                      <div className="bg-white/70 border-2 border-purple-400 rounded p-3">
                        <p className="text-xs font-bold text-purple-900 mb-1">🎸 3단계: 기억의 무대 (MEMORY STAGE)</p>
                        <p className="text-xs text-pixel-dark/70">
                          비밀 콘서트장의 조명 아래, <strong>Exclusive Bonus</strong> 보상 카드가 바로 나타납니다. 
                          (Spotlight 효과 + 50개 별 입자)
                        </p>
                      </div>
                      
                      <div className="bg-white/70 border-2 border-orange-400 rounded p-3">
                        <p className="text-xs font-bold text-orange-900 mb-1">🎁 4단계: 특별 보상</p>
                        <p className="text-xs text-pixel-dark/70">
                          극동아시아타이거즈의 <strong>한정 포스터</strong>를 다운로드할 수 있습니다! 
                          (Canvas로 동적 생성)
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-100 to-pink-100 border-2 border-yellow-600 rounded p-4">
                      <p className="text-xs italic text-center text-pixel-dark font-semibold">
                        💫 <strong className="text-purple-700">"너는 이제 관객이 아니라, 이 세계의 일부야."</strong> 💫
                      </p>
                      <p className="text-xs text-center text-pixel-dark/70 mt-2">
                        단순한 수집 완성이 아닌, 진짜 공연에 초대받는 팬의 상징적 체험
                      </p>
                    </div>

                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-600 pl-3 py-2 text-xs">
                      <p><strong>🔧 기술 구현:</strong> Glitch 전환 효과 (RGB shift), Canvas 별 파티클 (requestAnimationFrame), 
                      8bit 무대 조명 애니메이션, 동적 포스터 생성 (Canvas API)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 시크릿 엔딩 = 타이거즈의 초대장 */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 border-4 border-purple-600 rounded-lg p-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🎁</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-purple-900 flex items-center gap-2">
                      시크릿 엔딩 = 극동아시아타이거즈의 초대장
                      <span className="text-base text-yellow-700">✨</span>
                    </h4>
                    <p className="text-sm mb-3 leading-relaxed">
                      <strong className="text-tiger">모든 수집 아이템 (10개+)</strong>과 <strong className="text-sky">메모리 카드 (6개+)</strong>를 수집하면 
                      갤러리에 <strong className="text-yellow-700">반짝이는 초대장 카드</strong>가 나타납니다!
                    </p>
                    <div className="bg-white/70 border-2 border-yellow-500 rounded p-3 mb-3">
                      <p className="text-xs font-bold text-yellow-900 mb-2">🎟 이것이 바로 "극동아시아타이거즈의 초대장"입니다!</p>
                      <p className="text-xs text-pixel-dark/80">
                        초대장 클릭 → 별이 빛나는 초대 페이지 → 한정 포스터 다운로드
                      </p>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-300 rounded p-3 text-xs italic">
                      💡 <strong>힌트:</strong> 갤러리에서 CONGRATULATIONS! 메시지가 보이면 
                      스크롤을 내려 황금빛 초대장을 찾아보세요!
                    </div>
                  </div>
                </div>
              </div>

              {/* 이스터 에그 */}
              <div className="bg-white/70 border-4 border-orange-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🥚</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-orange-900">이스터 에그: 극동아시아타이거즈의 노래 가사</h4>
                    <p className="text-sm mb-3 leading-relaxed">
                      각 씬의 <span className="font-bold text-blue-600 italic">파란색 이탤릭체 텍스트</span>는 
                      밴드 극동아시아타이거즈의 실제 노래 가사와 곡 제목에서 가져온 것들입니다.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎸</span>
                        <span><strong>Scene 1:</strong> "우에이야~" - 대표곡 시작 후렴</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎵</span>
                        <span><strong>Scene 3:</strong> "비 냄새","오늘은 비가 와도 좋을 것같아" - 감성적 가사</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">⭐</span>
                        <span><strong>Scene 5:</strong> "별" - 대표 가사</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 캐릭터 성격 시스템 */}
              <div className="bg-white/70 border-4 border-green-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🐙</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-green-900">극단이의 성격 시스템</h4>
                    <p className="text-sm mb-3 leading-relaxed">
                      플레이어의 선택에 따라 극단이의 성격이 결정됩니다. 
                      왼쪽 하단 "감정 기록"에서 확인할 수 있어요!
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-orange-50 border border-orange-300 rounded p-2 text-center">
                        <div className="text-xl mb-1">🎸</div>
                        <strong>꼼꼼한 극단이</strong>
                        <p className="text-xs opacity-70 mt-1">기타부터 챙김</p>
                      </div>
                      <div className="bg-pink-50 border border-pink-300 rounded p-2 text-center">
                        <div className="text-xl mb-1">🍬</div>
                        <strong>다정한 극단이</strong>
                        <p className="text-xs opacity-70 mt-1">젤리부터 챙김</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-300 rounded p-2 text-center">
                        <div className="text-xl mb-1">🎫</div>
                        <strong>성급한 극단이</strong>
                        <p className="text-xs opacity-70 mt-1">티켓만 들고 출발</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 미니게임 보상 */}
              <div className="bg-white/70 border-4 border-pink-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🎮</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-pink-900">미니게임 보상 시스템</h4>
                    <p className="text-sm mb-3 leading-relaxed">
                      각 미니게임을 <strong className="text-tiger">10점 이상</strong>으로 클리어하면 
                      특별한 "기억 조각"이나 "가사"를 획득할 수 있습니다.
                    </p>
                    <div className="bg-pink-50 border-2 border-pink-300 rounded p-3 text-xs">
                      <p className="mb-2">💎 <strong>수집 가능한 기억:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Scene 1: "흘러가 버린 그때엔 할말이 있었는데..."</li>
                        <li>• Scene 3: "그대를 그리다 오늘 하루가 흘러가고"</li>
                        <li>• Scene 5: "숨겨진 별들이 내별일거야!"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 개발 비화 */}
              <div className="bg-white/70 border-4 border-sky-600 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">🛠️</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3 text-sky-900">개발 비하인드 스토리</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-blue-50 border-l-4 border-blue-600 pl-3 py-2">
                        <p><strong>🐛 가장 오래 걸린 버그:</strong> Scene 1의 선택지가 큰 화면에서만 클릭이 안 되는 문제. 
                        SVG 배경이 z-index 문제로 버튼을 가리고 있었습니다. (해결: ParallaxBackground를 z-index -1로)</p>
                      </div>
                      <div className="bg-purple-50 border-l-4 border-purple-600 pl-3 py-2">
                        <p><strong>🎨 디자인 변경 횟수:</strong> Scene 5의 무대 배경 효과를 3번 이상 수정했습니다. 
                        처음엔 너무 화려해서 텍스트가 안 보였어요!</p>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-600 pl-3 py-2">
                        <p><strong>⚖️ 난이도 조정:</strong> 미니게임 난이도를 5번 조정했습니다. 
                        초기 버전은 너무 어려워서 유저 테스트에서 좌절감을 주었어요.</p>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-3 py-2">
                        <p><strong>🎟 타이거즈의 초대장 개발:</strong> After Credit Scene 아이디어가 떠올랐을 때 
                        "이게 진짜 포트폴리오의 하이라이트가 될 것"이라 확신했습니다. 
                        Canvas 파티클 시스템(150개 별)과 21초 연출 시퀀스를 구현하는데 힘들었지만, 
                        가장 보람찬 작업이었어요^^* 특히 Glitch 전환 효과의 타이밍을 0.1초 단위로 조정하며 
                        "놀람"의 감정을 디자인하는 과정이 인상적이었습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Designer's Note - 더 풍부하게 */}
          <motion.div
            className="backdrop-blur-xl bg-gradient-to-br from-tiger/20 via-sky/20 to-pixel-pink/20 border-4 border-black p-10 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="font-pixel text-2xl text-pixel-dark mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">✨</span> DESIGNER'S NOTE <span className="text-4xl">✨</span>
            </h3>
            <div className="space-y-6 font-sans text-base leading-relaxed text-pixel-dark">
              <p className="text-lg">
                "극단이의 우당탕 모험"은 <strong className="text-tiger">웹 디자인의 가능성을 탐구하는 실험</strong>입니다.
              </p>
              <p>
                이 프로젝트를 시작할 때 가장 중요하게 생각했던 것은 <br/>
                <strong className="text-purple-600"> "어떻게 하면 단순히 정보를 전달하는 것을 넘어, 
                감정을 전달할 수 있을까?"</strong>였습니다.
              </p>
              <p>
                극동아시아타이거즈의 음악은 듣는 사람의 마음을 움직입니다.<br/>
                그들의 가사 한 줄, 멜로디 하나가 누군가에게는 위로가 되고, 
                누군가에게는 용기가 됩니다.<br/> 저는 이러한 <strong className="text-sky">"감정의 여정"</strong>을 
                웹이라는 매체로 표현하고 싶었습니다.
              </p>
              <p>
                픽셀 아트를 선택한 이유는 단순합니다. 
                <strong>제한된 표현 안에서 오히려 더 강렬한 감정을 전달할 수 있다</strong>는 것을 믿었기 때문입니다. 
                마치 8비트 게임들이 단순한 그래픽으로도 수많은 사람들의 마음을 사로잡았던 것처럼요.
              </p>
              <p>
                개발 과정에서 가장 어려웠던 점은 "기술"과 "감성"의 균형이었습니다.<br/> 
                너무 기술적으로만 접근하면 차가운 느낌이 되고, 
                너무 감성적으로만 접근하면 산만해집니다.<br/> 
                <strong className="text-pink-600">유저 테스트를 통해 배경 효과를 3번 이상 수정</strong>했고, 
                <strong className="text-green-600">미니게임 난이도를 5번 조정</strong>했습니다.
              </p>
              <p>
                특히 <strong className="text-yellow-700">"타이거즈의 초대장"</strong>을 개발하는 과정이 가장 의미 있었습니다.<br/>
                150개의 별이 반짝이는 Canvas 파티클 시스템, 21초의 감정적 연출 시퀀스,<br/> 
                그리고 Glitch 전환 효과의 0.1초 타이밍 조정까지...<br/>
                이 모든 것이 <strong className="text-purple-700">"놀람 → 기대 → 감동 → 만족"</strong>이라는 감정 곡선을 디자인하기 위한 것이었습니다. 
                <br/>단순한 엔딩이 아닌, <strong>"관객이 세계의 일부가 되는 순간"</strong>을 만들고 싶었습니다.
              </p>
              <div className="bg-white/60 border-3 border-black rounded-xl p-6 my-6">
                <p className="text-center text-lg font-semibold text-pixel-dark italic">
                  "디자인은 단순히 보기 좋은 것이 아니라,<br/>
                  사용자와 감정적으로 연결되는 경험이어야 합니다."
                </p>
              </div>
              <p>
                이 프로젝트는 완성이 아닌 시작입니다. <br/>
                앞으로도 더 많은 감정, 더 깊은 인터랙션, 더 풍부한 스토리를 담아<br/> 
                웹이 단순한 정보 전달 매체가 아닌 <strong className="text-tiger">"감정을 나누는 공간"</strong>이 될 수 있다는 것을 
                계속 증명해나가고 싶습니다.
              </p>
              <div className="mt-8 pt-6 border-t-2 border-pixel-dark/20">
                <p className="text-right">
                  <span className="text-sm text-pixel-dark/70">
                    극동아시아타이거즈의 팬으로서,<br/>
                    웹 디자이너/개발자로서,<br/>
                    한 사람의 감정을 담아
                  </span>
                </p>
                <p className="font-pixel text-lg text-tiger mt-4 text-right">
                  - 🐙 Designer & Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA - 더 눈에 띄게 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-tiger via-sky to-pixel-pink p-1 rounded-2xl border-4 border-black shadow-2xl inline-block">
            <div className="bg-cream px-12 py-6 rounded-xl">
              <p className="font-sans text-lg text-pixel-dark mb-4 font-bold">
                지금 바로 극단이의 여정을 시작하세요! 🎸
              </p>
              <button
                onClick={() => navigate('/')}
                className="pixel-btn text-base px-8 py-4"
              >
                🏠 START YOUR JOURNEY
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-xs text-pixel-dark/50 font-sans">
            Inspired by 극동아시아타이거즈 | Personal Portfolio Project | Non-commercial Use
          </p>
          <p className="text-xs text-pixel-dark/50 font-sans mt-2">
          🌈 MADE WITH LOVE 💕 BY 극단이 | 💫 쌍방향 사랑이 연결된 세계에서.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BehindTheScene;

