import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { storyData, CollectibleItem } from '../data/scenes';

interface MemoryCard {
  sceneId: string;
  title: string;
  description: string;
  timestamp: number;
}

interface MiniGameResult {
  sceneId: string;
  gameName: string;
  score: number;
  timestamp: number;
}

interface SceneStore {
  // 기본 상태
  currentSceneId: string;
  visitedScenes: string[];
  
  // 수집 시스템
  collectedItems: CollectibleItem[];
  memoryCards: MemoryCard[];
  
  // 감정 기록
  emotionalChoices: string[];
  personality: 'careful' | 'hasty' | 'kind' | null;
  
  // 미니게임 결과
  miniGameResults: MiniGameResult[];
  
  // 액션
  goToScene: (sceneId: string) => void;
  collectItem: (item: CollectibleItem) => void;
  addMemoryCard: (card: MemoryCard) => void;
  recordEmotion: (emotion: string) => void;
  setPersonality: (personality: 'careful' | 'hasty' | 'kind') => void;
  addMiniGameResult: (result: MiniGameResult) => void;
  resetGame: () => void;
  getCurrentScene: () => any;
  
  // 도전 과제
  hasCollectedAllItems: () => boolean;
  canAccessSecretEnding: () => boolean;
  getProgress: () => number;
}

export const useSceneStore = create<SceneStore>()(
  persist(
    (set, get) => ({
      // 초기 상태
      currentSceneId: 'scene1',
      visitedScenes: ['scene1'],
      collectedItems: [],
      memoryCards: [],
      emotionalChoices: [],
      personality: null,
      miniGameResults: [],

      // 씬 이동
      goToScene: (sceneId: string) => {
        const scene = storyData.scenes[sceneId];
        
        // 메모리 카드 자동 추가
        if (scene?.memoryCard) {
          get().addMemoryCard({
            sceneId: sceneId,
            title: scene.memoryCard.title,
            description: scene.memoryCard.description,
            timestamp: Date.now()
          });
        }
        
        set((state) => {
          const newVisited = state.visitedScenes.includes(sceneId) 
            ? state.visitedScenes 
            : [...state.visitedScenes, sceneId];
          
          return {
            currentSceneId: sceneId,
            visitedScenes: newVisited
          };
        });

        // Scene 6 완료 후 갤러리로 이동 (타이거즈의 초대장 확인)
        // 더 이상 자동으로 secret_ending 씬으로 가지 않음
        // 대신 사용자가 갤러리에서 초대장을 발견하도록 함
      },

      // 아이템 수집
      collectItem: (item: CollectibleItem) => {
        set((state) => {
          const alreadyCollected = state.collectedItems.some(i => i.id === item.id);
          if (alreadyCollected) return state;
          
          return {
            collectedItems: [...state.collectedItems, item]
          };
        });
      },

      // 추억 카드 추가
      addMemoryCard: (card: MemoryCard) => {
        set((state) => {
          const alreadyHave = state.memoryCards.some(c => c.sceneId === card.sceneId);
          if (alreadyHave) return state;
          
          return {
            memoryCards: [...state.memoryCards, card]
          };
        });
      },

      // 감정 기록
      recordEmotion: (emotion: string) => {
        set((state) => ({
          emotionalChoices: [...state.emotionalChoices, emotion]
        }));
      },

      // 성격 설정
      setPersonality: (personality: 'careful' | 'hasty' | 'kind') => {
        set({ personality });
      },

      // 미니게임 결과 추가
      addMiniGameResult: (result: MiniGameResult) => {
        set((state) => ({
          miniGameResults: [...state.miniGameResults, result]
        }));
      },

      // 게임 리셋
      resetGame: () => {
        set({
          currentSceneId: 'scene1',
          visitedScenes: ['scene1'],
          collectedItems: [],
          memoryCards: [],
          emotionalChoices: [],
          personality: null,
          miniGameResults: []
        });
      },

      // 현재 씬 가져오기
      getCurrentScene: () => {
        const { currentSceneId } = get();
        return storyData.scenes[currentSceneId];
      },

      // 모든 아이템 수집 여부
      hasCollectedAllItems: () => {
        const { collectedItems } = get();
        // 총 수집 가능 아이템 수
        const totalItems = Object.values(storyData.scenes)
          .flatMap(scene => scene.collectibles || [])
          .length;
        
        return collectedItems.length >= totalItems;
      },

      // 숨은 엔딩 접근 가능 여부
      canAccessSecretEnding: () => {
        const { collectedItems, memoryCards } = get();
        return collectedItems.length >= 10 && memoryCards.length >= 6;
      },

      // 진행도 계산
      getProgress: () => {
        const scene = get().getCurrentScene();
        return scene?.progressPercent || 0;
      }
    }),
    {
      name: 'tiger-octo-game-storage', // localStorage key
      partialize: (state) => ({
        // 저장할 상태만 선택
        collectedItems: state.collectedItems,
        memoryCards: state.memoryCards,
        visitedScenes: state.visitedScenes
      })
    }
  )
);

