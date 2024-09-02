import Board from "components/Board";
import "./Game.css";
import { useState } from "react";
import Steps from "components/Steps";
import { calculateWinner } from "helpers";
import ScoreBar from "components/ScoreBar";
import Status from "components/Status";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const currentSquares = history[currentMove];
  const playerStep = currentMove % 2 === 0 ? "X" : "O";

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const [winner, winline] = calculateWinner(nextSquares);

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <header className="header">
        <h1>Крестики нолики</h1>
        <ScoreBar
          playerStep={playerStep}
          squares={currentSquares}
          score={score}
        />
        <Status
          playerStep={playerStep}
          squares={currentSquares}
          currentMove={currentMove}
        />
      </header>
      <main className="board">
        <Board
          playerStep={playerStep}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </main>
      {/* <div className="game-info">
        <Steps history={history} jumpTo={jumpTo} />
      </div> */}
    </div>
  );
}

export default Game;
