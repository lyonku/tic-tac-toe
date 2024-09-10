import { FC } from "react";
import { useGameWinner } from "store/useGameStore";
import MemoZero from "components/svgs/Zero";
import MemoCross from "components/svgs/Cross";
import "./Results.scss";

interface ResultsProps {}

const Results: FC<ResultsProps> = () => {
  const { winner } = useGameWinner();

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
          <MemoCross />
          <MemoZero />
        </div>
      )}
      <span className="results__text">{text}</span>
    </div>
  );
};

export default Results;
