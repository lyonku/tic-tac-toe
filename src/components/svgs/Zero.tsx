import * as React from "react";
import { useEffect, useState } from "react";

interface ZeroProps extends React.SVGProps<SVGSVGElement> {
  animate?: boolean;
}

function Zero({ animate, ...props }: ZeroProps) {
  const circumference = 2 * Math.PI * 66.37;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (animate) {
      setOffset(0);
    } else {
      setOffset(circumference);
    }
  }, [animate, circumference]);

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
        strokeDasharray={animate ? circumference : 0}
        strokeDashoffset={offset}
        style={{
          transition: animate
            ? "stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      />
    </svg>
  );
}

const MemoZero = React.memo(Zero);
export default MemoZero;
