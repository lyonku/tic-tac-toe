import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SettingsStoreTypes {
  menu: "history" | "settings" | null;
  mode: "withBot" | "withFriend";
  difficulty: "simple" | "medium" | "hard";
}

const useSettingsStore = create<SettingsStoreTypes>()(
  devtools<SettingsStoreTypes>((set) => ({
    menu: null,
    mode: "withBot",
    difficulty: "medium",
  }))
);

export const useSettingsMenu = () => useSettingsStore((state) => state.menu);
export const useSettingsMode = () => useSettingsStore((state) => state.mode);
export const useSettingsDifficulty = () =>
  useSettingsStore((state) => state.difficulty);

export const setMenu = (state: "history" | "settings" | null) => {
  useSettingsStore.setState({ menu: state }, false, "game/setMenu");
};

export const setMode = (state: "withBot" | "withFriend") => {
  useSettingsStore.setState({ mode: state }, false, "game/setMenu");
};

export const setDifficulty = (state: "simple" | "medium" | "hard") => {
  useSettingsStore.setState({ difficulty: state }, false, "game/setMenu");
};
