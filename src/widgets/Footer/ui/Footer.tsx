import * as s from '@/widgets/Footer/ui/Footer.css.ts';
import { label } from '@/shared/globals.css.ts';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <section className={`${s.footer} container main-opacity`}>
      <div className="main-grid">
        <div className={s.contact}>
          <div className="blind">연락</div>
          <div className={`${label}`}>
            Contact
            <img src="/images/ico_arrowCurved.svg" alt="" />
          </div>
          <div>
            <Link to="#" className={s.textLink}>
              <img src="/images/ico_arrow.svg" alt="" />
              <div>
                Mail
                <span>kjian900@gmail.com</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="#" className={s.textLink}>
              <img src="/images/ico_arrow.svg" alt="" />
              <div>Phone</div>
              <span>010-2651-8065</span>
            </Link>
          </div>
          <div>
            <Link to="#" className={s.textLink} target="_blank">
              <img src="/images/ico_arrow.svg" alt="" />
              <div>Notion</div>
            </Link>
          </div>
          <div>
            <Link to="#" className={s.textLink} target="_blank">
              <img src="/images/ico_arrow.svg" alt="" />
              <div>
                Github
                <span>@ijyan</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={s.about}>
          <div className="blind">소개</div>
          <div className={`${label}`}>
            About
            <img src="/images/ico_arrowCurved.svg" alt="" />
          </div>
          <div className={s.desc}>
            <p>
              안녕하세요! 꾸준히 성장하는 김지안 입니다. 새로운 것에 관심이
              많으며 빠르게 도전하고 실행합니다. 부족한 부분을 알고 보완하기
              위해 인프런, 유데미 등 강의를 통해 학습하고 노력하는 과정을
              중요시하고, 그러한 과정을 즐기고 좋아합니다.
            </p>
            <p>
              맡은 프로젝트의 목적을 우선적으로 고려하며, 함께 할 동료들과의
              원활한 협업을 중요하게 생각합니다. 서로의 생각과 의도를 이해하고
              얘기를 나누며 결과물을 만들어 냅니다.
            </p>
            <p>
              다방면에서 사용자를 고려하고 개선점을 고민하고, 사용자의 요구를
              충족시키는 서비스를 구현하고 싶습니다. 디자인과 개발, 두 분야의
              경험을 바탕으로 서비스를 극대화 하고, 팀과 회사의 목표 달성에
              기여하는 것이 저의 목표입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
