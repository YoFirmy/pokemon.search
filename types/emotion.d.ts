import '@emotion/react';

declare module '@emotion/react' {
  export type Breakpoints = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'desktopL' | 'desktopXL';

  export type Colors =
    | 'black'
    | 'white'
    | 'greyLight'
    | 'greyDark'
    | 'seaFoamLight'
    | 'seaFoam'
    | 'seaFoamDark'
    | 'brownLight'
    | 'brown'
    | 'brownDark';

  export type BoxShadow = 'cards' | 'leftPositioned' | 'centrePositioned' | 'rightPositioned';

  export interface Theme {
    mediaQuery: Record<Breakpoints, string>;
    colors: Record<Colors, string>;
    fontSizes: Record<number, string>;
    boxShadow: Record<BoxShadow, string>;
  }
}
