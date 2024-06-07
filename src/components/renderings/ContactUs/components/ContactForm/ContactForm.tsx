import { memo, useState, useEffect } from "react";

import { useRouter } from "next/router";

import ThanksAR from "@app/assets/svg/contact/Thankyou_AR.svg";
import ThanksEN from "@app/assets/svg/contact/Thankyou_EN.svg";
import Button from "@app/components/atoms/Button/Button";
import Input from "@app/components/atoms/Input/Input";
import Textarea from "@app/components/atoms/Textarea/Textarea";
import { Body } from "@app/components/atoms/Typography/Typography";
import { LocalesEnum } from "@app/constants/locales.constants";
import { emailRegex, phoneRegex } from "@app/helpers/util.helpers";

import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  phoneLabel: string;
  ctaLabel: string;
  status?: string;
  formMessage: string;
  successMessage?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  onValidated?: (object: unknown) => void; // TODO: to be used with mailchimp integration
  onFormSuccess?: (status: boolean) => void;
}

const ContactForm = ({
  nameLabel,
  emailLabel,
  messageLabel,
  phoneLabel,
  ctaLabel,
  status,
  successMessage,
  formMessage,
  onFormSuccess,
}: ContactFormProps) => {
  const router = useRouter();
  const { locale } = router;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const successForm = status === "success";

  const extractErrorMessage = (text: string) => {
    const tagStartsAt = text?.indexOf("<");
    return text?.slice(0, tagStartsAt);
  };

  useEffect(() => {
    onFormSuccess(successForm);
  }, [onFormSuccess, successForm]);

  const validateEmail = () => {
    if (!email || !emailRegex.test(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const validateName = () => {
    if (name) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };

  const validatePhone = () => {
    if (!phone || !phoneRegex.test(phone)) {
      setIsValidPhone(false);
    } else {
      setIsValidPhone(true);
    }
  };

  const validateMessage = () => {
    if (message) {
      setIsValidMessage(true);
    } else {
      setIsValidMessage(false);
    }
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onPhoneChange = e => {
    setPhone(e.target.value);
  };

  const onMessageChange = e => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
    validateEmail();
    validateName();
    validateMessage();
    validatePhone();

    if (email && emailRegex.test(email) && !!name && !!message) {
      console.log({
        EMAIL: email,
        NAME: name,
        MESSAGE: message,
        PHONE: phone,
        LANG: locale,
      });
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    if (successForm) {
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
    }
  }, [successForm]);

  return (
    <>
      {!!formMessage && !successForm && (
        <Body level={3} className={styles.formMessage}>
          {extractErrorMessage(formMessage)}
        </Body>
      )}

      {!!successMessage && successForm && (
        <div className={styles.successWrapper}>
          {locale === LocalesEnum.ARABIC ? (
            <ThanksAR className={styles.icon} />
          ) : (
            <ThanksEN className={styles.icon} />
          )}
          <Body level={2} className={styles.formMessage}>
            {successMessage}
          </Body>
        </div>
      )}
      {!successForm && (
        <>
          <Input
            className={styles.input}
            placeholder={nameLabel}
            type="text"
            error={!isValidName}
            onBlur={validateName}
            required
            value={name}
            onChange={onNameChange}
          />
          <Input
            className={styles.input}
            placeholder={emailLabel}
            type="email"
            required
            error={!isValidEmail}
            onBlur={validateEmail}
            value={email}
            onChange={onEmailChange}
          />
          <Input
            className={styles.input}
            placeholder={phoneLabel}
            type="text"
            error={!isValidPhone}
            onBlur={validatePhone}
            required
            value={phone}
            onChange={onPhoneChange}
          />
          <Textarea
            className={styles.textarea}
            required
            error={!isValidMessage}
            placeholder={messageLabel}
            value={message}
            onBlur={validateMessage}
            onChange={onMessageChange}
          />
          <Button onClick={onSubmit}>{ctaLabel}</Button>
        </>
      )}
    </>
  );
};

export default memo(ContactForm);
