import React, { createContext, useState } from "react";
import { useEffectOnce } from "react-use";

type ThemeType = "system" | "light" | "dark" | null;

interface ContextProps {
  activeTheme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ContextProps>({
  activeTheme: "system",
  toggleTheme: () => {},
});

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const storageTheme = localStorage.getItem("theme") as ThemeType;
  const [activeTheme, setTheme] = useState<ThemeType>(
    storageTheme ? storageTheme : "system"
  );

  useEffectOnce(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const theme = storageTheme ? storageTheme : isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
  });

  const toggleThemeHandler = (theme: ThemeType) => {
    if (theme === "system") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
      localStorage.removeItem("theme");
    } else if (theme !== null) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }

    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
