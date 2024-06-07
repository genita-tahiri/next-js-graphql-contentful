import axios from "axios";

import { ENV } from "../constants/contentful.env";
import { ENTRY_GRAPHQL_FIELDS, PAGE_GRAPHQL_FIELDS } from "./queries.fields";

const fetchGraphQL = async (query: string) => {
  return axios({
    url: `https://graphql.contentful.com/content/v1/spaces/${ENV.SPACE_ID}/environments/${ENV.ENVIRONMENT}`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.DELIVERY_ACCESS_TOKEN}`,
    },
    data: {
      query,
    },
  }).then(result => result.data);
};

const extractPages = fetchResponse => {
  return fetchResponse?.data?.webPageCollection?.items[0];
};

const extractBlog = fetchResponse => {
  return fetchResponse?.data?.articleCollection?.items[0];
};

const extractEntries = fetchResponse => {
  return fetchResponse?.data?.entryCollection?.items[0];
};

export const getPageBySlug = async (slug: string, locale: string) => {
  const page = await fetchGraphQL(
    `query {
      webPageCollection(locale: "${
        locale ?? "en"
      }", where: { slug: "${slug}" }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractPages(page);
};

export const getBlogBySlug = async (slug: string, locale: string) => {
  const blog = await fetchGraphQL(
    `query {
      articleCollection(locale: "${
        locale ?? "en"
      }", where: { slug: "${slug}" }) {
        items {
          ${ENTRY_GRAPHQL_FIELDS.Article}
        }
      }
    }`
  );

  return extractBlog(blog);
};

export const getEntryById = async (
  id: string,
  locale: string,
  contentType?: string
) => {
  if (ENTRY_GRAPHQL_FIELDS[contentType]) {
    const entry = await fetchGraphQL(
      `query {
        entryCollection(locale: "${
          locale ?? "en"
        }",where: { sys: {id: "${id}"} }) {
          items {
            ${ENTRY_GRAPHQL_FIELDS[contentType]}
          }
        }
      }`
    );
    return extractEntries(entry);
  }
  return null;
};
