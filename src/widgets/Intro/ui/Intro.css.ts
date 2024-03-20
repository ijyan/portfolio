import { style } from '@vanilla-extract/css';

/* **************************************** *
 * INTRO
 * **************************************** */
export const intro = style({
  margin: '10rem 0 0',
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
  fontSize: '1.6rem',
  fontWeight: 600,
  gridColumn: '1/ span 4',
  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '1/ span 3',
    },
  },
});
