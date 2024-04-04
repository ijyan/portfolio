import * as s from '@/widgets/Project/ui/Project.css.ts';
import { label } from '@/shared/globals.css.ts';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '@/widgets/Project/api/data.ts';
import { IProduct } from '@/widgets/Project/api/types.ts';

export function Project() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [launch, setLaunch] = useState<string>('');

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

  const handleMouseEnter = (item: IProduct) => {
    setHoveredId(item.id);
    if (item.link.launch) {
      setLaunch(item.link.launch);
    } else {
      setLaunch('');
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setLaunch('');
  };

  return (
    <section id="project" className={`${s.project} container`}>
      <div className="blind">프로젝트</div>
      <div className="main-opacity">
        <div className={`${label}`}>
          Projects
          <img src="/images/ico_arrowCurved.svg" alt="" />
        </div>
      </div>
      <div className="project-list">
        {data.map(item => (
          <div
            className={`${s.projectList} main-grid main-opacity ${hoveredId === item.id ? 'main-opacity-full' : ''}`}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className={`${s.projectYear}`}>{item.year}</div>
            <div className={`${s.projectTitleWrap}`}>
              <div className="title">{item.title}</div>
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
      <div className="project-preview">
        {data.map((item, idx) => (
          <div className={`${s.preview} ${hoveredId === idx + 1 ? 'on' : ''}`}>
            <img className={`${s.previewImg}`} src={item.imgUrl} alt="" />
          </div>
        ))}
        {launch && (
          <Link
            to={launch}
            target="_blank"
            className={`${s.previewLaunch} ${hoveredId ? 'on' : ''}`}
          >
            <span>Launch</span>
            <img src="/images/ico_arrowLaunch.svg" alt="" />
          </Link>
        )}
      </div>
    </section>
  );
}
