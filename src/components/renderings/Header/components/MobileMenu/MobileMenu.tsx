import { memo } from "react";

import cx from "classnames";
import { useRouter } from "next/router";

import {
  IconClose,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "@app/components/atoms/Icon/Icon";
import Link from "@app/components/atoms/Link/Link";
import { Heading } from "@app/components/atoms/Typography/Typography";
import { LocalesEnum } from "@app/constants/locales.constants";
import { NavigationLinksProps } from "@app/types/global.types";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./MobileMenu.module.scss";

export interface MobileMenuProps {
  opened: boolean;
  links: NavigationLinksProps;
  socialLinks: {
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
  };
  close: () => void;
}
const MobileMenu = ({ opened, close, links, socialLinks }: MobileMenuProps) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <div className={cx(styles.menu, { [styles.opened]: opened })}>
      <button className={styles.closeBtn} onClick={close}>
        <IconClose />
      </button>
      <div className={styles.linksWrapper}>
        {links?.items.length > 0 &&
          links.items.map(link => (
            <Link
              key={link.sys.id}
              href={link.link}
              className={styles.link}
              title={link.label}
              clickHandler={close}
              role="presentation"
            >
              <Heading level={locale === LocalesEnum.ARABIC ? 4 : 3} bold>
                {link.label}
              </Heading>
            </Link>
          ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.social}>
          {!!socialLinks.facebookLink && (
            <Link
              href={socialLinks.facebookLink}
              title="Facebook"
              className={styles.socialLink}
            >
              <IconFacebook />
            </Link>
          )}
          {!!socialLinks.instagramLink && (
            <Link
              href={socialLinks.instagramLink}
              title="Instagram"
              className={styles.socialLink}
            >
              <IconInstagram />
            </Link>
          )}
          {!!socialLinks.twitterLink && (
            <Link
              href={socialLinks.twitterLink}
              title="Twitter"
              className={styles.socialLink}
            >
              <IconTwitter />
            </Link>
          )}
        </div>
        <LanguageSwitcher classNames={styles.languageSwitcher} />
      </div>
    </div>
  );
};

export default memo(MobileMenu);
