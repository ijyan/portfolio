import * as s from '@/widgets/Project/ui/Project.css.ts';
import { label } from '@/shared/globals.css.ts';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '@/widgets/Project/api/data.ts';

import { ImgBox } from '@/widgets/Project/ui/ImgBox.tsx';

export function Project() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

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
      <div>
        {data.map(item => (
          <div
            className={`${s.projectList} main-grid main-opacity ${hoveredId === item.id ? 'main-opacity-full' : ''}`}
            key={item.id}
            onMouseEnter={() => {
              setHoveredId(item.id);
              setCurrentImg(item.imgUrl);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              setCurrentImg(null);
            }}
          >
            <div className={`${s.projectYear}`}>{item.year}</div>
            <div className={`${s.projectTitleWrap}`}>
              <div className="title">{item.title}</div>
              {/* <div className="tag">{item.tag}</div> */}
            </div>
            <div className={s.projectButtonWrap}>
              {item.link.code && (
                <Link
                  to={item.link.code}
                  target="_blank"
                  className={s.projectLink}
                >
                  (<span className={s.projectLinkText}>CODE</span>)
                </Link>
              )}
              {item.link.notion && (
                <Link
                  to={item.link.notion}
                  target="_blank"
                  className={s.projectLink}
                >
                  (<span className={s.projectLinkText}>NOTION</span>)
                </Link>
              )}
            </div>
            <div className={s.projectLaunch}>
              {item.link.launch && (
                <Link to={item.link.launch} target="_blank">
                  Launch
                  <div className={s.projectLaunchIco}>
                    <span />
                    <img src="/images/ico_arrowLaunch.svg" alt="" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <ImgBox imgUrl={currentImg} hover={hoveredId} />
    </section>
  );
}
