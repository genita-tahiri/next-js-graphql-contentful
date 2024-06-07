import { ContentfulAsset } from "@app/features/contentful/contentful";

export interface NavigationLinksProps {
  items: {
    sys: {
      id: string;
    };
    label: string;
    link: string;
  }[];
}

export interface ArticleProps {
  title: string;
  slug: string;
  summary?: string;
  ctaLabel: string;
  sys: {
    id: string;
    firstPublishedAt: string;
  };
  image: ContentfulAsset;
}

export interface StatisticItem {
  sys: { id: string };
  title: string;
  description: string;
  number: string;
}
