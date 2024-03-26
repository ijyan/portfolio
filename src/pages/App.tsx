import { Header } from '@/widgets/Header';
import { Intro } from '@/widgets/Intro/ui/Intro.tsx';
import { Project } from '@/widgets/Project';
import { Cursor } from '@/widgets/Cursor';
import { About } from '@/widgets/About';
import LinkEventHandler from '@/shared/lib/LinkEventHandler.ts';
import { useLenisStore } from '@/shared/lib/useLenisStore.ts';
import { useEffect } from 'react';

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
