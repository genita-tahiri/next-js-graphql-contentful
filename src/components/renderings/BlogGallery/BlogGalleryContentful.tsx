import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import BlogGallery, { BlogGalleryProps } from "./BlogGallery";

const BlogGalleryContentful = ({
  contentfulId,
  type,
}: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<BlogGalleryProps>(contentfulId, type);

  if (!entry) return null;

  return <BlogGallery {...entry} />;
};

export default memo(BlogGalleryContentful);
