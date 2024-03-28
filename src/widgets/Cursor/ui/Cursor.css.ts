import { globalStyle, style } from '@vanilla-extract/css';

/* **************************************** *
 * CURSOR
 * **************************************** */
export const cursor = style({
  position: 'fixed',
  zIndex: 999,
  pointerEvents: 'none',

  selectors: {
    '&:before': {
      content: '',
      display: 'block',
      width: '1.6rem',
      height: '1.6rem',
      position: 'relative',
      zIndex: 99,
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ff5100',
      backdropFilter: 'invert(50%)',
      opacity: 0.8,
      borderRadius: '50%',
      transition: 'background-color .2s, width .2s, height .2s',
      pointerEvents: 'none',
    },
  },
});

globalStyle(`${cursor}.pointer:before`, {
  width: '0.8rem',
  height: '0.8rem',
});
