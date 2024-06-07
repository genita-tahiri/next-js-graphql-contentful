import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";

import { IconChevron } from "@app/components/atoms/Icon/Icon";
import Image from "@app/components/atoms/Image/Image";
import { Body, Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { ContentfulAsset } from "@app/features/contentful/contentful";

import styles from "./Hero.module.scss";

export interface HeroProps {
  title: string;
  ctaLabel: string;
  backgroundImage: ContentfulAsset;
}
const Hero = ({ title, backgroundImage, ctaLabel }: HeroProps) => {
  return (
    <Section className={styles.section}>
      {backgroundImage && (
        <div className={styles.imageWrapper}>
          <Image
            src={backgroundImage.url}
            width={backgroundImage.width}
            height={backgroundImage.height}
            layout="fill"
            alt={backgroundImage.description}
            title={backgroundImage.title}
            objectFit="cover"
          />
        </div>
      )}
      <Container>
        <Row className={styles.textWrapper}>
          <Col xs={12} lg={10} xxl={9}>
            <Heading bold level={1}>
              {title}
            </Heading>
          </Col>
          <Col xs={12} className={styles.bottomCol}>
            {!!ctaLabel && (
              <Body className={styles.body} level={4} medium>
                <IconChevron className={styles.icon} />
                {ctaLabel}
              </Body>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(Hero);
