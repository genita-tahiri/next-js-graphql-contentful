import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import TwoColumnsText, { TwoColumnsTextProps } from "./TwoColumnsText";

const TwoColumnsTextContentful = ({
  contentfulId,
  type,
}: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<TwoColumnsTextProps>(contentfulId, type);

  if (!entry) return null;

  return <TwoColumnsText {...entry} />;
};

export default memo(TwoColumnsTextContentful);
