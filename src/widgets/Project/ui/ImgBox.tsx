import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as s from './ImgBox.css.ts';

export function ImgBox({
  imgUrl,
  hover,
}: {
  imgUrl: string | null;
  hover: number | null;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        duration: 1.2,
        top: e.clientY,
        left: e.clientX,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className={`${s.preview} ${hover ? 'on' : ''}`} ref={cursorRef}>
      <div
        className={s.privewImg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
    </div>
  );
}
