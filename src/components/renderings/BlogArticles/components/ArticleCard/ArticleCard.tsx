import { memo } from "react";

// eslint-disable-next-line import/no-duplicates
import { format } from "date-fns";
// eslint-disable-next-line import/no-duplicates
import arLocale from "date-fns/locale/ar";
import { useRouter } from "next/router";

import { IconCircularArrow } from "@app/components/atoms/Icon/Icon";
import Image from "@app/components/atoms/Image/Image";
import Link from "@app/components/atoms/Link/Link";
import { Body, Heading } from "@app/components/atoms/Typography/Typography";
import { LocalesEnum } from "@app/constants/locales.constants";
import { ArticleProps } from "@app/types/global.types";

import styles from "./ArticleCard.module.scss";

const ArticleCard = ({ title, image, sys, slug, ctaLabel }: ArticleProps) => {
  const router = useRouter();

  const { locale } = router;

  const ArticleLink = ({ children }) => {
    return (
      <Link className={styles.link} href={`/media-centre/${slug}`}>
        {children}
      </Link>
    );
  };
  return (
    <div className={styles.card}>
      {image && (
        <ArticleLink>
          <div className={styles.imageWrapper}>
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.description}
              title={image.title}
              objectFit="cover"
            />
          </div>
        </ArticleLink>
      )}
      {sys?.firstPublishedAt && (
        <Body bold className={styles.date}>
          {format(new Date(sys.firstPublishedAt), "dd MMM Y", {
            locale: locale === LocalesEnum.ARABIC ? arLocale : null,
          })}
        </Body>
      )}
      {!!title && (
        <ArticleLink>
          <Heading className={styles.title} level={5} bold>
            {title}
          </Heading>
        </ArticleLink>
      )}
      <ArticleLink>
        <IconCircularArrow className={styles.icon} />
        {ctaLabel}
      </ArticleLink>
    </div>
  );
};

export default memo(ArticleCard);
