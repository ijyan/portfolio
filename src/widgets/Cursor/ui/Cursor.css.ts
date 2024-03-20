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
      backgroundColor: '#00ff04',
      backdropFilter: 'invert(50%)',
      opacity: 0.7,
      borderRadius: '50%',
      transition: 'background-color .2s, width .2s, height .2s',
      pointerEvents: 'none',
    },
  },
});

globalStyle(`${cursor}.pointer`, {
  width: '1rem',
  height: '1rem',
});
