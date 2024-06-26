import * as React from "react";

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H11.8808V15.1578H9.516V12.4913H11.8808V10.5249C11.8808 8.2427 13.3119 7 15.403 7C16.4047 7 17.265 7.07288 17.516 7.10528V9.49055L16.066 9.49129C14.929 9.49129 14.709 10.0177 14.709 10.7892V12.492H17.4207L17.0677 15.1585H14.709V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgFacebook = React.memo(SvgFacebook);
export default MemoSvgFacebook;
