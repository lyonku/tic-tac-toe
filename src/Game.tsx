import Board from "components/Board";
import ScoreBar from "components/ScoreBar";
import Status from "components/Status";
import Results from "components/Results";
import StraightLine from "components/StaightLine";

import "./Game.scss";
import "./Normalize.css";
import Menu from "components/Menu";
import Controls from "components/Controls";

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
