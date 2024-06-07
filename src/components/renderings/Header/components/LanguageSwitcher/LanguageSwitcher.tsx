import { memo } from "react";

import cx from "classnames";
import { useRouter } from "next/router";

import { Body } from "@app/components/atoms/Typography/Typography";
import { LocalesEnum } from "@app/constants/locales.constants";

interface LanguageSwitcherProps {
  classNames?: string;
}

const LanguageSwitcher = ({ classNames }: LanguageSwitcherProps) => {
  const router = useRouter();

  const { locale } = router;

  const isEn = locale === LocalesEnum.ENGLISH;

  const isAr = locale === LocalesEnum.ARABIC;

  const languageSwitcher = (lang: string) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  return (
    <div className={cx(classNames)}>
      {isAr && (
        <button
          title="English"
          onClick={() => languageSwitcher(LocalesEnum.ENGLISH)}
        >
          <Body>English</Body>
        </button>
      )}

      {isEn && (
        <button
          title="Arabic"
          onClick={() => languageSwitcher(LocalesEnum.ARABIC)}
        >
          <Body>العربية</Body>
        </button>
      )}
    </div>
  );
};

export default memo(LanguageSwitcher);
