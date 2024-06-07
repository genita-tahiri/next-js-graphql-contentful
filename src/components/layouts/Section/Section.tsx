import { memo } from "react";

import cx from "classnames";

import styles from "./Section.module.scss";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section className={cx(styles.container, className)} {...rest}>
      {children}
    </section>
  );
};

export default memo(Section);
