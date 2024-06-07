import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";
import { ArticleProps } from "@app/types/global.types";

import ArticleCard from "./ArticleCard";

const ArticleCardContentful = ({ contentfulId }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<ArticleProps>(contentfulId, "Article");

  if (!entry) return null;

  return <ArticleCard {...entry} />;
};

export default memo(ArticleCardContentful);
