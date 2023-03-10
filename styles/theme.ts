import { Breakpoints, Colors, Theme } from '@emotion/react';

const breakpoints: Record<Breakpoints, number> = {
  mobile: 360,
  tablet: 641,
  laptop: 1001,
  desktop: 1201,
  desktopL: 1600,
  desktopXL: 1808,
};

const mediaQuery = Object.entries(breakpoints).reduce(
  (prev, [key, breakpoint]) => ({ ...prev, [key]: `@media (min-width: ${breakpoint}px)` }),
  {} as Record<Breakpoints, string>,
);

const colors: Record<Colors, string> = {
  black: '#000000',
  white: '#FFFFFF',
  greyLight: '#AAAACA',
  greyDark: '#404868',
  seaFoamLight: '#9ECFBE',
  seaFoam: '#86C8AE',
  seaFoamDark: '#44B283',
  brownLight: '#D8A870',
  brown: '#B38370',
  brownDark: '#A17270',
};

const theme: Theme = {
  mediaQuery,
  colors,
  fontSizes: {
    8: '0.5rem',
    10: '0.625rem',
    12: '0.75rem',
    13: '0.813rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.12rem',
    20: '1.25rem',
    23: '1.438rem',
    24: '1.5rem',
    26: '1.625rem',
    29: '1.813rem',
    32: '2rem',
    39: '2.4375rem',
    43: '2.6875rem',
    57: '3.5625rem',
  },
};

export default theme;
