import { globalStyle, keyframes, style } from '@vanilla-extract/css';

/* **************************************** *
 * HEADER
 * **************************************** */
export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  zIndex: 99,
  position: 'fixed',
  top: 0,
  paddingBlock: '2.8rem',
});

globalStyle(`${header} svg`, {
  width: '3rem',
  height: '3rem',
});

/* **************************************** *
 * HEADER LOGO
 * **************************************** */
export const headerLogo = style({
  position: 'relative',
  transformStyle: 'preserve-3d',
  width: '3rem',
  height: '3rem',
});

export const rotate = keyframes({
  '0%': {
    transform: 'translate3d(-50%, -50%, 0) rotateY(0)',
  },
  '100%': {
    transform: 'translate3d(-50%, -50%, 0) rotateY(1turn)',
  },
});

export const headerLogoMaker = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  transformStyle: 'preserve-3d',
  animation: `${rotate} 6s linear infinite`,
  width: '3rem',
  height: '3rem',
});

globalStyle(`${headerLogoMaker} svg`, {
  transform: 'translateZ(1.5rem)',
});

/* **************************************** *
 * HEADER LINK - NAV
 * **************************************** */
export const headerLinkWrap = style({
  display: 'flex',
  gap: '2.8rem',
});

export const headerLink = style({
  fontSize: '1.6rem',
  color: '#fff',
  fontWeight: '600',
  position: 'relative',
  zIndex: 99,
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
      transform: 'translate(-50%,-180%)',
      transition: '.65s cubic-bezier(.68, .6, .32, 1.6)',
      opacity: 0,
    },
    '&:hover:before': {
      opacity: 1,
      transform: 'translate(-50%,-50%)',
    },
  },
});

export const headerLinkText = style({
  display: 'inline-block',
  transition: '.45s cubic-bezier(.68, .6, .32, 1.6)',

  selectors: {
    [`${headerLink}:hover &`]: {
      transform: 'translateY(150%)',
    },
  },
});
