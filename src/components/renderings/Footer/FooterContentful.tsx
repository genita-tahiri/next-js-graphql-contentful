import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import Footer, { FooterProps } from "./Footer";

const FooterContentful = ({ contentfulId }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<FooterProps>(contentfulId, "Footer");

  if (!entry) return null;

  return <Footer {...entry} />;
};

export default memo(FooterContentful);
