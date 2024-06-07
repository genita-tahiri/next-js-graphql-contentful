import { memo, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { useMedia } from "react-media";

import { IconMenu } from "@app/components/atoms/Icon/Icon";
import Link from "@app/components/atoms/Link/Link";
import { Body } from "@app/components/atoms/Typography/Typography";
import { GLOBAL_MEDIA_QUERIES } from "@app/constants/breakpoint.constants";
import { NavigationLinksProps } from "@app/types/global.types";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  links: NavigationLinksProps;
  socialLinks: {
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
  };
}

const Navigation = ({ links, socialLinks }: NavigationProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const router = useRouter();

  const { locale } = router;

  useEffect(() => {
    setMenuOpened(false);
  }, [locale]);

  const desktopNav = (
    <>
      <div className={styles.nav}>
        {links?.items.length > 0 &&
          links.items.map(link => (
            <Link
              key={link.sys.id}
              href={link.link}
              className={styles.link}
              title={link.label}
            >
              <Body level={1} bold>
                {link.label}
              </Body>
            </Link>
          ))}
      </div>
      <LanguageSwitcher classNames={styles.languageSwitcher} />
    </>
  );

  const mobileNav = (
    <>
      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpened(!menuOpened)}
        aria-label="Menu"
      >
        <IconMenu className={styles.icon} />
      </button>
      <MobileMenu
        opened={menuOpened}
        links={links}
        close={() => setMenuOpened(false)}
        socialLinks={socialLinks}
      />
    </>
  );

  return matches.tabletLandscape ? desktopNav : mobileNav;
};

export default memo(Navigation);
