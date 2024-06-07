import { memo } from "react";

import { Document } from "@contentful/rich-text-types";
import { Col, Container, Row } from "react-grid-system";

import RichText from "@app/components/atoms/RichText/RichText";
import { Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";

import styles from "./Text.module.scss";

export interface TextProps {
  title: string;
  anchorId?: string;
  content: { json: Document };
}

const Text = ({ title, content, anchorId }: TextProps) => {
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
            {content && <RichText content={content.json} />}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(Text);
