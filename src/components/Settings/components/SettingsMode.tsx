import { FC } from "react";
import { setMode, useSettingsMode } from "store/useSettingsStore";

interface SettingsModeProps {}

const SettingsMode: FC<SettingsModeProps> = () => {
  const mode = useSettingsMode();
  const isWithBot = mode === "withBot";
  const isWithFriend = mode === "withFriend";

  const handleModeChange = (mode: "withBot" | "withFriend") => {
    setMode(mode);
  };

  return (
    <div className="settings__mode">
      <p>Режим:</p>
      <button
        className={`settings__mode-btn ${isWithBot ? "active" : ""}`}
        onClick={() => handleModeChange("withBot")}
        id="withBot"
      >
        <img src="person.svg" alt="" />
        <span>VS</span>
        <img src="bot.svg" alt="" />
      </button>
      <button
        className={`settings__mode-btn ${isWithFriend ? "active" : ""}`}
        onClick={() => handleModeChange("withFriend")}
        id="withFriend"
      >
        <img src="person.svg" alt="" />
        <span>VS</span>
        <img src="person.svg" alt="" />
      </button>
    </div>
  );
};

export default SettingsMode;
