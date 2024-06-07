import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import Header, { HeaderProps } from "./Header";

const HeaderContentful = ({ contentfulId }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<HeaderProps>(contentfulId, "Header");

  if (!entry) return null;

  return <Header {...entry} />;
};

export default memo(HeaderContentful);
