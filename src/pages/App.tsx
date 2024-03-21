// import reactLogo from '../assets/react.svg';
// eslint-disable-next-line
// import viteLogo from '/vite.svg';
// import './App.css';
import { Header } from '@/widgets/Header';
import { Intro } from '@/widgets/Intro/ui/Intro.tsx';
import { Project } from '@/widgets/Project';
import { Cursor } from '@/widgets/Cursor';
import { Footer } from '@/widgets/Footer';
// import { useEffect } from 'react';
// import smooth from '@/shared/smooth.ts';

function App() {
  // useEffect(() => {
  //   smooth();
  // }, []);

  return (
    <>
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
