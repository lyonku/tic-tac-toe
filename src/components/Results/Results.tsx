import { FC } from "react";
import { useGameWinner } from "store/useGameStore";
import MemoZero from "components/svgs/Zero";
import MemoCross from "components/svgs/Cross";
import "./Results.scss";
import { vibrate } from "helpers";

interface ResultsProps {}

const Results: FC<ResultsProps> = () => {
  const { winner } = useGameWinner();

  const isDraw = winner === "XO";
  let text = "Победитель!";

  if (isDraw) {
    text = "Ничья";
    setTimeout(() => {
      vibrate(50);
    }, 300);
    setTimeout(() => {
      vibrate(100);
    }, 350);
  }

  if (winner && !isDraw) {
    setTimeout(() => {
      vibrate(50);
    }, 300);
  }

  return (
    <div
      className={`results ${winner ? "active" : ""} ${isDraw ? "draw" : ""}`}
    >
      {isDraw && (
        <div className="results__draw">
          <MemoCross />
          <MemoZero />
        </div>
      )}
      <span className="results__text">{text}</span>
    </div>
  );
};

export default Results;
