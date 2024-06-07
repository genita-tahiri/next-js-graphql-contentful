import { memo } from "react";

import { Document } from "@contentful/rich-text-types";
import { Col, Container, Row } from "react-grid-system";

import RichText from "@app/components/atoms/RichText/RichText";
import { Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";

import styles from "./TwoColumnsText.module.scss";

export interface TwoColumnsTextProps {
  title: string;
  anchorId?: string;
  leftColumnText: {
    json: Document;
  };
  leftColumnTitle: string;
  rightColumnTitle: string;
  rightColumnText: {
    json: Document;
  };
}

const TwoColumnsText = ({
  title,
  anchorId,
  leftColumnTitle,
  rightColumnTitle,
  leftColumnText,
  rightColumnText,
}: TwoColumnsTextProps) => {
  return (
    <Section id={anchorId ?? ""}>
      <Container>
        <Row justify="center">
          <Col xs={12} lg={10}>
            {!!title && (
              <Heading level={4} className={styles.title}>
                {title}
              </Heading>
            )}
          </Col>
          <Col xs={12} lg={5} className={styles.firstCol}>
            {!!leftColumnTitle && (
              <Heading level={5} bold className={styles.subtitle}>
                {leftColumnTitle}
              </Heading>
            )}
            {leftColumnText && <RichText content={leftColumnText.json} />}
          </Col>
          <Col xs={12} lg={5}>
            {!!rightColumnTitle && (
              <Heading level={5} bold className={styles.subtitle}>
                {rightColumnTitle}
              </Heading>
            )}
            {rightColumnText && <RichText content={rightColumnText.json} />}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(TwoColumnsText);
