import Lenis from '@studio-freight/lenis';

const smooth = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  //
  // lenis.on('scroll', () => {
  //   // console.log(e);
  // });
};

export default smooth;
