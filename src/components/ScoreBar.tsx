import { FC } from "react";
import MemoCrossSVG from "./CrossSVG";
import MemoZeroSVG from "./ZeroSVG";
import { calculateWinner } from "helpers";

interface ScoreBarProps {
  squares: any[];
  playerStep: "X" | "O";
  score: { X: number | null; O: number | null };
}

const ScoreBar: FC<ScoreBarProps> = ({ playerStep, squares, score }) => {
  const [winner, winline] = calculateWinner(squares);

  return (
    <table className="score-bar">
      <tbody>
        <tr className="score-bar__row">
          <td
            className={`score-bar__cell ${
              playerStep === "X" && !winner ? "active" : ""
            }`}
          >
            <div className="score-bar__cell-wrap">
              <MemoCrossSVG />
              <span>{score.X ?? "-"}</span>
            </div>
          </td>
          <td
            className={`score-bar__cell ${
              playerStep === "O" && !winner ? "active" : ""
            }`}
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
