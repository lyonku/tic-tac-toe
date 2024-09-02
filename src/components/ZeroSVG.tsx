import * as React from "react";

function ZeroSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 164 164" width="1em" height="1em" {...props}>
      <circle
        cx={82}
        cy={82}
        r={66.37}
        fill="none"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={31.25}
      />
    </svg>
  );
}

const MemoZeroSVG = React.memo(ZeroSVG);
export default MemoZeroSVG;
