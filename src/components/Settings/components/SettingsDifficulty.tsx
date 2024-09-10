import { FC } from "react";
import Select, { SingleValue } from "react-select";
import {
  setDifficulty,
  useSettingsDifficulty,
  useSettingsMode,
} from "store/useSettingsStore";

interface SettingsDifficultyProps {}

type difficultyType = "simple" | "medium" | "hard";

const SettingsDifficulty: FC<SettingsDifficultyProps> = () => {
  const difficulty = useSettingsDifficulty();
  const mode = useSettingsMode();

  const options = [
    { value: "simple", label: "Простая" },
    { value: "medium", label: "Средняя" },
    { value: "hard", label: "Сложная" },
  ];

  const handleDifficultyChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    setDifficulty((newValue?.value as difficultyType) || "medium");
  };

  return (
    <div className="settings__difficulty">
      <p>Cложность:</p>
      <div className="settings__difficulty-wrap">
        <Select
          isDisabled={mode === "withFriend"}
          defaultValue={options.find((option) => option.value === difficulty)}
          onChange={handleDifficultyChange}
          options={options}
          isSearchable={false}
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
  );
};

export default SettingsDifficulty;
