import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "context/ThemeContext";
import Game from "Game";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  </StrictMode>
);
