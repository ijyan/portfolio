import * as s from '@/widgets/Intro/ui/Intro.css.ts';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function Intro() {
  const introImgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScrollTrigger = async () => {
      // ScrollTrigger 모듈 비동기 처리
      const ScrollTrigger = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introImgWrapRef.current,
          start: () => 'clamp(top 50%)',
          end: () => 'bottom top',
          scrub: true,
        },
      });

      tl.to(introImgWrapRef.current, {
        duration: 1,
        x: '-30%',
        ease: 'linear',
      });
    };

    loadScrollTrigger();
  }, []);

  return (
    <section className={`${s.intro} main-opacity`}>
      <div className={s.introImgWrap} ref={introImgWrapRef}>
        <img className={s.introImg} src="/images/name.svg" alt="" />
        <img className={s.introImg} src="/images/name.svg" alt="" />
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
