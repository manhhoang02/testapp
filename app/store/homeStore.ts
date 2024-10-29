import {create} from 'zustand';

type HomeStore = {
  currentFeedId: number;
  setCurrentFeedId: (value: number) => void;
};

export const useHomeStore = create<HomeStore>(set => ({
  currentFeedId: 0,
  setCurrentFeedId: value => set({currentFeedId: value}),
}));
