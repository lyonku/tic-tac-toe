import { FC } from "react";
import { handlePlay, useGameCurrent, useGameWinner } from "useStore";
import Square from "./components/Square";
import "./Board.scss";

interface BoardProps {}

const Board: FC<BoardProps> = () => {
  const { squares, currentPlayer } = useGameCurrent();
  const { winner } = useGameWinner();

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = currentPlayer as "X" | "O" | null;

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
