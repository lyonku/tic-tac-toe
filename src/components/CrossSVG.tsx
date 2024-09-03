import * as React from "react";
import { useEffect, useState } from "react";

interface CrossSVGProps extends React.SVGProps<SVGSVGElement> {
  animate?: boolean;
}

function CrossSVG({ animate, ...props }: CrossSVGProps) {
  const lineLength = 127.1 * Math.sqrt(2);
  const [offset, setOffset] = useState(lineLength);

  useEffect(() => {
    if (animate) {
      setOffset(lineLength);
      setTimeout(() => {
        setOffset(0);
      }, 0);
    }
  }, [animate, lineLength]);

  return (
    <svg
      viewBox="0 0 158.34 158.34"
      width="1em"
      height="1em"
      {...props}
      style={{ rotate: "-90deg" }}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: none;
              stroke: #e2b714;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 31.25px;
              transition: ${
                animate
                  ? "stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none"
              };
            }
          `}
        </style>
      </defs>
      <g id="Layer_1">
        <path
          className="cls-1"
          d="M142.72 15.62l-127.1 127.1"
          strokeDasharray={lineLength}
          strokeDashoffset={animate ? offset : 0}
        />
        <path
          className="cls-1"
          d="M142.72 142.72L15.62 15.62"
          strokeDasharray={lineLength}
          strokeDashoffset={animate ? offset : 0}
        />
      </g>
    </svg>
  );
}

const MemoCrossSVG = React.memo(CrossSVG);
export default MemoCrossSVG;
