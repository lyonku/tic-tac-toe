import * as React from "react";
import { useEffect, useState } from "react";

interface ZeroProps extends React.SVGProps<SVGSVGElement> {
  animate?: boolean;
}

function Zero({ animate, ...props }: ZeroProps) {
  const circle = 2 * Math.PI * 66.37;
  const [offset, setOffset] = useState(circle);

  useEffect(() => {
    if (animate) {
      setOffset(0);
    } else {
      setOffset(circle);
    }
  }, [animate, circle]);

  return (
    <svg viewBox="0 0 164 164" width="1em" height="1em" {...props}>
      <style>
        {`
          @keyframes fillCircle {
            from {
              stroke-dashoffset: ${circle}px;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .circle-animation {
            animation: fillCircle 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}
      </style>
      <circle
        cx={82}
        cy={82}
        r={66.37}
        fill="none"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={31.25}
        strokeDasharray={circle}
        strokeDashoffset={animate ? offset : 0}
        className={animate ? "circle-animation" : ""}
      />
    </svg>
  );
}

const MemoZero = React.memo(Zero);
export default MemoZero;
