import { FC } from "react";
import { restartGame, setMenu, useGameMenu } from "useStore";
import "./Controls.scss";

interface ControlsProps {}

const Controls: FC<ControlsProps> = () => {
  const menu = useGameMenu();
  const isMenuOpen = menu !== null;

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLDivElement;

    if (menu === target.id && isMenuOpen) {
      setMenu(null);
    } else {
      setMenu(target.id as "history" | "settings");
    }
  };

  return (
    <div className="controls">
      <button className="controls__restart-btn" onClick={restartGame}>
        <img src="restart.svg" alt="" />
        <span>Начать заново</span>
      </button>
      <div className="controls__small-btns">
        <button
          className="controls__history-btn"
          onClick={handleMenuOpen}
          id="history"
        >
          <img src="history.svg" alt="" id="history" />
        </button>
        <button
          className="controls__menu-btn"
          onClick={handleMenuOpen}
          id="settings"
        >
          <img src="menu.svg" alt="" id="settings" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
