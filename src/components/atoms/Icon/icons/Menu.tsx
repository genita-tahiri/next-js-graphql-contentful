import * as React from "react";

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="7.5"
        y1="17.2142"
        x2="30"
        y2="17.2142"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <rect
        y="17.4142"
        width="3.2"
        height="3.2"
        transform="rotate(-45 0 17.4142)"
        fill="currentColor"
      />
      <line
        x1="7.5"
        y1="7.7799"
        x2="30"
        y2="7.7799"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <rect
        y="7.9799"
        width="3.2"
        height="3.2"
        transform="rotate(-45 0 7.9799)"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenu = React.memo(SvgMenu);
export default MemoSvgMenu;
