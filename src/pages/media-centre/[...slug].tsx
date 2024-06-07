import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";

import { memo } from "react";

import Head from "next/head";

import DynamicLayout from "@app/components/layouts/DynamicLayout/DynamicLayout";
import RenderingLoader from "@app/components/layouts/RenderingLoader/RenderingLoader";
import BlogHero from "@app/components/renderings/BlogHero/BlogHero";
import {
  getBlogBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";
import { ArticleProps } from "@app/types/global.types";

interface BlogPageProps extends WebPageProps, ArticleProps {}

const BlogPage: NextPage<BlogPageProps> = memo(props => {
  const {
    renderingsCollection,
    pageLayout,
    metaTitle,
    metaDescription,
    openGraphImage,
    title,
    image,
    sys,
    summary,
  } = props;

  return (
    <>
      <Head>
        {metaTitle && (
          <>
            <title>{metaTitle}</title>
            <meta property="og:title" content={metaTitle} />
          </>
        )}
        {metaDescription && (
          <>
            <meta name="description" content={metaDescription} />
            <meta property="og:description" content={metaDescription} />
          </>
        )}
        {openGraphImage && (
          <meta property="og:image" content={`https:${openGraphImage.url}`} />
        )}
      </Head>

      {pageLayout && (
        <DynamicLayout contentfulId={pageLayout.sys.id}>
          <BlogHero
            title={title}
            image={image}
            date={sys.firstPublishedAt}
            summary={summary}
          />
          <RenderingLoader renderings={renderingsCollection.items} />
        </DynamicLayout>
      )}
    </>
  );
});

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const blogSlug = context.query.slug?.toString().replace(/,/g, "/");

  const blog = await getBlogBySlug(blogSlug, context.locale);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return { props: { ...blog } };
};

export default BlogPage;
