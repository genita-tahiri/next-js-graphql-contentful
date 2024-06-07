import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";

import { Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";

import styles from "./BlogHeader.module.scss";

export interface BlogHeaderProps {
  title: string;
}

const BlogHeader = ({ title }: BlogHeaderProps) => {
  return (
    <Section className={styles.section}>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Heading bold className={styles.title}>
              {title}
            </Heading>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default memo(BlogHeader);
