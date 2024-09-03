import { FC } from "react";
import {
  useGameCurrentMove,
  useGameCurrentPlayer,
  useGameWinner,
} from "useStore";

interface StatusProps {}

const Status: FC<StatusProps> = () => {
  const currentPlayer = useGameCurrentPlayer();
  const currentMove = useGameCurrentMove();
  const winner = useGameWinner();

  let status = "Начните игру или выберите игрока";

  if (winner) {
    status = "Выйграл: " + winner;
  } else {
    status = "Ходит: " + currentPlayer;
  }

  if (!winner && currentMove === 9) {
    status = "Ничья";
  }

  return <div className="status">{status}</div>;
};

export default Status;
