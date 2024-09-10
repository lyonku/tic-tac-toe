import { FC, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

interface SettingsThemeProps {}

const SettingsTheme: FC<SettingsThemeProps> = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme: "dark" | "light" | "system") => {
    toggleTheme(theme);
  };

  return (
    <div className="settings__theme">
      Тема:
      <div className="settings__theme-wrap">
        <button
          onClick={() => handleThemeChange("dark")}
          className={`settings__theme-btn ${
            activeTheme === "dark" ? "active" : ""
          }`}
        >
          Темная
        </button>
        <button
          onClick={() => handleThemeChange("light")}
          className={`settings__theme-btn ${
            activeTheme === "light" ? "active" : ""
          }`}
        >
          Светлая
        </button>
        <button
          onClick={() => handleThemeChange("system")}
          className={`settings__theme-btn ${
            activeTheme === "system" ? "active" : ""
          }`}
        >
          Как в системе
        </button>
      </div>
    </div>
  );
};

export default SettingsTheme;
