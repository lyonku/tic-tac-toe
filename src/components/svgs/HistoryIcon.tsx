import * as React from "react";

function HistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069 3.82 3.82 3.86 9.993.064 13.788-3.795 3.795-9.968 3.756-13.788-.064a9.812 9.812 0 01-2.798-8.28.75.75 0 111.487.203 8.312 8.312 0 002.371 7.017c3.245 3.244 8.468 3.263 11.668.064 3.199-3.2 3.18-8.423-.064-11.668-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 11-.007 1.5l-2.546-.012a.75.75 0 01-.746-.747L3.575 4.33a.75.75 0 111.5-.008l.004.748zm6.92 2.18a.75.75 0 01.75.75v3.69l2.281 2.28a.75.75 0 11-1.06 1.061l-2.72-2.72V8a.75.75 0 01.75-.75z"
      />
    </svg>
  );
}

const MemoHistoryIcon = React.memo(HistoryIcon);
export default MemoHistoryIcon;
