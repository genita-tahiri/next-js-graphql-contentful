import { memo } from "react";

import NextImage, { ImageProps } from "next/image";

const Image = ({ src, ...rest }: ImageProps) => {
  const isRelativeURL = src.toString().startsWith("//");

  return <NextImage src={isRelativeURL ? `https:${src}` : src} {...rest} />;
};

export default memo(Image);
