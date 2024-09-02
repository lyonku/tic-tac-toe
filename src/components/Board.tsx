import { FC, useState } from "react";
import Square from "./Square";
import { calculateWinner } from "helpers";

interface BoardProps {
  playerStep: "X" | "O";
  squares: any[];
  onPlay: (nextSquares: any[]) => void;
}

const Board: FC<BoardProps> = ({ playerStep, squares, onPlay }) => {
  const [winner, winline] = calculateWinner(squares);
  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = playerStep;

    onPlay(nextSquares);
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
                    winSqure={winline?.includes(element)}
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
