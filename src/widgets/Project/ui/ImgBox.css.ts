import { globalStyle, style } from '@vanilla-extract/css';

// IMG BOX
export const preview = style({
  position: 'fixed',
  width: '30vw',
  height: '18vw',
  overflow: 'hidden',
  objectFit: 'cover',
  top: 0,
  left: 0,
  zIndex: -1,
  transform: 'translate(-50%,-50%) scale(0)',
  transition: 'transform 1s ease',
});

globalStyle(`${preview}.on`, {
  transform: 'translate(-50%,-50%) scale(1)',
});

export const privewImg = style({
  width: '100%',
  height: '0',
  transform: 'scale(1.5)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  pointerEvents: 'none',
  transition: 'transform 1s 0.2s ease-out',
});

globalStyle(`${preview}.on ${privewImg}`, {
  height: '100%',
  transform: 'scale(1)',
});
