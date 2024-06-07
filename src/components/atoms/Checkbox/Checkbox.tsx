import React, { ChangeEvent, useEffect, useState } from "react";

import cx from "classnames";

import { FormFieldDef } from "@app/types/form.types";

import { IconClose } from "../Icon/Icon";
import { Body } from "../Typography/Typography";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  field?: FormFieldDef;
  label?: string;
}
const Checkbox = ({
  field,
  className,
  name,
  label,
  ...rest
}: CheckboxProps) => {
  const [checkedState, setCheckedState] = useState(!!rest.checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedState(e.target.checked);
    field?.onChange(e);
  };

  const classString = cx(styles.wrapper, className, {
    [styles.checked]: checkedState,
  });

  useEffect(() => {
    setCheckedState(!!rest.checked);
  }, [rest.checked]);

  return (
    <label htmlFor={name}>
      <span className={classString}>
        <input
          name={name}
          type="checkbox"
          tabIndex={0}
          className={styles.input}
          checked={checkedState}
          onChange={handleChange}
          {...rest}
        />
        {checkedState ? (
          <IconClose className={styles.checkedIcon} />
        ) : (
          <div className={styles.checkbox} />
        )}
        <Body level={2} className={styles.label}>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </Body>
      </span>
    </label>
  );
};

export default Checkbox;
