import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import BlogHeader, { BlogHeaderProps } from "./BlogHeader";

const BlogHeaderContentful = ({
  contentfulId,
  type,
}: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<BlogHeaderProps>(contentfulId, type);

  if (!entry) return null;

  return <BlogHeader {...entry} />;
};

export default memo(BlogHeaderContentful);
