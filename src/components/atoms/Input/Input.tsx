import React, { FC, memo } from "react";

import cx from "classnames";

import { FormFieldDef } from "@app/types/form.types";

import { Body } from "../Typography/Typography";
import styles from "./Input.module.scss";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  field?: FormFieldDef<HTMLInputElement>;
  label?: string;
  error?: boolean;
}

const Input: FC<InputProps> = memo(
  ({ field, className, label, error, ...rest }) => {
    return (
      <>
        {label && (
          <label htmlFor={rest.id} className={styles.label}>
            <Body level={3}>{label}</Body>
          </label>
        )}
        <input
          {...field}
          className={cx(styles.input, className, { [styles.error]: error })}
          {...(rest as JSX.IntrinsicElements["input"])}
        />
      </>
    );
  }
);

export default Input;
