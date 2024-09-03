import { FC } from "react";
import MemoCrossSVG from "./CrossSVG";
import MemoZeroSVG from "./ZeroSVG";
import { useGameCurrentPlayer, useGameScore, useGameWinner } from "useStore";

interface ScoreBarProps {}

const ScoreBar: FC<ScoreBarProps> = () => {
  const currentPlayer = useGameCurrentPlayer();
  const winner = useGameWinner();
  const score = useGameScore();

  return (
    <table className="score-bar">
      <tbody>
        <tr className="score-bar__row">
          <td
            className={`score-bar__cell ${
              currentPlayer === "X" && !winner ? "active" : ""
            } ${winner === "X" ? "win" : ""}`}
          >
            <div className="score-bar__cell-wrap">
              <MemoCrossSVG />
              <span>{score.X ?? "-"}</span>
            </div>
          </td>
          <td
            className={`score-bar__cell ${
              currentPlayer === "O" && !winner ? "active" : ""
            } ${winner === "O" ? "win" : ""}`}
          >
            <div className="score-bar__cell-wrap">
              <MemoZeroSVG />
              <span>{score.O ?? "-"}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreBar;
