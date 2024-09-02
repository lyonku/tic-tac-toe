import * as React from "react";

function CrossSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="prefix___\u0421\u043B\u043E\u0439_2"
      viewBox="0 0 158.34 158.34"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:none;stroke:#e2b714;stroke-linecap:round;stroke-linejoin:round;stroke-width:31.25px}"
          }
        </style>
      </defs>
      <g id="prefix__Layer_1">
        <path
          className="prefix__cls-1"
          d="M142.72 15.62l-127.1 127.1M142.72 142.72L15.62 15.62"
        />
      </g>
    </svg>
  );
}

const MemoCrossSVG = React.memo(CrossSVG);
export default MemoCrossSVG;
