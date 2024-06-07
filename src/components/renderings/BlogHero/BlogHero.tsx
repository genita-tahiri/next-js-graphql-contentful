/* eslint-disable import/no-duplicates */
import { memo } from "react";

import { format } from "date-fns";
import arLocale from "date-fns/locale/ar";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-grid-system";

import Image from "@app/components/atoms/Image/Image";
import { Heading, Body } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { LocalesEnum } from "@app/constants/locales.constants";
import { ContentfulAsset } from "@app/features/contentful/contentful";

import styles from "./BlogHero.module.scss";

export interface BlogHeroProps {
  title: string;
  date?: string;
  summary: string;
  image: ContentfulAsset;
}
const BlogHero = ({ title, image, date, summary }: BlogHeroProps) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <Section className={styles.section}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            layout="fill"
            alt={image.description}
            title={image.title}
            objectFit="cover"
          />
        </div>
      )}
      <Container className={styles.container}>
        <Row>
          <Col xs={12} lg={9}>
            {date && (
              <Body bold className={styles.date}>
                {format(new Date(date), "dd MMM Y", {
                  locale: locale === LocalesEnum.ARABIC ? arLocale : null,
                })}
              </Body>
            )}
            <Heading level={2} bold className={styles.title}>
              {title}
            </Heading>
          </Col>
          <Col xs={12} lg={6}>
            {!!summary && <Body>{summary}</Body>}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(BlogHero);
