import * as s from '@/widgets/Project/ui/Project.css.ts';
import { label } from '@/shared/globals.css.ts';
import { IProduct } from '@/widgets/Project/api/types.ts';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { useCursorStore } from '@/shared/lib/useCursorStore.ts';

// import { useNavigate } from 'react-router-dom';

export function Project() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { setHovered } = useCursorStore();

  const data: IProduct[] = [
    {
      id: 1,
      year: '//24',
      title: 'Grow Green',
      tag: 'React ㆍ Typescript',
      link: {
        code: '#',
        launch: '',
      },
    },
    {
      id: 2,
      year: '//24',
      title: 'Grow Green',
      tag: 'React ㆍ Typescript',
      link: {
        code: '#',
        launch: '',
      },
    },
  ];

  useEffect(() => {
    if (hoveredId) {
      gsap.to(document.documentElement, {
        '--mainOpacity': 0.03,
      });
    } else {
      gsap.to(document.documentElement, {
        '--mainOpacity': 1,
      });
    }
  }, [hoveredId]);

  return (
    <section className={`${s.project} container`}>
      <div className={`${label} main-opacity`}>
        Projects
        <img src="/images/ico_arrowCurved.svg" alt="화살표" />
      </div>
      {data.map(item => (
        <div
          className={`${s.projectList} main-grid main-opacity ${hoveredId === item.id ? 'main-opacity-full' : ''}`}
          key={item.id}
          onMouseEnter={() => {
            setHoveredId(item.id);
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHoveredId(null);
            setHovered(false);
          }}
        >
          <div className={`${s.projectYear}`}>{item.year}</div>
          <div className={`${s.projectTitleWrap}`}>
            <div className="title">{item.title}</div>
            <div className="tag">{item.tag}</div>
          </div>
          <div className={s.projectButtonWrap}>
            <button
              type="button"
              className={s.projectButtonLink}
              onClick={() => window.open(item.link.code, '_blank')}
            >
              (<span className={s.projectButtonText}>CODE</span>)
            </button>
            <button
              type="button"
              className={s.projectButtonLink}
              onClick={() => window.open(item.link.launch, '_blank')}
            >
              (<span className={s.projectButtonText}>LINK</span>)
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
