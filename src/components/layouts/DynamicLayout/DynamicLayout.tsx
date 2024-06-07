import { memo, ReactNode } from "react";

import { useRouter } from "next/router";

import FooterContentful from "@app/components/renderings/Footer/FooterContentful";
import HeaderContentful from "@app/components/renderings/Header/HeaderContentful";
import { LocalesEnum } from "@app/constants/locales.constants";
import { useSingleEntry } from "@app/features/contentful/contentful";

import styles from "./DynamicLayout.module.scss";

interface DynamicLayoutProps {
  children: ReactNode;
  contentfulId: string;
}

interface Layout {
  header: { sys: { id: string } };
  footer: { sys: { id: string } };
}

const DynamicLayout = ({ contentfulId, children }: DynamicLayoutProps) => {
  const { entry } = useSingleEntry<Layout>(contentfulId, "Layout");

  const router = useRouter();

  const { locale } = router;

  if (!entry) return null;

  const { header, footer } = entry;

  return (
    <>
      <div
        className={styles.wrapper}
        dir={locale === LocalesEnum.ARABIC ? "rtl" : "ltr"}
      >
        {header && <HeaderContentful contentfulId={header.sys.id} />}
        <main className={styles.content}>{children}</main>
        {footer && <FooterContentful contentfulId={footer.sys.id} />}
      </div>
    </>
  );
};

export default memo(DynamicLayout);
