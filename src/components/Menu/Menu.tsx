import { FC, useState, useEffect, ReactElement, useRef } from "react";
import { setMenu, useSettingsMenu } from "store/useSettingsStore";
import MemoCrossIcon from "components/svgs/CrossIcon";
import "./Menu.scss";
import Settings from "components/Settings";
import History from "components/History";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const [component, setComponent] = useState<ReactElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const menu = useSettingsMenu();
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
        }, 500);
        break;
    }
  }, [menu]);

  return (
    <>
      <div className={`menu ${isMenuOpen ? "active" : "disabled"}`} ref={ref}>
        {component}
        <button className="menu__close-btn" onClick={closeMenu}>
          <MemoCrossIcon />
        </button>
      </div>
      {isMenuOpen && <div className="menu__background"></div>}
    </>
  );
};

export default Menu;
