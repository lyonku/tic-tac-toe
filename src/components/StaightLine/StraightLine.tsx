import { FC, useEffect, useState } from "react";
import { useGameWinline, useGameWinner } from "useStore";
import "./StraightLine.scss";
import { positions } from "Constants";

interface StraightLineProps {}

const StraightLine: FC<StraightLineProps> = () => {
  const winner = useGameWinner();
  const winline = useGameWinline();
  const [closeLine, setCloseLine] = useState(false);
  const isDraw = winner === "XO";

  useEffect(() => {
    if (winner && !isDraw) {
      setTimeout(() => {
        setCloseLine(true);
      }, 1200);
    } else {
      setCloseLine(false);
    }
  }, [winner]);

  return (
    <div
      className={`straight-line ${winner && !isDraw ? "start" : ""} ${
        winner && !isDraw ? positions[winline.join()] : ""
      } ${closeLine ? "close" : ""}`}
      style={{ backgroundColor: winner === "X" ? "#e2b714" : "#999999" }}
    ></div>
  );
};

export default StraightLine;
