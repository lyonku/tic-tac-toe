import { FC, useState } from "react";

import { useGameWinline } from "useStore";
import { location, positions } from "Constants";
import MemoZeroSVG from "components/ZeroSVG";
import MemoCrossSVG from "components/CrossSVG";

interface SquareProps {
  value: string | null | number;
  onSquareClick: () => void;
  element: number;
}

const Square: FC<SquareProps> = ({ value, onSquareClick, element }) => {
  const winline = useGameWinline();
  const winSquare = winline?.includes(element);
  const [positionClass, setPositionClass] = useState("");

  if (winSquare) {
    setTimeout(() => {
      setPositionClass(positions[winline.join()]);
    }, 1200);
  } else if (positionClass) {
    setPositionClass("");
  }

  let component = null;

  switch (value) {
    case "O":
      component = (
        <MemoZeroSVG
          animate={true}
          className={` ${winSquare ? "win-square" : ""} ${positionClass} ${
            location[element]
          }`}
        />
      );
      break;
    case "X":
      component = (
        <MemoCrossSVG
          animate={true}
          className={` ${winSquare ? "win-square" : ""} ${positionClass} ${
            location[element]
          }`}
        />
      );
      break;
    default:
      component = null;
      break;
  }

  return (
    <td className={`square`} onClick={onSquareClick}>
      <div>{component}</div>
    </td>
  );
};

export default Square;
