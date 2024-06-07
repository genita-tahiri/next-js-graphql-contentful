import * as React from "react";

function SvgQuote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.7402 39V20.2235C23.7402 15.1072 25.1115 10.9098 27.8543 7.63137C30.5971 4.35294 34.3123 2.14248 39 1V9.27059C37.5538 9.71765 36.3819 10.2889 35.4843 10.9843C34.5866 11.6301 33.8885 12.4 33.3898 13.2941C32.8911 14.1882 32.5669 15.2314 32.4173 16.4235C32.2677 17.566 32.1929 18.8327 32.1929 20.2235V22.3098H39V39H23.7402ZM1 39V20.2235C1 15.1072 2.37139 10.9098 5.11417 7.63137C7.85696 4.35294 11.5722 2.14248 16.2598 1V9.27059C14.8136 9.71765 13.6417 10.2889 12.7441 10.9843C11.8465 11.6301 11.1483 12.4 10.6496 13.2941C10.2008 14.1882 9.87664 15.2314 9.67717 16.4235C9.52756 17.566 9.45276 18.8327 9.45276 20.2235V22.3098H16.2598V39H1Z"
        stroke="currentColor"
      />
    </svg>
  );
}

const MemoSvgQuote = React.memo(SvgQuote);
export default MemoSvgQuote;