import { FC, useState } from "react";
import Select, { SingleValue } from "react-select";

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const [selectedDifficulty, setDifficulty] = useState("medium");

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

  return (
    <div className="settings">
      <h2>Настройки</h2>
      <div className="settings__wrap">
        <div className="settings__mode">
          <p>Режим:</p>
          <label htmlFor="withBot">
            <input
              type="radio"
              id="withBot"
              name="mode"
              defaultChecked={true}
            />
            <div className="settings__mode-btn">
              <img src="person.svg" alt="" />
              <span>VS</span>
              <img src="bot.svg" alt="" />
            </div>
          </label>
          <label htmlFor="withFriend">
            <input type="radio" id="withFriend" name="mode" />
            <div className="settings__mode-btn">
              <img src="person.svg" alt="" />
              <span>VS</span>
              <img src="person.svg" alt="" />
            </div>
          </label>
        </div>

        <div className="settings__difficulty">
          <p>Cложность:</p>
          <label htmlFor="difficulty">
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
                  borderColor: state.isFocused ? "#D0EAE2" : "#646669",
                  "&:hover": {
                    borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",
                  },
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#323437",
                  border: "1px solid #66686b",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#d1d0c5",
                  cursor: "pointer",
                  backgroundColor: state.isFocused ? "#323437" : "#323437",
                  "&:hover": {
                    backgroundColor: state.isFocused ? "#323437" : "#323437",
                    color: "#e1b614",
                  },
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "#cdccc1",
                }),
              }}
              className="settings__difficulty-select"
            />
            <img src="difficulty.svg" alt="" />
          </label>
        </div>

        <div className="settings__theme">
          Тема:
          <div className="settings__theme-wrap">
            <label htmlFor="dark">
              <input
                type="radio"
                id="dark"
                name="theme"
                defaultChecked={true}
              />
              <div className="settings__theme-btn">Темная</div>
            </label>
            <label htmlFor="light">
              <input type="radio" id="light" name="theme" />
              <div className="settings__theme-btn">Светлая</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
