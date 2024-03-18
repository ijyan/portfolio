import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { enfontFamily } from '@/shared/fonts.css.ts';

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
});

globalStyle(`${header} svg`, {
  width: '30rem',
  height: '30rem',
});

/* **************************************** *
 * HEADER LOGO
 * **************************************** */
export const headerLogo = style({
  position: 'relative',
  transformStyle: 'preserve-3d',
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
});

globalStyle(`${headerLogoMaker} svg`, {
  transform: 'translateZ(16rem)',
});

/* **************************************** *
 * HEADER LOGO LINK
 * **************************************** */
export const headerLinkWrap = style({
  display: 'flex',
  gap: '36rem',
});

export const headerLink = style({
  fontSize: '18rem',
  color: '#fff',
  fontWeight: '600',
  position: 'relative',
  zIndex: 99,
  fontFamily: `${enfontFamily}`,
  selectors: {
    '&:before': {
      content: '',
      background: 'url(/images/ico_arrowDown.svg)',
      width: '20rem',
      height: '20rem',
      backgroundSize: '20rem',
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
