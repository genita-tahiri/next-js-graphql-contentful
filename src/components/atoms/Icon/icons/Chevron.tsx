import * as React from "react";

function SvgChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.5594 13.9387C25.9744 13.3537 25.0294 13.3537 24.4444 13.9387L18.6244 19.7587L12.8044 13.9387C12.2194 13.3537 11.2744 13.3537 10.6894 13.9387C10.1044 14.5237 10.1044 15.4687 10.6894 16.0537L17.5744 22.9387C18.1594 23.5237 19.1044 23.5237 19.6894 22.9387L26.5744 16.0537C27.1444 15.4837 27.1444 14.5237 26.5594 13.9387Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgChevron = React.memo(SvgChevron);
export default MemoSvgChevron;
