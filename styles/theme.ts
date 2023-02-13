import { BoxShadow, Breakpoints, Colors, Theme } from '@emotion/react';

const breakpoints: Record<Breakpoints, number> = {
  mobile: 360,
  tablet: 641,
  laptop: 1001,
  desktop: 1201,
  desktopL: 1600,
  desktopXL: 1808,
};

const colors: Record<Colors, string> = {
  black: '#000000',
  white: '#FFFFFF',
  greyDark: '#404868',
  seaFoamLight: '#9ECFBE',
  seaFoam: '#86C8AE',
  seaFoamDark: '#44B283',
  brownLight: '#D8A870',
  brown: '#B38370',
  brownDark: '#A17270',
};

const boxShadow: Record<BoxShadow, string> = {
  cards:
    '0px 8px 24px 5px rgba(51, 63, 72, 0.05), 0px 4px 8px rgba(51, 63, 72, 0.05), 0px 6px 12px rgba(51, 63, 72, 0.02)',
  leftPositioned: '6px 0px 24px rgba(51, 63, 72, 0.05), 6px 0px 48px rgba(51, 63, 72, 0.15)',
  centrePositioned: '0px 6px 24px rgba(51, 63, 72, 0.05), 0px 6px 48px rgba(51, 63, 72, 0.15)',
  rightPositioned: '-6px 0px 24px rgba(51, 63, 72, 0.05), -6px 0px 48px rgba(51, 63, 72, 0.15)',
};

const theme: Theme = {
  breakpoints,
  colors,
  fontSizes: {
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
  boxShadow,
};

export default theme;
