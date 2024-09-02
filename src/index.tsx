import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "Game";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);
