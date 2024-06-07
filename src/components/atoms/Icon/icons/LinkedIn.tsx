import * as React from "react";

function SvgLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.262 30H2.457V11.303h5.805v18.695zM5.354 8.754a3.378 3.378 0 113.36-3.396 3.39 3.39 0 01-3.36 3.396zM29.988 30h-5.793v-9.1c0-2.168-.044-4.95-3.015-4.95-3.016 0-3.48 2.356-3.48 4.794v9.256h-5.798V11.304h5.567v2.55h.081a6.1 6.1 0 015.492-3.016c5.875 0 6.956 3.87 6.956 8.894V30h-.01z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgLinkedIn = React.memo(SvgLinkedIn);
export default MemoSvgLinkedIn;
