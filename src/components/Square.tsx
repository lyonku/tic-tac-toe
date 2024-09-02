import { FC, useState } from "react";
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
      element = <MemoZeroSVG />;
      break;
    case "X":
      element = <MemoCrossSVG />;
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
      {element}
    </td>
  );
};

export default Square;
