import * as s from '@/widgets/Cursor/ui/Cursor.css.ts';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursorStore } from '@/shared/lib/useCursorStore.ts';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null); // 커서 요소를 위한 ref
  const { hovered } = useCursorStore();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        duration: 0.5,
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
    <div className={`${s.cursor} ${hovered ? 'on' : ''}`} ref={cursorRef} />
  );
}
