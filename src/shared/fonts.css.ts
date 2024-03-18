import { fontFace } from '@vanilla-extract/css';

export const pretendardRegular = fontFace({
  src: `url('./fonts/Pretendard-Regular.woff2') format('woff2'),
url('../assets/fonts/Pretendard-Regular.subset.woff') format('woff')`,
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const pretendardMedium = fontFace({
  src: `url('../assets/fonts/Pretendard-Medium.subset.woff2') format('woff2'),
url('../assets/fonts/Pretendard-Medium.subset.woff') format('woff')`,
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const pretendardSemiBold = fontFace({
  src: `url('../assets/fonts/Pretendard-Medium.subset.woff2') format('woff2'),
url('../assets/fonts/Pretendard-Medium.subset.woff') format('woff')`,
  fontWeight: 600,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const pretendardBold = fontFace({
  src: `url('../assets/fonts/Pretendard-Bold.subset.woff2') format('woff2'),
url('../assets/fonts/Pretendard-Bold.subset.woff') format('woff')`,
  fontWeight: 700,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const enfontFamily = fontFace({
  src: `url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});
