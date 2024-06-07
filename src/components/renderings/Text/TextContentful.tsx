import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import Text, { TextProps } from "./Text";

const TextContentful = ({ contentfulId, type }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<TextProps>(contentfulId, type);

  if (!entry) return null;

  return <Text {...entry} />;
};

export default memo(TextContentful);
