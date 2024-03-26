import { globalStyle, style } from '@vanilla-extract/css';

/* **************************************** *
 * ABOUT
 * **************************************** */
export const about = style({
  display: 'block',
  marginBlock: '9.6rem 8rem',

  '@media': {
    'screen and (min-width: 860px)': {
      marginBlock: '20rem 12rem',
      position: 'relative',
    },
  },
});

globalStyle(`${about} .main-grid`, {
  alignItems: 'start',
});

/* **************************************** *
 * GET IN TOUCH
 * **************************************** */
export const getInTouch = style({
  gridColumn: '1 / span 6',
  order: 1,

  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '1 / span 3',
      order: 0,
      position: 'sticky',
      top: '4rem',
    },
  },
});

globalStyle(`${getInTouch} > div:nth-child(3)`, {
  marginTop: '8rem',
});

export const textLink = style({
  display: 'inline-flex',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  fontWeight: 600,
});

globalStyle(`${textLink} img`, {
  transition: '.45s cubic-bezier(.34, 1.56, .48, 1.19)',
  width: '0.8rem',
  marginRight: '2rem',

  '@media': {
    'screen and (min-width: 860px)': {
      marginRight: '4rem',
    },
  },
});

globalStyle(`${textLink}:hover img`, {
  transform: 'rotate(45deg)',
});

globalStyle(`${textLink} div`, {
  transition: '.45s cubic-bezier(.34, 1.56, .48, 1.19)',
});

globalStyle(`${textLink}:hover div`, {
  transform: 'translateX(-1rem)',
});

globalStyle(`${textLink} span`, {
  display: 'none',
  fontSize: '1rem',
  marginLeft: '1rem',
  opacity: 0,
  transform: 'translate(2rem, -0.08rem)',
  transition: '.6s cubic-bezier(.34, 1.56, .48, 1.19)',
});

globalStyle(`${textLink}:hover span`, {
  display: 'inline-block',
  opacity: 0.5,
  transform: 'translateY(-0.08rem)',
});

/* **************************************** *
 * INTRODUCE
 * **************************************** */
export const introduce = style({
  gridColumn: '1 / span 6',
  order: 0,

  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '7 / span 5',
      order: 1,
    },
  },
});

export const desc = style({});

globalStyle(`${desc} p`, {
  marginBottom: '3rem',
  fontSize: '1.7rem',
  fontWeight: 600,
  '@media': {
    'screen and (min-width: 860px)': {
      marginBottom: '4rem',
      fontSize: '2.6rem',
    },
  },
});
