import "@app/styles/index.scss";
import type { AppProps } from "next/app";

import GridConfiguration from "@app/components/layouts/GridConfiguration/GridConfiguration";
import { useAnchorScroll } from "@app/hooks/useAnchorScroll";

function MyApp({ Component, pageProps }: AppProps) {
  useAnchorScroll();

  return (
    <>
      <GridConfiguration />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
