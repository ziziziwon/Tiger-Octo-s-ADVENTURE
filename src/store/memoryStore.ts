import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Memory {
  id: string;
  text: string;
  sceneId: string;
  type: 'lyric' | 'thought' | 'memory';
  timestamp: number;
}

interface MemoryState {
  memories: Memory[];
  addMemory: (memory: Memory) => void;
  hasMemory: (id: string) => boolean;
  getMemoryCount: () => number;
  canAccessSecretEnding: () => boolean;
  resetMemories: () => void;
}

export const useMemoryStore = create<MemoryState>()(
  persist(
    (set, get) => ({
      memories: [],

      addMemory: (memory: Memory) => {
        set((state) => {
          // 중복 체크
          if (state.memories.some(m => m.id === memory.id)) {
            return state;
          }
          return {
            memories: [...state.memories, memory]
          };
        });
      },

      hasMemory: (id: string) => {
        return get().memories.some(m => m.id === id);
      },

      getMemoryCount: () => {
        return get().memories.length;
      },

      canAccessSecretEnding: () => {
        return get().memories.length >= 3; // 3개 이상이면 비밀 엔딩
      },

      resetMemories: () => {
        set({ memories: [] });
      }
    }),
    {
      name: 'memory-storage'
    }
  )
);

