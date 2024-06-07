type GlobalMediaQueriesDef = {
  mobile: string;
  mobileLandscape: string;
  tabletPortrait: string;
  tabletLandscape: string;
  desktopSmall: string;
  desktopMedium: string;
  desktopLarge: string;
};

export const GLOBAL_MEDIA_QUERIES: GlobalMediaQueriesDef = {
  mobile: "(max-width: 575px)",
  mobileLandscape: "(min-width: 576px)",
  tabletPortrait: "(min-width: 768px)",
  tabletLandscape: "(min-width: 1024px)",
  desktopSmall: "(min-width: 1200px)",
  desktopMedium: "(min-width: 1600px)",
  desktopLarge: "(min-width: 1920px)",
};
