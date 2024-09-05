import { FC } from "react";
import { useGameCurrent, useGameWinner } from "useStore";

interface StatusProps {}

const Status: FC<StatusProps> = () => {
  const { currentPlayer, currentMove } = useGameCurrent();
  const { winner } = useGameWinner();
  const isFirstMove = currentMove === 0;

  let status = "Начните игру или выберите игрока";

  if (winner) {
    status = "Игра окончена";
  }

  if (!winner && !isFirstMove) {
    status = "Ходит: " + currentPlayer;
  }

  return <p className="status">{status}</p>;
};

export default Status;
