import { style } from '@vanilla-extract/css';

/* **************************************** *
 * INTRO
 * **************************************** */
export const intro = style({
  margin: '2rem 0 0',
  overflow: 'hidden',
});

export const introImgWrap = style({
  display: 'flex',
  gap: '10vh',
  flexWrap: 'nowrap',
});

export const introImg = style({
  width: '65vw',
  flex: '0 0 auto',
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
