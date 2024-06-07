import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import BlogArticles, { BlogArticlesProps } from "./BlogArticles";

const BlogArticlesContentful = ({
  contentfulId,
  type,
}: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<BlogArticlesProps>(contentfulId, type);

  if (!entry) return null;

  return <BlogArticles {...entry} />;
};

export default memo(BlogArticlesContentful);
