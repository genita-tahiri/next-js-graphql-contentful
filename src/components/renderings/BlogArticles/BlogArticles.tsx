import { memo, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { Col, Container, Row } from "react-grid-system";
import Select, { components, DropdownIndicatorProps } from "react-select";

import { IconIndicator } from "@app/components/atoms/Icon/Icon";
import Section from "@app/components/layouts/Section/Section";

import styles from "./BlogArticles.module.scss";
import ArticleCardContentful from "./components/ArticleCard/ArticleCardContentful";
import Pagination from "./components/Pagination/Pagination";

export interface BlogArticlesProps {
  title: string;
  articlesPerPage: number;
  sortByRecentLabel: string;
  sortByOldestLabel: string;
  articlesCollection: {
    items: { sys: { id: string; firstPublishedAt: string } }[];
  };
}

interface SortingOptions {
  label: string;
  value: string;
}

const BlogArticles = ({
  articlesCollection,
  articlesPerPage,
  sortByRecentLabel,
  sortByOldestLabel,
}: BlogArticlesProps) => {
  const router = useRouter();

  const { locale } = router;

  const articles = articlesCollection.items;

  const [currentItems, setCurrentItems] = useState(null);

  const [pageCount, setPageCount] = useState(0);

  const [pagesArr, setPagesArr] = useState(null);

  const [itemOffset, setItemOffset] = useState(0);

  const [sorting, setSorting] = useState<SortingOptions>({
    label: sortByRecentLabel,
    value: "recent",
  });

  useEffect(() => {
    if (sorting.value === "recent") {
      setSorting({
        label: sortByRecentLabel,
        value: "recent",
      });
    }

    if (sorting.value === "oldest") {
      setSorting({
        label: sortByOldestLabel,
        value: "oldest",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, sortByRecentLabel]);

  useEffect(() => {
    setPageCount(Math.ceil(articles.length / articlesPerPage));
    setPagesArr(Array.from(Array(pageCount).keys()));
  }, [articles, itemOffset, articlesPerPage, pageCount]);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(null);
    setTimeout(() => {
      if (sorting.value === "recent") {
        setCurrentItems(
          articles
            .sort(
              (a, b) =>
                new Date(a.sys.firstPublishedAt).getDate() -
                new Date(b.sys.firstPublishedAt).getDate()
            )
            .slice(itemOffset, endOffset)
        );
      }
      if (sorting.value === "oldest") {
        setCurrentItems(
          articles
            .sort(
              (a, b) =>
                new Date(b.sys.firstPublishedAt).getDate() -
                new Date(a.sys.firstPublishedAt).getDate()
            )
            .slice(itemOffset, endOffset)
        );
      }
    }, 300);
  }, [articles, articlesPerPage, itemOffset, sorting]);

  const options = [
    { label: sortByRecentLabel, value: "recent" },
    { label: sortByOldestLabel, value: "oldest" },
  ] as SortingOptions[];

  const DropdownIndicator = (
    props: DropdownIndicatorProps<SortingOptions, true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <IconIndicator className={styles.icon} />
      </components.DropdownIndicator>
    );
  };

  return (
    <Section className={styles.section}>
      <div className={styles.topBG} />
      <Container className={styles.container}>
        <Row justify="between" className={styles.options}>
          <Col xs={12} lg={4}>
            <Select
              components={{ DropdownIndicator }}
              className={styles.filters}
              options={options}
              value={sorting}
              onChange={value => setSorting(value as unknown as SortingOptions)}
            />
          </Col>
          {articles.length > articlesPerPage && (
            <Col xs={12} lg={4} className={styles.pagination}>
              <Pagination
                itemOffset={itemOffset}
                articlesPerPage={articlesPerPage}
                pagesArr={pagesArr}
                articlesNumber={articles.length}
                pageCount={pageCount}
                setItemOffset={setItemOffset}
              />
            </Col>
          )}
        </Row>

        <Row className={styles.articlesRow}>
          {currentItems?.length > 0 &&
            currentItems.map(article => (
              <Col xs={12} lg={6} key={article.sys.id}>
                <ArticleCardContentful contentfulId={article.sys.id} />
              </Col>
            ))}
        </Row>

        <Row justify="end">
          {articles.length > articlesPerPage && (
            <Col xs={12} lg={4} className={styles.pagination}>
              <Pagination
                itemOffset={itemOffset}
                articlesPerPage={articlesPerPage}
                pagesArr={pagesArr}
                articlesNumber={articles.length}
                pageCount={pageCount}
                setItemOffset={setItemOffset}
                isDark
              />
            </Col>
          )}
        </Row>
      </Container>
    </Section>
  );
};

export default memo(BlogArticles);
