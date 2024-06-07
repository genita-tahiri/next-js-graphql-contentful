import * as React from "react";

function SvgIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 4.87402L9.35333 12.02C9.25967 12.1138 9.13255 12.1665 9 12.1665C8.86745 12.1665 8.74033 12.1138 8.64667 12.02L1.5 4.87402"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSvgIndicator = React.memo(SvgIndicator);
export default MemoSvgIndicator;
