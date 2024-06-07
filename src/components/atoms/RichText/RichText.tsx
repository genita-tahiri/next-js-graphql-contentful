import { memo } from "react";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import cx from "classnames";

import { Body, Heading } from "../Typography/Typography";
import styles from "./RichText.module.scss";

export interface RichTextProps {
  className?: string;
  content: Document;
}

const RichText = ({ className, content }: RichTextProps) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading level={2}>{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading level={3} medium>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading level={4} medium>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading level={4} medium>
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Body level={1}>{children}</Body>,
    },
  };
  return (
    <div className={cx(styles.container, className)}>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default memo(RichText);
