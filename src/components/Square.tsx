import { FC } from "react";
import MemoCrossSVG from "./CrossSVG";
import MemoZeroSVG from "./ZeroSVG";

interface SquareProps {
  value: string | null | number;
  onSquareClick: () => void;
  winSqure?: boolean;
}

const Square: FC<SquareProps> = ({ value, onSquareClick, winSqure }) => {
  let element = null;

  switch (value) {
    case "O":
      element = <MemoZeroSVG animate={true} />;
      break;
    case "X":
      element = <MemoCrossSVG animate={true} />;
      break;
    default:
      element = null;
      break;
  }

  return (
    <td
      className={`square ${winSqure ? "highlighted" : ""}`}
      onClick={onSquareClick}
    >
      <div>{element}</div>
    </td>
  );
};

export default Square;
