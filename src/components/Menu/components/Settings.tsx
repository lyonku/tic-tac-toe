import { ThemeContext } from "context/ThemeContext";
import { FC, useContext, useState } from "react";
import Select, { SingleValue } from "react-select";

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const [selectedDifficulty, setDifficulty] = useState("medium");
  const [selectedMode, setSelectedMode] = useState("withBot");
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  const options = [
    { value: "simple", label: "Простая" },
    { value: "medium", label: "Средняя" },
    { value: "hard", label: "Сложная" },
  ];

  const handleDifficultyChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    setDifficulty(newValue?.value || "medium");
  };

  const handleModeChange = (mode: "withBot" | "withFriend") => {
    setSelectedMode(mode);
  };

  const handleThemeChange = (theme: "dark" | "light" | "system") => {
    toggleTheme(theme);
  };

  return (
    <div className="settings">
      <h2>Настройки</h2>
      <div className="settings__wrap">
        <div className="settings__mode">
          <p>Режим:</p>
          <button
            className={`settings__mode-btn ${
              selectedMode === "withBot" ? "active" : ""
            }`}
            onClick={() => handleModeChange("withBot")}
            id="withBot"
          >
            <img src="person.svg" alt="" />
            <span>VS</span>
            <img src="bot.svg" alt="" />
          </button>
          <button
            className={`settings__mode-btn ${
              selectedMode === "withFriend" ? "active" : ""
            }`}
            onClick={() => handleModeChange("withFriend")}
            id="withFriend"
          >
            <img src="person.svg" alt="" />
            <span>VS</span>
            <img src="person.svg" alt="" />
          </button>
        </div>
        <div className="settings__difficulty">
          <p>Cложность:</p>
          <div className="settings__difficulty-wrap">
            <Select
              defaultValue={options.find(
                (option) => option.value === selectedDifficulty
              )}
              onChange={handleDifficultyChange}
              options={options}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "unset",
                  boxShadow: "none",
                  borderColor: state.isFocused
                    ? "var(--primary-color)"
                    : "var(--secondary-color)",
                  "&:hover": {
                    borderColor: state.isFocused
                      ? "var(--primary-color)"
                      : "var(--primary-color)",
                  },
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "var(--background-color)",
                  border: "1px solid var(--secondary-color)",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "var(--primary-color)",
                  cursor: "pointer",
                  backgroundColor: state.isFocused
                    ? "var(--background-color)"
                    : "var(--background-color)",
                  "&:hover": {
                    backgroundColor: state.isFocused
                      ? "var(--background-color)"
                      : "var(--background-color)",
                    color: "#e1b614",
                  },
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "var(--primary-color)",
                }),
              }}
              className="settings__difficulty-select"
            />
            <img src="difficulty.svg" alt="" />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Settings;
