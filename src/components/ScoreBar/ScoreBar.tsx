import { FC } from "react";
import {
  choosePlayer,
  useGameCurrent,
  useGameScore,
  useGameWinner,
} from "store/useGameStore";
import "./ScoreBar.scss";
import MemoZero from "components/svgs/Zero";
import MemoCross from "components/svgs/Cross";
import { useSettingsMode } from "store/useSettingsStore";

interface ScoreBarProps {}

const ScoreBar: FC<ScoreBarProps> = () => {
  const { currentPlayer, currentMove } = useGameCurrent();
  const { winner } = useGameWinner();
  const score = useGameScore();
  const mode = useSettingsMode();
  const isWithFriend = mode === "withFriend";

  const isCurrentPlayerX = currentPlayer === "X" && !winner;
  const isCurrentPlayerO = currentPlayer === "O" && !winner;
  const currentScoreX = score.X > 0 ? score.X : "-";
  const currentScoreO = score.O > 0 ? score.O : "-";
  const isXWin = score.X > score.O;
  const isOWin = score.O > score.X;
  const isFirstMove = currentMove === 0;

  const handleChoosePlayer = (id: "X" | "O") => {
    if (isFirstMove) {
      choosePlayer(id);
    }
  };

  return (
    <div className="score-bar">
      <button
        className={`score-bar__cell ${isCurrentPlayerX ? "active" : ""} ${
          isXWin ? "win" : ""
        }`}
        onClick={() => handleChoosePlayer("X")}
        disabled={isWithFriend}
      >
        <MemoCross />
        <span>{currentScoreX}</span>
        <img
          className={`score-bar__winner ${isXWin ? "active" : ""}`}
          src="/crown.svg"
          alt="корона"
        />
      </button>
      <span>VS</span>
      <button
        className={`score-bar__cell ${isCurrentPlayerO ? "active" : ""} ${
          isOWin ? "win" : ""
        }`}
        onClick={() => handleChoosePlayer("O")}
        disabled={isWithFriend}
      >
        <MemoZero />
        <span>{currentScoreO}</span>
        <img
          className={`score-bar__winner ${isOWin ? "active" : ""}`}
          src="/crown.svg"
          alt="корона"
        />
      </button>
    </div>
  );
};

export default ScoreBar;
