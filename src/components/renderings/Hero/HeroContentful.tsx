import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import Hero, { HeroProps } from "./Hero";

const HeroContentful = ({ contentfulId, type }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<HeroProps>(contentfulId, type);

  if (!entry) return null;

  return <Hero {...entry} />;
};

export default memo(HeroContentful);
