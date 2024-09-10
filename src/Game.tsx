import Board from "components/Board";
import Status from "components/Status";
import StraightLine from "components/StaightLine";
import Controls from "components/Controls";
import ScoreBar from "components/ScoreBar";
import Results from "components/Results";
import Menu from "components/Menu";

import "./Game.scss";
import "./Normalize.css";

function Game() {
  return (
    <div className="game">
      <div className="game__wrap">
        <header className="header">
          <h1>Крестики-Нолики</h1>
          <ScoreBar />
          <Status />
        </header>
        <main className="board">
          <Board />
          <StraightLine />
          <Results />
        </main>
        <Controls />
      </div>
      <Menu />
    </div>
  );
}

export default Game;
