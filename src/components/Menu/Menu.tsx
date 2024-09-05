import { FC, useState, useEffect, ReactElement } from "react";
import { setMenu, useGameMenu } from "useStore";
import Settings from "./components/Settings";
import History from "./components/History";
import "./Menu.scss";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const [component, setComponent] = useState<ReactElement | null>(null);
  const menu = useGameMenu();
  const isMenuOpen = menu !== null;

  const closeMenu = () => {
    setMenu(null);
  };

  useEffect(() => {
    switch (menu) {
      case "history":
        setComponent(<History />);
        break;
      case "settings":
        setComponent(<Settings />);
        break;
      default:
        setTimeout(() => {
          setComponent(null);
        }, 300);
        break;
    }
  }, [menu]);

  return (
    <div className={`menu ${isMenuOpen ? "active" : ""}`}>
      {component}
      <button className="menu__close-btn" onClick={closeMenu}>
        <img src="cross.svg" alt="" />
      </button>
    </div>
  );
};

export default Menu;
