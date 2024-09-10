import { FC } from "react";
import SettingsTheme from "./components/SettingsTheme";
import SettingsDifficulty from "./components/SettingsDifficulty";
import SettingsMode from "./components/SettingsMode";
import "./Settings.scss";

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  return (
    <div className="settings">
      <h2>Настройки</h2>
      <div className="settings__wrap">
        <SettingsMode />
        <SettingsDifficulty />
        <SettingsTheme />
      </div>
    </div>
  );
};

export default Settings;
