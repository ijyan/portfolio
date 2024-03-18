import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/shared/theme.css.ts';
// import { font } from '@/shared/fonts.css.ts';

/* **************************************** *
 * RESET
 * **************************************** */
// HTML 요소 기본 마진과 패딩 제거
globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
);

// HTML5 display-role reset for older browsers
globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block',
  },
);

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

/* **************************************** *
 * GLOBAL STYLES
 * **************************************** */
export const defaultFontSize = style({
  vars: {
    '--size': '390',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      vars: {
        '--size': '1500',
      },
    },
  },
  fontSize: `clamp(1px, 14px, 10 * 100vw / var(--size))`,
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '6.25%',
  '@media': {
    'screen and (min-width: 2000px)': {
      fontSize: '0.05254860746190225vw',
    },
    'screen and (max-width: 1480px)': {
      fontSize: '0.06756756756756757vw',
    },
    'screen and (max-width: 1023px)': {
      fontSize: '0.09775171065493645vw',
    },
    'screen and (max-width: 860px)': {
      fontSize: '0.13020833333333335vw',
    },
    'screen and (max-width: 540px)': {
      fontSize: '0.26666666666666665vw',
    },
  },
});

globalStyle('body', {
  fontSize: '16rem',
  // fontFamily:
  //   '"Inter", "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  // fontFamily:
  //   '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  fontFamily: 'Pretendard',
  lineHeight: 1.5,
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  overflowX: 'hidden',
  backgroundColor: `${vars.color.background}`,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  background: 'inherit',
  border: 'none',
  boxShadow: 'none',
  borderRadius: 0,
  padding: 0,
  overflow: 'visible',
  cursor: 'pointer',
  fontFamily: 'inherit',
});

globalStyle('.blind', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  clip: 'rect(0, 0, 0, 0)',
  overflow: 'hidden',
});

globalStyle('.container', {
  margin: '0 auto',
  padding: '36rem 62rem',
  width: '100%',
});
