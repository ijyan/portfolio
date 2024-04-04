import { style } from '@vanilla-extract/css';

/* **************************************** *
 * INTRO
 * **************************************** */
export const intro = style({
  margin: '5rem 0 0',
  overflow: 'hidden',
});

export const introImgWrap = style({
  willChange: 'transform',
});

export const introImg = style({
  width: '365vw',
  flex: '0 0 auto',

  '@media': {
    'screen and (min-width: 860px)': {
      width: '140vw',
    },
  },
});

export const introDesc = style({
  marginTop: '4.8rem',
  fontWeight: 600,
  gridColumn: '1/ span 4',
  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '1/ span 3',
    },
  },
});
