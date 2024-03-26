import { useEffect } from 'react';
import { useCursorStore } from './useCursorStore';

export function LinkEventHandler() {
  const { setHovered } = useCursorStore();

  useEffect(() => {
    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    // a 태그, button 태그 선택
    const links = document.querySelectorAll('a, button');

    // 각 요소에 대해 이벤트 리스너 추가
    links.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      links.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [setHovered]);

  return null;
}
