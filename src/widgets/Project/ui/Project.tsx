import * as s from '@/widgets/Project/ui/Project.css.ts';
import { label } from '@/shared/globals.css.ts';
import { IProduct } from '@/widgets/Project/api/types.ts';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Project() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <section id="project" className={`${s.project} container`}>
      <div className="blind">프로젝트</div>
      <div className="main-opacity">
        <div className={`${label}`}>
          Projects
          <img src="/images/ico_arrowCurved.svg" alt="" />
        </div>
      </div>
      {data.map(item => (
        <div
          className={`${s.projectList} main-grid main-opacity ${hoveredId === item.id ? 'main-opacity-full' : ''}`}
          key={item.id}
          onMouseEnter={() => {
            setHoveredId(item.id);
          }}
          onMouseLeave={() => {
            setHoveredId(null);
          }}
        >
          <div className={`${s.projectYear}`}>{item.year}</div>
          <div className={`${s.projectTitleWrap}`}>
            <div className="title">{item.title}</div>
            <div className="tag">{item.tag}</div>
          </div>
          <div className={s.projectButtonWrap}>
            <Link to={item.link.code} target="_blank" className={s.projectLink}>
              (<span className={s.projectLinkText}>CODE</span>)
            </Link>
            <Link
              to={item.link.launch}
              target="_blank"
              className={s.projectLink}
            >
              (<span className={s.projectLinkText}>LINK</span>)
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
