import React, { FC, memo } from "react";

import cx from "classnames";

import styles from "./Textarea.module.scss";

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  error?: boolean;
}
const Textarea: FC<TextareaProps> = memo(
  ({ className, error, label, ...rest }) => {
    return (
      <>
        {label && (
          <label htmlFor={rest.name} className={styles.label}>
            <p>{label}</p>
          </label>
        )}
        <textarea
          className={cx(styles.textarea, className, { [styles.error]: error })}
          {...(rest as JSX.IntrinsicElements["textarea"])}
        />
      </>
    );
  }
);

export default Textarea;
