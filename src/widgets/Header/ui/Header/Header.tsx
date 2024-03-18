import * as s from '@/widgets/Header/ui/Header/Header.css.ts';

export function Header() {
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
              d="M13.7628 17.5H12.8028V11.9H15.5388C16.6028 11.9 17.3388 12.548 17.3388 13.484C17.3388 14.172 16.8508 14.74 16.1068 14.932C16.4748 15.004 16.7388 15.228 16.8748 15.572L17.5948 17.5H16.5708L15.9228 15.732C15.8428 15.508 15.6588 15.388 15.4028 15.388H13.7628V17.5ZM13.7628 12.764V14.54H15.4908C16.0828 14.54 16.3868 14.116 16.3868 13.628C16.3868 13.116 16.0348 12.764 15.4908 12.764H13.7628Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={s.headerLinkWrap}>
        <button type="button" className={s.headerLink}>
          (<span className={s.headerLinkText}>PRJ</span>)
        </button>
        <button type="button" className={s.headerLink}>
          (<span className={s.headerLinkText}>ABT</span>)
        </button>
        <button type="button" className={s.headerLink}>
          (<span className={s.headerLinkText}>MSG</span>)
        </button>
      </div>
    </header>
  );
}
