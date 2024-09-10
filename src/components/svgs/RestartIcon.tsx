import * as React from "react";

function RestartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#fff" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.364 3.058a.75.75 0 01.75.75V8.05a.75.75 0 01-.75.75h-4.243a.75.75 0 010-1.5h2.36a7.251 7.251 0 102.523 3.822.75.75 0 111.45-.387 8.75 8.75 0 11-2.84-4.447v-2.48a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoRestartIcon = React.memo(RestartIcon);
export default MemoRestartIcon;
