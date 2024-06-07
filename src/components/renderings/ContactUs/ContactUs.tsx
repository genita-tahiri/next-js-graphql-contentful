import { memo, useState } from "react";

import { useRouter } from "next/router";
import { Col, Container, Row } from "react-grid-system";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Image from "@app/components/atoms/Image/Image";
import { Body, Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { LocalesEnum } from "@app/constants/locales.constants";
import { ContentfulAsset } from "@app/features/contentful/contentful";

import styles from "./ContactUs.module.scss";
import ContactForm from "./components/ContactForm/ContactForm";

export interface ContactUsProps {
  title: string;
  anchorId: string;
  description: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  messageLabel: string;
  ctaLabel: string;
  successMessage?: string;
  backgroundImage: ContentfulAsset;
}

const ContactUs = ({
  title,
  anchorId,
  description,
  backgroundImage,
  nameLabel,
  emailLabel,
  phoneLabel,
  ctaLabel,
  messageLabel,
  successMessage,
}: ContactUsProps) => {
  const [isSuccessForm, setIsSuccessForm] = useState(false);

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_URL ?? "";

  const router = useRouter();

  const { locale } = router;

  return (
    <Section id={anchorId ?? ""} className={styles.section}>
      {backgroundImage && (
        <div className={styles.imageWrapper}>
          <Image
            src={backgroundImage.url}
            width={backgroundImage.width}
            height={backgroundImage.height}
            layout="fill"
            alt={backgroundImage.description}
            title={backgroundImage.title}
            objectFit="cover"
          />
        </div>
      )}
      <div className={styles.wrapper}>
        <Container>
          <Row justify={locale === LocalesEnum.ARABIC ? "start" : "end"}>
            <Col xs={12} lg={6} xl={5}>
              <div className={styles.formWrapper}>
                <Heading level={3} bold className={styles.title}>
                  {title}
                </Heading>

                {!isSuccessForm && (
                  <Body className={styles.description}>{description}</Body>
                )}

                <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => (
                    <ContactForm
                      nameLabel={nameLabel}
                      messageLabel={messageLabel}
                      emailLabel={emailLabel}
                      ctaLabel={ctaLabel}
                      status={status}
                      onValidated={subscribe}
                      formMessage={message}
                      phoneLabel={phoneLabel}
                      successMessage={successMessage}
                      onFormSuccess={setIsSuccessForm}
                    />
                  )}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
};

export default memo(ContactUs);
