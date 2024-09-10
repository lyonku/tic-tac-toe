import { FC, useState } from "react";

import { location, positions } from "Constants";
import { useGameWinner } from "store/useGameStore";
import MemoCross from "components/svgs/Cross";
import MemoZero from "components/svgs/Zero";

interface SquareProps {
  value: string | null | number;
  onSquareClick: () => void;
  element: number;
}

const Square: FC<SquareProps> = ({ value, onSquareClick, element }) => {
  const { winline } = useGameWinner();
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
        <MemoZero
          animate={true}
          className={` ${winSquare ? "win-square" : ""} ${positionClass} ${
            location[element]
          }`}
        />
      );
      break;
    case "X":
      component = (
        <MemoCross
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
      <button>{component}</button>
    </td>
  );
};

export default Square;
