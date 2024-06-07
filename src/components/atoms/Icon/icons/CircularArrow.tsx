import * as React from "react";

function SvgCircularArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.5C7.029 21.5 3 17.471 3 12.5C3 7.529 7.029 3.5 12 3.5C16.971 3.5 21 7.529 21 12.5C21 17.471 16.971 21.5 12 21.5Z"
        fill="#7BDECA"
        stroke="#7BDECA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12.5H8"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 9.5L16 12.5L13 15.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSvgCircularArrow = React.memo(SvgCircularArrow);
export default MemoSvgCircularArrow;
