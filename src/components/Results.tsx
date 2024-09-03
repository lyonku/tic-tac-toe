import { FC } from "react";
import { useGameWinner } from "useStore";
import MemoCrossSVG from "./CrossSVG";
import MemoZeroSVG from "./ZeroSVG";

interface ResultsProps {}

const Results: FC<ResultsProps> = () => {
  const winner = useGameWinner();
  const isDraw = winner === "XO";
  let text = "Победитель!";

  if (isDraw) {
    text = "Ничья";
  }

  return (
    <div
      className={`results ${winner ? "active" : ""} ${isDraw ? "draw" : ""}`}
    >
      {isDraw && (
        <div className="results__draw">
          <MemoCrossSVG />
          <MemoZeroSVG />
        </div>
      )}
      <span className="results__text">{text}</span>
    </div>
  );
};

export default Results;
