import { FC } from "react";
import Square from "./Square";
import {
  handlePlay,
  restartGame,
  useGameCurrentPlayer,
  useGameCurrentSquares,
  useGameWinner,
} from "useStore";

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
  console.log(squares);

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
