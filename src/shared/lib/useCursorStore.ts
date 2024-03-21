import { create } from 'zustand';

interface IProp {
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
}

export const useCursorStore = create<IProp>(set => ({
  hovered: false,
  setHovered: hovered => set({ hovered }),
}));
