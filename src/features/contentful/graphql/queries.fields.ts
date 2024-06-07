export const PAGE_GRAPHQL_FIELDS = `
slug
title
pageLayout {
  sys {
    id
  }
}
metaDescription
metaTitle
openGraphImage {
  url
}
renderingsCollection {
  items {
    __typename
    ... on Entry {
      sys {
        id
      }
    }
  }
}`;

export const ENTRY_GRAPHQL_FIELDS = {
  Layout: `
  ... on Layout {
    header {
      sys {
        id
      }
    }
    footer {
      sys {
        id
      }
    }
  }`,
  Header: `
  ... on Header {
    title
    facebookLink
    instagramLink
    twitterLink
    menuLinksCollection {
      items {
        sys {
          id
        }
        link
        label
      }
    }
    logo {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
  }`,
  Hero: `
  ... on Hero {
    title
    ctaLabel
    backgroundImage {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
  }`,
  Footer: `
  ... on Footer {
    text
    copyrights
    facebookLink
    instagramLink
    twitterLink
    linkedInLink
    secondaryLogo {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
    logo {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
  }`,
  ContactForm: `
  ... on ContactForm {
    title
    anchorId
    description
    nameLabel
    emailLabel
    phoneLabel
    messageLabel
    ctaLabel
    successMessage
    backgroundImage {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
  }`,
  BlogHeader: `
  ... on BlogHeader {
    title
  }`,
  BlogArticles: `
  ... on BlogArticles {
    title
    articlesPerPage
    sortByRecentLabel
    sortByOldestLabel
    articlesCollection {
      items {
        sys {
          id
          firstPublishedAt
        }
      }
    }
  }`,
  Article: `
  ... on Article {
    title
    slug
    ctaLabel
    summary
    image {
      sys {
        id
      }
      size
      url
      width
      height
      title
      description
    }
    sys {
      id
      firstPublishedAt
    }
    pageLayout {
      sys {
        id
      }
    }
    metaDescription
    metaTitle
    openGraphImage {
      url
    }
    renderingsCollection {
      items {
        __typename
        ... on Entry {
          sys {
            id
          }
        }
      }
    }
  }`,
  Text: `
  ... on Text {
    title
    anchorId
    content {
      json
    }
  }`,
  TwoColumnsText: `
  ... on TwoColumnsText {
    title
    anchorId
    leftColumnText {
      json
    }
    leftColumnTitle
    rightColumnTitle
    rightColumnText {
      json
    }
  }`,
  BlogGallery: `
  ... on BlogGallery {
    title
    imagesCollection {
      items {
        sys {
          id
        }
        size
        url
        width
        height
        title
        description
      }
    }
  }`,
};
