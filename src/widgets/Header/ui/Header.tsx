import * as s from '@/widgets/Header/ui/Header.css.ts';
import { useLenisStore } from '@/shared/lib';

export function Header() {
  const { lenis } = useLenisStore();

  const scrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    const offset = 80;
    if (target && lenis) {
      lenis.scrollTo(target.offsetTop - offset, { duration: 2 });
    }
  };
  return (
    <header className={`${s.header} container`}>
      <div className={s.headerLogo}>
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="12" fill="#2B2B2B" stroke="white" />
          <path
            d="M20.75 15C20.75 18.391 20.0617 21.4362 18.9722 23.6152C17.8678 25.8241 16.4345 27 15 27C13.5655 27 12.1322 25.8241 11.0278 23.6152C9.9383 21.4362 9.25 18.391 9.25 15C9.25 11.609 9.9383 8.56377 11.0278 6.38477C12.1322 4.17587 13.5655 3 15 3C16.4345 3 17.8678 4.17587 18.9722 6.38477C20.0617 8.56377 20.75 11.609 20.75 15Z"
            stroke="white"
          />
          <rect x="3.5" y="14.5" width="23" height="1" fill="white" />
          <rect x="4.5" y="8.5" width="21" height="1" fill="white" />
          <rect x="4.5" y="20.5" width="21" height="1" fill="white" />
        </svg>
        <div className={s.headerLogoMaker}>
          <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="6" fill="#2B2B2B" stroke="white" />
            <path
              d="M13.6034 11.9V14.5816H13.6237L16.4408 11.9H17.5188L15.1085 14.1925L17.59 17.5H16.573L14.539 14.6746L13.6034 15.5713V17.5H12.8V11.9H13.6034Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={s.headerLinkWrap}>
        <button
          type="button"
          className={s.headerLink}
          onClick={() => scrollToTarget('project')}
        >
          (<span className={s.headerLinkText}>PRJ</span>)
        </button>
        <button
          type="button"
          className={s.headerLink}
          onClick={() => scrollToTarget('about')}
        >
          (<span className={s.headerLinkText}>ABT</span>)
        </button>
      </div>
    </header>
  );
}
