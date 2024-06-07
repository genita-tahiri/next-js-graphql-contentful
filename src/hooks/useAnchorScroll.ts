/* eslint-disable filenames/match-regex */

import { useEffect } from "react";

import { useRouter } from "next/router";

export const useAnchorScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;

    const hasAnchor = path.indexOf("#") > -1;

    if (hasAnchor) {
      const elemId = path.replace("/#", "");
      // TODO: Find a better way to check for the loaded DOM so we can scroll to the element on the initial load or on refresh

      setTimeout(() => {
        document.getElementById(elemId)?.scrollIntoView();
      }, 600);
    }
  }, [router]);
};
