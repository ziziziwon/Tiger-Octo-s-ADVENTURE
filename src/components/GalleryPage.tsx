import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSceneStore } from '../store/useSceneStore';
import { useMemoryStore } from '../store/memoryStore';
import InviteCard from './InviteCard';

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const memoryCards = useSceneStore((state) => state.memoryCards);
  const collectedItems = useSceneStore((state) => state.collectedItems);
  const miniGameResults = useSceneStore((state) => state.miniGameResults);
  const memories = useMemoryStore((state) => state.memories);
  const canAccessSecretEnding = useSceneStore((state) => state.canAccessSecretEnding());

  // 각 게임 타입별로 최고 점수만 선택
  const uniqueGameResults = React.useMemo(() => {
    const gameMap = new Map();
    
    miniGameResults.forEach((result) => {
      const existing = gameMap.get(result.gameName);
      if (!existing || result.score > existing.score) {
        gameMap.set(result.gameName, result);
      }
    });
    
    return Array.from(gameMap.values()).sort((a, b) => {
      const order = ['itemCatch', 'rainMemory', 'starCatcher'];
      return order.indexOf(a.gameName) - order.indexOf(b.gameName);
    });
  }, [miniGameResults]);

  const handleBack = () => {
    navigate('/game');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 pixel-grid relative overflow-y-auto py-12 px-4">
      {/* 헤더 */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={handleBack}
            className="pixel-btn text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← BACK
          </motion.button>
          
          <motion.h1
            className="font-pixel text-2xl md:text-3xl text-tiger pixel-text-shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            MEMORY GALLERY
          </motion.h1>

          <motion.button
            onClick={handleHome}
            className="px-4 py-2 bg-white/90 border-2 border-black font-sans font-semibold hover:bg-white transition-colors rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🏠 HOME
          </motion.button>
        </div>

        {/* 통계 - 컴팩트 */}
        <motion.div
          className="bg-cream border-3 border-black p-4 rounded-lg shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-pixel text-sm text-pixel-dark mb-3 text-center">YOUR JOURNEY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-sans">
            <div className="text-center bg-white border-2 border-black rounded p-3">
              <div className="text-2xl mb-1">✨</div>
              <div className="text-xl font-bold text-tiger">{memories.length}</div>
              <div className="text-xs text-pixel-dark font-semibold">기억 조각</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded p-3">
              <div className="text-2xl mb-1">📦</div>
              <div className="text-xl font-bold text-sky">{collectedItems.length}</div>
              <div className="text-xs text-pixel-dark font-semibold">아이템</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded p-3">
              <div className="text-2xl mb-1">🎮</div>
              <div className="text-xl font-bold text-purple-600">{miniGameResults.length}</div>
              <div className="text-xs text-pixel-dark font-semibold">게임 플레이</div>
            </div>
            <div className="text-center bg-white border-2 border-black rounded p-3">
              <div className="text-2xl mb-1">{canAccessSecretEnding ? '🏆' : '⭐'}</div>
              <div className="text-base font-bold text-green-600">{canAccessSecretEnding ? 'Complete!' : 'Playing'}</div>
              <div className="text-xs text-pixel-dark font-semibold">상태</div>
            </div>
          </div>
        </motion.div>

        {/* 추억 카드 그리드 */}
        <div className="mb-6">
          <h2 className="font-pixel text-sm text-pixel-dark mb-3">MEMORY CARDS</h2>
          {memoryCards.length === 0 ? (
            <motion.div
              className="bg-white/60 border-4 border-black p-12 rounded-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-sans text-lg text-pixel-dark/70">
                아직 수집한 추억이 없어요. 모험을 시작해보세요! 🎮
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {memoryCards.map((card, index) => (
                <motion.div
                  key={card.sceneId}
                  className="bg-white/90 border-4 border-black p-4 rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <div className="text-4xl mb-3 text-center">
                    {index === 0 && '🌅'}
                    {index === 1 && '🤝'}
                    {index === 2 && '🌧️'}
                    {index === 3 && '😱'}
                    {index === 4 && '😌'}
                    {index === 5 && '🎸'}
                    {index > 5 && '✨'}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-pixel-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-pixel-dark/70 mb-3">
                    {card.description}
                  </p>
                  <p className="font-sans text-xs text-pixel-dark/50">
                    {new Date(card.timestamp).toLocaleString('ko-KR', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 기억 조각 (Memories from Memory Store) */}
        <div className="mb-6">
          <h2 className="font-pixel text-sm text-pixel-dark mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>모아진 기억</span>
          </h2>
          {memories.length === 0 ? (
            <motion.div
              className="bg-cream border-3 border-black p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-sans text-sm text-pixel-dark">
                아직 기억을 찾지 못했어요. 미니게임을 클리어해보세요! 🎮
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {memories.map((memory, index) => (
                <motion.div
                  key={memory.id}
                  className="bg-cream border-3 border-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  {/* 타입 아이콘 - 컴팩트 */}
                  <div className="flex items-center gap-2 mb-3 bg-white border-2 border-black rounded p-2">
                    <span className="text-2xl">
                      {memory.type === 'lyric' ? '🎵' : 
                       memory.type === 'thought' ? '💭' : '✨'}
                    </span>
                    <div className="flex-1">
                      <p className="font-pixel text-[8px] text-pixel-dark">
                        {memory.type === 'lyric' ? 'LYRIC' : 
                         memory.type === 'thought' ? 'THOUGHT' : 'MEMORY'}
                      </p>
                      <p className="font-sans text-[10px] text-pixel-dark/70">
                        {new Date(memory.timestamp).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  {/* 기억 텍스트 - 축소 */}
                  <div className="bg-white border-2 border-black rounded p-3">
                    <p className="font-sans text-sm text-[#6B9BD1] italic leading-snug line-clamp-3">
                      "{memory.text}"
                    </p>
                  </div>

                  {/* 씬 정보 - 축소 */}
                  <div className="mt-2 pt-2 border-t border-black/20">
                    <p className="font-sans text-[10px] text-pixel-dark/70">
                      📍 {memory.sceneId}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 미니게임 결과 */}
        <div className="mb-6">
          <h2 className="font-pixel text-sm text-pixel-dark mb-3 flex items-center gap-2">
            <span>🎮</span>
            <span>게임 결과</span>
          </h2>
          {miniGameResults.length === 0 ? (
            <motion.div
              className="bg-cream border-3 border-black p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-sans text-sm text-pixel-dark">
                아직 미니게임을 플레이하지 않았어요! 🕹️
              </p>
            </motion.div>
          ) : (
            <div className="bg-cream border-3 border-black p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {uniqueGameResults.map((result, index) => (
                  <motion.div
                    key={`${result.sceneId}-${result.timestamp}`}
                    className="bg-white border-2 border-black p-3 rounded"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {/* 게임 타입 */}
                    <div className="text-center mb-2">
                      <span className="text-3xl">
                        {result.gameName === 'itemCatch' ? '📦' :
                         result.gameName === 'rainMemory' ? '💧' :
                         result.gameName === 'starCatcher' ? '⭐' : '🎮'}
                      </span>
                    </div>

                    {/* 게임 이름 */}
                    <h3 className="font-pixel text-[8px] text-center text-pixel-dark mb-2">
                      {result.gameName === 'itemCatch' ? '짐 챙기기' :
                       result.gameName === 'rainMemory' ? '빗방울 기억' :
                       result.gameName === 'starCatcher' ? '별 수집기' : result.gameName}
                    </h3>

                    {/* 점수 */}
                    <div className="bg-gradient-to-r from-tiger to-orange-400 border-2 border-black rounded p-2 mb-2">
                      <p className="text-center font-pixel text-xl text-white">
                        {result.score}
                      </p>
                      <p className="text-center font-sans text-[9px] text-white/80">
                        SCORE
                      </p>
                    </div>

                    {/* 평가 */}
                    <div className="text-center mb-1">
                      <span className="font-sans text-[10px] font-semibold">
                        {result.score >= 100 ? '🏆 PERFECT!' :
                         result.score >= 50 ? '⭐ GREAT!' :
                         result.score >= 30 ? '✨ GOOD!' : '💪 TRY AGAIN!'}
                      </span>
                    </div>

                    {/* 시간 */}
                    <p className="font-sans text-[9px] text-pixel-dark/50 text-center">
                      {new Date(result.timestamp).toLocaleString('ko-KR', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* 전체 통계 - 컴팩트 */}
              <div className="pt-3 border-t-2 border-black">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center bg-white border-2 border-black rounded p-2">
                    <p className="font-pixel text-[8px] text-pixel-dark mb-1">TOTAL</p>
                    <p className="font-pixel text-lg text-tiger">{miniGameResults.length}</p>
                  </div>
                  <div className="text-center bg-white border-2 border-black rounded p-2">
                    <p className="font-pixel text-[8px] text-pixel-dark mb-1">AVG</p>
                    <p className="font-pixel text-lg text-sky">
                      {Math.round(miniGameResults.reduce((sum, r) => sum + r.score, 0) / miniGameResults.length)}
                    </p>
                  </div>
                  <div className="text-center bg-white border-2 border-black rounded p-2">
                    <p className="font-pixel text-[8px] text-pixel-dark mb-1">BEST</p>
                    <p className="font-pixel text-lg text-green-600">
                      {Math.max(...miniGameResults.map(r => r.score))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 수집 아이템 */}
        <div className="mb-6">
          <h2 className="font-pixel text-sm text-pixel-dark mb-3 flex items-center gap-2">
            <span>📦</span>
            <span>수집한 아이템</span>
          </h2>
          {collectedItems.length === 0 ? (
            <motion.div
              className="bg-cream border-4 border-black p-12 rounded-xl text-center shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-sans text-lg text-pixel-dark">
                아이템을 찾아보세요! 🔍
              </p>
            </motion.div>
          ) : (
            <div className="bg-cream border-4 border-black p-6 rounded-xl shadow-2xl">
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {collectedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="text-center bg-white border-2 border-black rounded-lg p-3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                  >
                    <div className="text-5xl mb-2">{item.emoji}</div>
                    <p className="font-sans text-xs text-pixel-dark font-bold">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 숨은 엔딩 힌트 */}
        {!canAccessSecretEnding && collectedItems.length > 0 && (
          <motion.div
            className="bg-tiger/20 border-4 border-tiger p-6 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-sans text-lg text-pixel-dark mb-2">
              ✨ 숨겨진 이야기가 있어요!
            </p>
            <p className="font-sans text-sm text-pixel-dark/70">
              모든 아이템과 추억을 수집하면 특별한 엔딩을 볼 수 있어요.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <span>아이템: {collectedItems.length}/10+</span>
              <span>추억: {memoryCards.length}/6+</span>
            </div>
          </motion.div>
        )}

        {/* 완료 메시지 + 초대장 */}
        {canAccessSecretEnding && (
          <motion.div
            className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 border-4 border-black p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-pixel text-xl text-pixel-dark mb-3">
              CONGRATULATIONS!
            </h3>
            <p className="font-sans text-lg text-pixel-dark mb-4">
              모든 추억을 모았어요! 숨겨진 초대장을 확인해보세요! 🌟
            </p>
            
            {/* 초대장 카드 */}
            <div className="max-w-xs mx-auto mb-4">
              <InviteCard />
            </div>

            <motion.button
              onClick={handleBack}
              className="pixel-btn text-sm mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTINUE JOURNEY
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;

