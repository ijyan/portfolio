import { globalStyle, style } from '@vanilla-extract/css';

/* **************************************** *
 * PROJECT
 * **************************************** */
export const project = style({
  marginTop: '9rem',

  '@media': {
    'screen and (min-width: 860px)': {
      marginTop: '13rem',
    },
  },
});

/* **************************************** *
 * PROJECT LIST
 * **************************************** */
export const projectList = style({
  // hover시 z-index20
  alignItems: 'center',
  position: 'relative',
  paddingBlock: '2.2rem',
  borderBlock: '1px solid #fff',
  marginTop: '-1px',
  zIndex: 1,

  '@media': {
    'screen and (min-width: 860px)': {
      paddingBlock: '3rem',
    },
  },

  selectors: {
    '&:before, &:after': {
      content: '',
      display: 'block',
      background: '#fff',
      height: '0.15rem',
      position: 'absolute',
      left: 0,
      right: 0,
      transform: 'scaleY(0)',
      transition: 'transform .25s cubic-bezier(.645, .045, .355, 1)',
    },
    '&:before': {
      top: 0,
    },
    '&:after': {
      bottom: 0,
    },
    '&:hover:before, &:hover:after': {
      transform: 'scaleY(1)',
    },
  },
});

// YEAR
export const projectYear = style({
  gridColumn: '1 / span 1',
  fontWeight: 600,
});

// TITLE
export const projectTitleWrap = style({
  gridColumn: '2 / span 3',

  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '2 / span 6',
    },
  },
});

globalStyle(`${projectTitleWrap} .title`, {
  // fontSize: '2.6rem',
  fontWeight: 600,
});

globalStyle(`${projectTitleWrap} .tag`, {
  fontSize: '1.2rem',
  paddingTop: '1.2rem',
});

// BUTTON
export const projectButtonWrap = style({
  display: 'flex',
  gridColumn: '5 / span 2',
  justifyContent: 'flex-end',
  gap: '0.5rem',

  '@media': {
    'screen and (min-width: 860px)': {
      gap: '2rem',
      gridColumn: '8 / span 3',
    },
  },
});

export const projectLink = style({
  color: '#fff',
  fontWeight: '600',
  position: 'relative',
  zIndex: 99,
  fontSize: '1rem',

  '@media': {
    'screen and (min-width: 860px)': {
      fontSize: '1.6rem',
    },
  },

  selectors: {
    '&:before': {
      content: '',
      background: 'url(/images/ico_arrowDown.svg)',
      width: '1.5rem',
      height: '1.5rem',
      backgroundSize: '1.5rem',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-100%,-50%) rotate(-90deg)',
      transition: '.65s cubic-bezier(.68, .6, .32, 1.6)',
      opacity: 0,
    },
    '&:hover:before': {
      opacity: 1,
      transform: 'translate(-50%,-50%) rotate(-90deg)',
    },
  },
});

export const projectLinkText = style({
  display: 'inline-block',
  transition: '.45s cubic-bezier(.68, .6, .32, 1.6)',

  selectors: {
    [`${projectLink}:hover &`]: {
      opacity: 0,
      transform: 'translateX(20%)',
      visibility: 'hidden',
    },
  },
});

// LAUNCH
export const projectLaunch = style({
  display: 'none',

  '@media': {
    'screen and (min-width: 860px)': {
      gridColumn: '12 / span 1',
      display: 'block',
    },
  },
});

globalStyle(`${projectLaunch} a`, {
  display: 'flex',
  justifyContent: 'flex-end',
  fontWeight: 600,
});

export const projectLaunchIco = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
  marginLeft: '1rem',
  flexShrink: 0,
  position: 'relative',
});

globalStyle(`${projectLaunchIco} span`, {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#fff',
  borderRadius: '50%',
  transition: '.45s cubic-bezier(.34, 1.56, .48, 1.19)',
});

globalStyle(`${projectLaunchIco} img`, {
  width: '1rem',
  filter: 'invert(1)',
  transition: '.45s cubic-bezier(.34, 1.56, .48, 1.19)',
});

globalStyle(`${projectLaunch} a:hover img`, {
  transform: 'rotate(45deg)',
});

globalStyle(`${projectLaunch} a:hover span`, {
  transform: 'scale(1.4)',
});

/* **************************************** *
 * PREVIEW IMAGE
 * **************************************** */
export const preview = style({
  position: 'fixed',
  width: '70vw',
  height: '42vw',
  overflow: 'hidden',
  objectFit: 'cover',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%) scale(0)',
  transition: 'transform 1s ease',

  '@media': {
    'screen and (min-width: 860px)': {
      width: '50vw',
      height: '32vw',
    },
  },
});

globalStyle(`${preview}.on`, {
  transform: 'translate(-50%,-50%) scale(1)',
});

export const previewImg = style({
  width: '100%',
  height: '0',
  transform: 'scale(1.5)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  pointerEvents: 'none',
  transition: 'transform 1s 0.2s ease-out',
});

globalStyle(`${preview}.on ${previewImg}`, {
  height: '100%',
  transform: 'scale(1)',
});

export const previewLaunch = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 860px)': {
      display: 'none',
    },
  },
});

globalStyle(`${previewLaunch}.on`, {
  position: 'fixed',
  display: 'flex',
  bottom: '5rem',
  left: '50%',
  background: '#fff',
  padding: '1.4rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10rem',
  transform: 'translate3D(-50%, 2rem, 0) scale(.95)',
  transition: 'all .4s cubic-bezier(.29,-.31,.66,-.56)',
  color: '#2b2b2b',
  fontWeight: 600,
  gap: '0.8rem',
  zIndex: 10,

  '@media': {
    'screen and (min-width: 860px)': {
      display: 'none',
    },
  },
});

globalStyle(`${previewLaunch} img`, {
  filter: 'invert(1)',
  width: '1rem',
});
