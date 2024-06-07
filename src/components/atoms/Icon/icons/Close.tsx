import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7365 22.5363C21.2335 23.0333 22.0393 23.0333 22.5363 22.5363C23.0333 22.0393 23.0333 21.2334 22.5363 20.7364L15.7999 14L22.5363 7.26361C23.0333 6.76657 23.0333 5.96073 22.5363 5.4637C22.0393 4.96667 21.2335 4.96667 20.7365 5.4637L14 12.2001L7.26363 5.46369C6.76659 4.96665 5.96075 4.96665 5.46372 5.46369C4.96668 5.96072 4.96668 6.76656 5.46372 7.2636L12.2001 14L5.46372 20.7364C4.96668 21.2334 4.96668 22.0393 5.46372 22.5363C5.96075 23.0334 6.76659 23.0334 7.26363 22.5363L14 15.7999L20.7365 22.5363Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgClose = React.memo(SvgClose);
export default MemoSvgClose;
