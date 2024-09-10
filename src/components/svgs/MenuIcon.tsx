import * as React from "react";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 512 512"
      data-name="Layer 1"
      id="prefix__Layer_1"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px}"
          }
        </style>
      </defs>
      <rect
        className="prefix__cls-1"
        height={49.25}
        rx={24.62}
        ry={24.62}
        width={180.83}
        x={207.48}
        y={175.98}
      />
      <circle className="prefix__cls-1" cx={148.57} cy={203.45} r={24.88} />
      <rect
        className="prefix__cls-1"
        height={49.25}
        rx={24.62}
        ry={24.62}
        width={180.83}
        x={207.48}
        y={283.66}
      />
      <circle className="prefix__cls-1" cx={148.57} cy={311.14} r={24.88} />
    </svg>
  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
