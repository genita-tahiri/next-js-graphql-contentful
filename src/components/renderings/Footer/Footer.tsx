import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";
import { useMedia } from "react-media";

import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
} from "@app/components/atoms/Icon/Icon";
import Image from "@app/components/atoms/Image/Image";
import Link from "@app/components/atoms/Link/Link";
import { Body } from "@app/components/atoms/Typography/Typography";
import { GLOBAL_MEDIA_QUERIES } from "@app/constants/breakpoint.constants";
import { ContentfulAsset } from "@app/features/contentful/contentful";

import LanguageSwitcher from "../Header/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Footer.module.scss";

export interface FooterProps {
  text: string;
  copyrights: string;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  linkedInLink: string;
  secondaryLogo: ContentfulAsset;
  logo: ContentfulAsset;
}

const Footer = ({
  text,
  logo,
  copyrights,
  secondaryLogo,
  facebookLink,
  twitterLink,
  instagramLink,
  linkedInLink,
}: FooterProps) => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const secLogo = (
    <div className={styles.secondaryLogo}>
      {secondaryLogo && (
        <Image
          src={secondaryLogo.url}
          layout="intrinsic"
          width={secondaryLogo.width}
          height={secondaryLogo.height}
          title={secondaryLogo.title}
          alt={secondaryLogo.description}
        />
      )}
    </div>
  );

  const socialLinks = (
    <div className={styles.socialLinks}>
      {!!facebookLink && (
        <Link
          href={facebookLink}
          title="Facebook"
          className={styles.socialLink}
        >
          <IconFacebook />
        </Link>
      )}
      {!!instagramLink && (
        <Link
          href={instagramLink}
          title="Instagram"
          className={styles.socialLink}
        >
          <IconInstagram />
        </Link>
      )}
      {!!twitterLink && (
        <Link href={twitterLink} title="Twitter" className={styles.socialLink}>
          <IconTwitter />
        </Link>
      )}
      {!!linkedInLink && (
        <Link
          href={linkedInLink}
          title="LinkedIn"
          className={styles.socialLink}
        >
          <IconLinkedIn />
        </Link>
      )}
    </div>
  );
  return (
    <footer className={styles.footer}>
      <Container>
        <Row justify="between">
          <Col xs={12} lg={4}>
            <div className={styles.wrapper}>
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

              <LanguageSwitcher classNames={styles.languageSwitcher} />
            </div>

            {!matches.tabletLandscape && <>{secLogo}</>}

            {!!text && (
              <Body level={3} className={styles.text}>
                {text}
              </Body>
            )}

            {!matches.tabletLandscape && <>{socialLinks}</>}

            {!!copyrights && (
              <Body level={3} className={styles.copyrights}>
                {copyrights}
              </Body>
            )}
          </Col>
          <Col xs={12} lg={3} className={styles.col}>
            {matches.tabletLandscape && (
              <>
                {secLogo}
                {socialLinks}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default memo(Footer);
