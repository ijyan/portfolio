import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Header } from '@/widgets/Header';
import { Intro } from '@/widgets/Intro/ui/Intro.tsx';
import { Project } from '@/widgets/Project';
import { Cursor } from '@/widgets/Cursor';
import { About } from '@/widgets/About';
import { LinkEventHandler, useLenisStore } from '@/shared/lib';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { initializeLenis } = useLenisStore();

  useEffect(() => {
    initializeLenis();
  }, [initializeLenis]);

  return (
    <>
      <LinkEventHandler />
      <Header />
      <main>
        <Intro />
        <Project />
        <About />
      </main>
      <Cursor />
    </>
  );
}

export default App;
