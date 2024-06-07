import { memo } from "react";

import { setConfiguration } from "react-grid-system";
import { useMedia } from "react-media";

import { GLOBAL_MEDIA_QUERIES } from "@app/constants/breakpoint.constants";

const GridConfiguration = () => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  setConfiguration({
    gutterWidth: matches.tabletLandscape ? 24 : 48,
    // container max width for sm, md, lg, xl and xxl.
    containerWidths: [540, 740, 960, 1160, 1280],
    // Disabling the xxl screen sizes
    breakpoints: [576, 768, 1024, 1200, 1600],
  });
  return null;
};

export default memo(GridConfiguration);
