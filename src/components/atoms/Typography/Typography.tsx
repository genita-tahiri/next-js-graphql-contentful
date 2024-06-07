import { HTMLAttributes, memo } from "react";

import cx from "classnames";

import styles from "./Typography.module.scss";
import { HTagLevelType, HTagProps } from "./types/typography.types";

const hTag = <T,>(level: HTagLevelType) => `h${level}` as React.ElementType<T>;

export interface HeadingProps extends HTagProps {
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4 | 5;
  medium?: boolean;
  bold?: boolean;
}

export const Heading = memo(
  ({
    children,
    className,
    hTagLevel,
    level = 1,
    medium,
    bold,
    ...rest
  }: HeadingProps) => {
    const H = hTag<HeadingProps>(hTagLevel ?? level);
    return (
      <H
        className={cx(styles.heading, styles[`heading${level}`], className, {
          [styles.medium]: medium,
          [styles.bold]: bold,
        })}
        {...rest}
      >
        {children}
      </H>
    );
  }
);

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4;
  /**
   * Toggles whether to output the children wrapped in a paragraph,
   * or a div with the relevant Body styling attached.
   */
  richtext?: boolean;
  medium?: boolean;
  bold?: boolean;
}

export const Body = memo(
  ({
    children,
    className,
    medium,
    level = 1,
    richtext,
    bold,
    ...rest
  }: BodyProps) => {
    const Wrapper = (richtext ? "div" : "p") as React.ElementType;
    return (
      <Wrapper
        className={cx(styles.body, styles[`body${level}`], className, {
          [styles.medium]: medium,
          [styles.bold]: bold,
        })}
        {...rest}
      >
        {children}
      </Wrapper>
    );
  }
);
