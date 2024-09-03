import { calculateWinner } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GameStoreTypes {
  history: Array<(null | "X" | "O")[]>;
  score: { X: number; O: number };
  currentMove: number;
  winner: null | "O" | "X" | "XO";
  winline: any[];
}

const initialState: Omit<GameStoreTypes, "score"> = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  winner: null,
  winline: [],
};

export const useGameStore = create<GameStoreTypes>()(
  devtools<GameStoreTypes>((set) => ({
    ...initialState,
    score: { X: 0, O: 0 },
  }))
);

export const useGameHistory = () => useGameStore((state) => state.history);
export const useGameScore = () => useGameStore((state) => state.score);
export const useGameWinner = () => useGameStore((state) => state.winner);
export const useGameWinline = () => useGameStore((state) => state.winline);
export const useGameCurrentMove = () =>
  useGameStore((state) => state.currentMove);
export const useGameCurrentSquares = () =>
  useGameStore((state) => state.history[state.currentMove]);
export const useGameCurrentPlayer = () =>
  useGameStore((state) => (state.currentMove % 2 === 0 ? "X" : "O"));

export const handlePlay = (nextSquares: any[]) => {
  const { history, currentMove } = useGameStore.getState();
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

  const [winner, winline] = calculateWinner(nextSquares);

  useGameStore.setState(
    (state) => ({
      history: nextHistory,
      currentMove: nextHistory.length - 1,
      score:
        winner && winner !== "XO"
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

export const restartGame = () => {
  useGameStore.setState({ ...initialState }, false, "game/restartGame");
};
