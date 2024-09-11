import { FC, useEffect } from "react";
import {
  handlePlay,
  useGameCurrent,
  useGamePlayer,
  useGameWinner,
} from "store/useGameStore";
import Square from "./components/Square";
import "./Board.scss";
import { useSettingsDifficulty, useSettingsMode } from "store/useSettingsStore";
import {
  calculateBotEasyMove,
  calculateBotHardMove,
  calculateBotMiddleMove,
  vibrate,
} from "helpers";

interface BoardProps {}

const Board: FC<BoardProps> = () => {
  const { squares, currentPlayer, currentMove } = useGameCurrent();
  const { winner } = useGameWinner();
  const player = useGamePlayer();
  const mode = useSettingsMode();
  const difficulty = useSettingsDifficulty();

  const isBotMove = mode === "withBot" && player !== currentPlayer;

  useEffect(() => {
    if (isBotMove && !winner) {
      const bot = player === "X" ? "O" : "X";
      let nextSquares: (null | "X" | "O")[] = [];

      switch (difficulty) {
        case "simple":
          nextSquares = calculateBotEasyMove(squares, bot);
          break;
        case "hard":
          nextSquares = calculateBotHardMove(squares, bot, currentMove);
          break;
        default:
          nextSquares = calculateBotMiddleMove(squares, bot);
          break;
      }

      setTimeout(() => {
        handlePlay(nextSquares);
        vibrate(5);
      }, 500);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, player]);

  function handleClick(i: number) {
    if (isBotMove) {
      return;
    }

    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = currentPlayer as "X" | "O" | null;

    handlePlay(nextSquares);
    vibrate(5);
  }

  const boardElements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return (
    <table className="board__table">
      <tbody>
        {boardElements.map((row, rowIndex) => {
          return (
            <tr className="board-row" key={rowIndex}>
              {row.map((element, elementIndex) => {
                return (
                  <Square
                    value={squares[element]}
                    onSquareClick={() => handleClick(element)}
                    element={element}
                    key={elementIndex}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
