import { FC } from "react";
import { useGameCurrent, useGameWinner } from "store/useGameStore";
import { useSettingsMode } from "store/useSettingsStore";

interface StatusProps {}

const Status: FC<StatusProps> = () => {
  const { currentPlayer, currentMove } = useGameCurrent();
  const { winner } = useGameWinner();
  const mode = useSettingsMode();
  const isWithFriend = mode === "withFriend";

  const isFirstMove = currentMove === 0;

  let status = "Начните игру или выберите игрока";

  if (winner) {
    status = "Игра окончена";
  }

  if ((!winner && !isFirstMove) || (!winner && isWithFriend)) {
    status = "Ходит: " + currentPlayer;
  }

  return <p className="status">{status}</p>;
};

export default Status;
