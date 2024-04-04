import * as s from '@/widgets/Intro/ui/Intro.css.ts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const introImgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introImgWrapRef.current,
        start: 'top 0%',
        end: 'bottom top',
        scrub: true,
        // markers: true,
      },
    });

    tl.to(introImgWrapRef.current, {
      x: '-30%',
    });

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
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
