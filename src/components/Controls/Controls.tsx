import { FC } from "react";
import { restartGame, setMenu, useGameMenu } from "useStore";
import "./Controls.scss";
import MemoMenuIcon from "components/svgs/MenuIcon";
import MemoHistoryIcon from "components/svgs/HistoryIcon";
import MemoRestartIcon from "components/svgs/RestartIcon";

interface ControlsProps {}

const Controls: FC<ControlsProps> = () => {
  const menu = useGameMenu();
  const isMenuOpen = menu !== null;

  const handleMenuOpen = (id: "history" | "settings" | null) => {
    if (menu === id && isMenuOpen) {
      setMenu(null);
    } else {
      setMenu(id as "history" | "settings");
    }
  };

  return (
    <div className="controls">
      <button className="controls__restart-btn" onClick={restartGame}>
        <MemoRestartIcon />
        <span>Начать заново</span>
      </button>
      <div className="controls__small-btns">
        <button
          className="controls__small-btn controls__history-btn"
          onClick={() => handleMenuOpen("history")}
        >
          <MemoHistoryIcon />
        </button>
        <button
          className="controls__small-btn controls__menu-btn"
          onClick={() => handleMenuOpen("settings")}
        >
          <MemoMenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Controls;
