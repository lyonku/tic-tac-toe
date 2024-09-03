import { FC } from "react";
import {
  handlePlay,
  restartGame,
  useGameCurrentPlayer,
  useGameCurrentSquares,
  useGameWinner,
} from "useStore";
import Square from "./components/Square";
import "./Board.scss";

interface BoardProps {}

const Board: FC<BoardProps> = () => {
  const squares = useGameCurrentSquares();
  const currentPlayer = useGameCurrentPlayer();
  const winner = useGameWinner();

  function handleClick(i: number) {
    if (squares[i] || winner) {
      if (winner) {
        restartGame();
      }
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = currentPlayer;

    handlePlay(nextSquares);
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
