// import reactLogo from '../assets/react.svg';
// eslint-disable-next-line
// import viteLogo from '/vite.svg';
// import './App.css';
import { Header } from '@/widgets/Header';
import { Intro } from '@/widgets/Intro/ui/Intro.tsx';
import { Project } from '@/widgets/Project';
import { Cursor } from '@/widgets/Cursor';
import { Footer } from '@/widgets/Footer';
import LinkEventHandler from '@/shared/lib/LinkEventHandler.ts';
// import { useEffect } from 'react';
// import smooth from '@/shared/smooth.ts';

function App() {
  // useEffect(() => {
  //   smooth();
  // }, []);

  return (
    <>
      <LinkEventHandler />
      <Header />
      <main>
        <Intro />
        <Project />
        <Footer />
      </main>
      <Cursor />
    </>
  );
}

export default App;
