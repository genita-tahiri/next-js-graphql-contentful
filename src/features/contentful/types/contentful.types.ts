export interface ContenfulWrapperProps {
  contentfulId: string;
  type?: string;
}

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  fileName: string;
  contentType: string;
  size: number;
  url: string;
  width: number;
  height: number;
}

export interface WebPageProps {
  title: string;
  slug: string;
  pageLayout: {
    sys: {
      id: string;
    };
  };
  metaDescription: string;
  metaTitle: string;
  openGraphImage: {
    url: string;
  };
  renderingsCollection: {
    items: { sys: { id: string }; __typename: string }[];
  };
}
