import { createGlobalTheme } from '@vanilla-extract/css';
import { enfontFamily } from '@/shared/fonts.css.ts';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#2b2b2b',
  },
  font: {
    en: `${enfontFamily}`,
  },
});
