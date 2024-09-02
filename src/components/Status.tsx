import { calculateWinner } from "helpers";
import { FC } from "react";

interface StatusProps {
  squares: any[];
  playerStep: "X" | "O";
  currentMove: number;
}

const Status: FC<StatusProps> = ({ squares, playerStep, currentMove }) => {
  const [winner, winline] = calculateWinner(squares);

  let status = "Начните игру или выберите игрока";

  if (winner) {
    status = "Выйграл: " + winner;
  } else {
    status = "Ходит: " + playerStep;
  }

  if (!winner && currentMove === 9) {
    status = "Ничья";
  }

  return <div className="status">{status}</div>;
};

export default Status;
