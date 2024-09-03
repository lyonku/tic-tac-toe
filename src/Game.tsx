import { useState } from "react";
import Board from "components/Board";
import "./Game.scss";
import Steps from "components/Steps";
import ScoreBar from "components/ScoreBar";
import Status from "components/Status";
import { restartGame } from "useStore";
import Results from "components/Results";
import StraightLine from "components/StaightLine";

function Game() {
  const [isHistoryOpen, setHistoryOpen] = useState(false);

  const handleHistoryOpen = () => {
    setHistoryOpen((prev) => !prev);
  };

  return (
    <div className="game">
      <div className="game__wrap">
        <header className="header">
          <h1>Крестики нолики</h1>
          <ScoreBar />
          <Status />
        </header>
        <main className="board">
          <Board />
          <StraightLine />
          <Results />
        </main>
        <div className="controls">
          <button className="game__btn" onClick={restartGame}>
            Начать заново
          </button>
          <button className="game__btn" onClick={handleHistoryOpen}>
            История
          </button>
        </div>
      </div>
      <div className={`steps ${isHistoryOpen ? "active" : ""}`}>
        <Steps />
      </div>
    </div>
  );
}

export default Game;
