import * as React from "react";

interface CrossProps extends React.SVGProps<SVGSVGElement> {
  animate?: boolean;
}

function Cross({ animate = false, ...props }: CrossProps) {
  const lineLength = 127.1 * Math.sqrt(2);

  return (
    <svg viewBox="0 0 158.34 158.34" width="1em" height="1em" {...props}>
      <defs>
        <style>
          {`
            @keyframes drawLine {
              from {
                stroke-dashoffset: ${lineLength}px;
              }
              to {
                stroke-dashoffset: 0;
              }
            }
            .cls-1 {
              fill: none;
              stroke: #e2b714;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 31.25px;
            }
            .animate .cls-1 {
              animation: drawLine 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
          `}
        </style>
      </defs>
      <g id="Layer_1" className={animate ? "animate" : ""}>
        <path
          className="cls-1"
          d="M142.72 15.62l-127.1 127.1"
          strokeDasharray={lineLength}
        />
        <path
          className="cls-1"
          d="M142.72 142.72L15.62 15.62"
          strokeDasharray={lineLength}
        />
      </g>
    </svg>
  );
}

const MemoCross = React.memo(Cross);
export default MemoCross;
