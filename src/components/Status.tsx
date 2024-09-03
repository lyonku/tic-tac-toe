import { FC } from "react";
import { useGameCurrentPlayer, useGameWinner } from "useStore";

interface StatusProps {}

const Status: FC<StatusProps> = () => {
  const currentPlayer = useGameCurrentPlayer();
  const winner = useGameWinner();

  let status = "Начните игру или выберите игрока";

  if (winner) {
    status = "Игра окончена";
  } else {
    status = "Ходит: " + currentPlayer;
  }

  return <div className="status">{status}</div>;
};

export default Status;
