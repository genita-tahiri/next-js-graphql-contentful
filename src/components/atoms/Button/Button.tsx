import { ButtonHTMLAttributes, memo } from "react";

import cx from "classnames";
import { LinkProps } from "next/link";

import Link from "../Link/Link";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The secondary button type does not have a background.
   */
  buttonType?: "primary" | "outline";
  /**
   * Props for the NextJS link component.
   */
  link?: LinkProps;

  loading?: boolean;
}

const Button = ({
  buttonType = "primary",
  children,
  className,
  link,
  ...rest
}: ButtonProps) => {
  const buttonClassNames = cx(styles.button, className, {
    [styles.outline]: buttonType === "outline",
  });

  return (
    <>
      {!!link && !!link.href ? (
        <Link {...link} className={buttonClassNames} title={rest.title}>
          {children}
        </Link>
      ) : (
        <button {...rest} className={buttonClassNames}>
          {children}
        </button>
      )}
    </>
  );
};

export default memo(Button);
