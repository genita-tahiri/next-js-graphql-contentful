import { NextPage, GetServerSideProps } from "next";

import { memo } from "react";

import Head from "next/head";

import DynamicLayout from "@app/components/layouts/DynamicLayout/DynamicLayout";
import RenderingLoader from "@app/components/layouts/RenderingLoader/RenderingLoader";
import {
  getPageBySlug,
  WebPageProps,
} from "@app/features/contentful/contentful";

const Home: NextPage<WebPageProps> = memo(props => {
  const {
    renderingsCollection,
    pageLayout,
    metaTitle,
    metaDescription,
    openGraphImage,
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
          <RenderingLoader renderings={renderingsCollection.items} />
        </DynamicLayout>
      )}
    </>
  );
});

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const page = await getPageBySlug("/", locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return { props: { ...page } };
};

export default Home;
