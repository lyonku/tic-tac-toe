import { calculateWinner } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GameStoreTypes {
  history: Array<(null | "X" | "O")[]>;
  score: { X: number; O: number };
  currentMove: number;
  winner: null | "O" | "X" | "XO";
  winline: any[];
  player: "X" | "O";
}

const initialState: Omit<GameStoreTypes, "score"> = {
  history: [Array(9).fill(null)],
  player: "X",
  currentMove: 0,
  winner: null,
  winline: [],
};

const useGameStore = create<GameStoreTypes>()(
  devtools<GameStoreTypes>((set) => ({
    ...initialState,
    score: { X: 0, O: 0 },
  }))
);

export const useGameHistory = () => useGameStore((state) => state.history);
export const useGameScore = () => useGameStore((state) => state.score);
export const useGamePlayer = () => useGameStore((state) => state.player);
export const useGameWinner = () =>
  useGameStore((state) => ({ winner: state.winner, winline: state.winline }));
export const useGameCurrent = () =>
  useGameStore((state) => ({
    currentMove: state.currentMove,
    squares: state.history[state.currentMove],
    currentPlayer: state.currentMove % 2 === 0 ? "X" : "O",
  }));

export const handlePlay = (nextSquares: (null | "X" | "O")[]) => {
  const { history, currentMove } = useGameStore.getState();
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  const [winner, winline] = calculateWinner(nextSquares);
  const isDraw = winner === "XO";

  useGameStore.setState(
    (state) => ({
      history: nextHistory,
      currentMove: nextHistory.length - 1,
      score:
        winner && !isDraw
          ? { ...state.score, [winner]: state.score[winner] + 1 }
          : state.score,
      winner,
      winline: winner ? winline : [],
    }),
    false,
    "game/handlePlay"
  );
};

export const jumpTo = (move: number) => {
  const { history } = useGameStore.getState();

  const [winner, winline] = calculateWinner(history[move]);

  useGameStore.setState(
    { currentMove: move, winner, winline },
    false,
    "game/jumpTo"
  );
};

export const choosePlayer = (player: "O" | "X") => {
  useGameStore.setState({ player: player }, false, "game/choosePlayer");
};

export const restartGame = () => {
  useGameStore.setState({ ...initialState }, false, "game/restartGame");
};
