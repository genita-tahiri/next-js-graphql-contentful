import { memo } from "react";

import { useRouter } from "next/router";
import { Col, Container, Row } from "react-grid-system";

import Image from "@app/components/atoms/Image/Image";
import Link from "@app/components/atoms/Link/Link";
import { LocalesEnum } from "@app/constants/locales.constants";
import { ContentfulAsset } from "@app/features/contentful/contentful";
import { NavigationLinksProps } from "@app/types/global.types";

import styles from "./Header.module.scss";
import Navigation from "./components/Navigation/Navigation";

export interface HeaderProps {
  title: string;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  logo: ContentfulAsset;
  menuLinksCollection: NavigationLinksProps;
}

const Header = ({
  logo,
  menuLinksCollection,
  facebookLink,
  instagramLink,
  twitterLink,
}: HeaderProps) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              {logo && (
                <Link href="/" title="home">
                  <Image
                    src={logo.url}
                    layout="intrinsic"
                    width={logo.width}
                    height={logo.height}
                    title={logo.title}
                    alt={logo.description}
                  />
                </Link>
              )}
            </div>
            <div
              className={styles.navWrapper}
              dir={locale === LocalesEnum.ARABIC ? "rtl" : "ltr"}
            >
              <Navigation
                links={menuLinksCollection}
                socialLinks={{ facebookLink, instagramLink, twitterLink }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default memo(Header);
