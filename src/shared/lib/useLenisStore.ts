import { create } from 'zustand';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface ILenisStore {
  lenis: Lenis | null;
  initializeLenis: () => void;
}

export const useLenisStore = create<ILenisStore>(set => ({
  lenis: null,
  initializeLenis: () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.07,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    set({ lenis });
  },
}));
