import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";

import Image from "@app/components/atoms/Image/Image";
import { Body } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { ContentfulAsset } from "@app/features/contentful/contentful";

import styles from "./BlogGallery.module.scss";

export interface BlogGalleryProps {
  title: string;
  imagesCollection: { items: ContentfulAsset[] };
}

const BlogGallery = ({ title, imagesCollection }: BlogGalleryProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        {imagesCollection?.items.length > 1 && (
          <Row justify="center">
            <Col xs={12} lg={6}>
              {imagesCollection?.items[0] && (
                <div className={styles.mainImage}>
                  <Image
                    src={imagesCollection.items[0].url}
                    width={imagesCollection.items[0].width}
                    height={imagesCollection.items[0].height}
                    layout="fill"
                    alt={imagesCollection.items[0].description}
                    title={imagesCollection.items[0].title}
                    objectFit="cover"
                  />
                </div>
              )}
            </Col>
            <Col xs={12} lg={4}>
              {imagesCollection?.items[1] && (
                <div className={styles.image}>
                  <Image
                    src={imagesCollection.items[1].url}
                    width={imagesCollection.items[1].width}
                    height={imagesCollection.items[1].height}
                    layout="responsive"
                    alt={imagesCollection.items[1].description}
                    title={imagesCollection.items[1].title}
                  />
                </div>
              )}
              {imagesCollection?.items[2] && (
                <div>
                  <Image
                    src={imagesCollection.items[2].url}
                    width={imagesCollection.items[2].width}
                    height={imagesCollection.items[2].height}
                    layout="responsive"
                    alt={imagesCollection.items[2].description}
                    title={imagesCollection.items[2].title}
                    objectFit="cover"
                  />
                </div>
              )}
            </Col>
          </Row>
        )}
        {imagesCollection?.items.length === 1 && (
          <Row justify="center" className={styles.row}>
            <Col xs={12} lg={2} className={styles.textCol}>
              <Body level={3}>{title}</Body>
            </Col>
            <Col xs={12} lg={8}>
              {imagesCollection?.items[0] && (
                <div className={styles.imageAlt}>
                  <Image
                    src={imagesCollection.items[0].url}
                    width={imagesCollection.items[0].width}
                    height={imagesCollection.items[0].height}
                    layout="responsive"
                    alt={imagesCollection.items[0].description}
                    title={imagesCollection.items[0].title}
                    objectFit="cover"
                  />
                </div>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </Section>
  );
};

export default memo(BlogGallery);
