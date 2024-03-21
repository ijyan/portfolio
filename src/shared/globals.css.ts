import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/shared/theme.css.ts';

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
globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  vars: {
    '--size': '390',
    '--mainOpacity': '1',
  },
  '@media': {
    'screen and (min-width: 860px)': {
      vars: {
        '--size': '1500',
        '--mainOpacity': '1',
      },
    },
  },
  fontSize: `clamp(1px, 14px, 10 * 100vw / var(--size))`,
  scrollBehavior: 'smooth',
  backgroundColor: `${vars.color.background}`,
});

globalStyle('body', {
  fontSize: '1.4rem',
  '@media': {
    'screen and (min-width: 860px)': {
      fontSize: '1.6rem',
    },
  },
  fontFamily:
    '"Manrope", "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  lineHeight: 1.5,
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  overflowX: 'hidden',
  WebkitFontSmoothing: 'antialiased',
  color: '#fff',
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
  paddingInline: '2.4rem',
  '@media': {
    'screen and (min-width: 860px)': {
      paddingInline: '4.8rem',
    },
  },
});

globalStyle('.main-grid', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
  gridColumnGap: '2rem',

  '@media': {
    'screen and (min-width: 860px)': {
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gridColumnGap: '4.8rem',
    },
  },
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  opacity: 0.5,
  gap: '0.8rem',
  fontSize: '1.4rem',
  fontWeight: 600,
  '@media': {
    'screen and (min-width: 860px)': {
      fontSize: '1.6rem',
    },
  },
});

globalStyle(`${label} img`, {
  width: '1rem',
});

globalStyle('.main-opacity', {
  opacity: 'var(--mainOpacity)',
  transition: 'opacity .3s cubic-bezier(.25,.46,.45,.94)',
});

globalStyle('.main-opacity-full', {
  zIndex: 20,
  opacity: 1,
});
