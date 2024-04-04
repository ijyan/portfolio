import * as s from '@/widgets/Intro/ui/Intro.css.ts';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function Intro() {
  const introImgWrapRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imgElement = imgRef.current;

    const onImageLoaded = () => {
      // 이미지 로딩 완료 후 ScrollTrigger 설정
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          markers: true,
        },
      });

      tl.to(introImgWrapRef.current, {
        duration: 1,
        xPercent: -30,
        ease: 'linear',
      });
      ScrollTrigger.refresh();
    };

    if (imgElement && imgElement.complete) {
      // 이미지가 로드되었다면
      onImageLoaded();
    } else {
      imgElement?.addEventListener('load', onImageLoaded);
    }

    // 클린업 함수에서는 이전에 복사한 변수를 사용하여 이벤트 리스너를 제거
    return () => {
      imgElement?.removeEventListener('load', onImageLoaded);
    };
  }, []);

  return (
    <section className={`${s.intro} main-opacity`} ref={introRef}>
      <div className={s.introImgWrap} ref={introImgWrapRef}>
        <img
          className={s.introImg}
          ref={imgRef}
          src="/images/name.svg"
          alt=""
        />
      </div>
      <div className="main-grid container">
        <div className={s.introDesc}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          '배움에는 끝이 없다.' 인생의 슬로건을 기반으로 끊임없이 탐구하고
          습득하겠습니다. 좋아하는 일을 위해 정체되어 있지 않고 더 발전하기 위해
          항상 노력하고자 합니다.
        </div>
      </div>
    </section>
  );
}
