import { memo } from "react";

import {
  ContenfulWrapperProps,
  useSingleEntry,
} from "@app/features/contentful/contentful";

import ContactUs, { ContactUsProps } from "./ContactUs";

const ContactUsContentful = ({ contentfulId, type }: ContenfulWrapperProps) => {
  const { entry } = useSingleEntry<ContactUsProps>(contentfulId, type);

  if (!entry) return null;

  return <ContactUs {...entry} />;
};

export default memo(ContactUsContentful);
