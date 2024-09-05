import { FC } from "react";
import MemoCrossSVG from "./CrossSVG";
import MemoZeroSVG from "./ZeroSVG";
import {
  choosePlayer,
  useGameCurrent,
  useGameScore,
  useGameWinner,
} from "useStore";

interface ScoreBarProps {}

const ScoreBar: FC<ScoreBarProps> = () => {
  const { currentPlayer, currentMove } = useGameCurrent();
  const { winner } = useGameWinner();
  const score = useGameScore();

  const isCurrentPlayerX = currentPlayer === "X" && !winner;
  const isCurrentPlayerO = currentPlayer === "O" && !winner;
  const currentScoreX = score.X > 0 ? score.X : "-";
  const currentScoreO = score.O > 0 ? score.O : "-";
  const isXWin = score.X > score.O;
  const isOWin = score.O > score.X;
  const isFirstMove = currentMove === 0;

  const handleChoosePlayer = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;
    if (isFirstMove) {
      choosePlayer(target.id as "X" | "O");
    }
  };

  return (
    <div className="score-bar">
      <div
        className={`score-bar__cell ${isCurrentPlayerX ? "active" : ""} ${
          winner === "X" ? "win" : ""
        }`}
        onClick={handleChoosePlayer}
        id="X"
      >
        <MemoCrossSVG />
        <span>{currentScoreX}</span>
        <img
          className={`score-bar__winner ${isXWin ? "active" : ""}`}
          src="/crown.svg"
          alt="корона"
        />
      </div>
      <span>VS</span>
      <div
        className={`score-bar__cell ${isCurrentPlayerO ? "active" : ""} ${
          winner === "O" ? "win" : ""
        }`}
        onClick={handleChoosePlayer}
        id="O"
      >
        <MemoZeroSVG />
        <span>{currentScoreO}</span>
        <img
          className={`score-bar__winner ${isOWin ? "active" : ""}`}
          src="/crown.svg"
          alt="корона"
        />
      </div>
    </div>
  );
};

export default ScoreBar;
