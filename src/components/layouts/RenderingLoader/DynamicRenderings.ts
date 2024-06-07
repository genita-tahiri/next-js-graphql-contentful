// eslint-disable-next-line filenames/match-regex
import { ReactNode } from "react";

import BlogArticlesContentful from "@app/components/renderings/BlogArticles/BlogArticlesContentful";
import BlogGalleryContentful from "@app/components/renderings/BlogGallery/BlogGalleryContentful";
import BlogHeaderContentful from "@app/components/renderings/BlogHeader/BlogHeaderContentful";
import ContactUsContentful from "@app/components/renderings/ContactUs/ContactUsContentful";
import HeroContentful from "@app/components/renderings/Hero/HeroContentful";
import TextContentful from "@app/components/renderings/Text/TextContentful";
import TwoColumnsTextContentful from "@app/components/renderings/TwoColumnsText/TwoColumnsTextContentful";

const DynamicRenderings: Record<string, ReactNode> = {
  BlogArticles: BlogArticlesContentful,
  BlogGallery: BlogGalleryContentful,
  BlogHeader: BlogHeaderContentful,
  ContactForm: ContactUsContentful,
  Hero: HeroContentful,
  Text: TextContentful,
  TwoColumnsText: TwoColumnsTextContentful,
};

export default DynamicRenderings;
