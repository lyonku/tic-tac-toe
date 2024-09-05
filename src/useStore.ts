import { calculateWinner } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GameStoreTypes {
  history: Array<(null | "X" | "O")[]>;
  score: { X: number; O: number };
  currentMove: number;
  winner: null | "O" | "X" | "XO";
  winline: any[];
  players: ("X" | "O")[];
  menu: "history" | "settings" | null;
}

const initialState: Omit<GameStoreTypes, "score" | "menu"> = {
  history: [Array(9).fill(null)],
  players: ["X", "O"],
  currentMove: 0,
  winner: null,
  winline: [],
};

export const useGameStore = create<GameStoreTypes>()(
  devtools<GameStoreTypes>((set) => ({
    ...initialState,
    score: { X: 0, O: 0 },
    menu: null,
  }))
);

export const useGameHistory = () => useGameStore((state) => state.history);
export const useGameScore = () => useGameStore((state) => state.score);
export const useGameWinner = () =>
  useGameStore((state) => ({ winner: state.winner, winline: state.winline }));
export const useGameCurrent = () =>
  useGameStore((state) => ({
    currentMove: state.currentMove,
    squares: state.history[state.currentMove],
    currentPlayer:
      state.currentMove % 2 === 0 ? state.players[0] : state.players[1],
  }));
export const useGameMenu = () => useGameStore((state) => state.menu);

export const handlePlay = (nextSquares: any[]) => {
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
  const nextOrder: ("X" | "O")[] = [];
  if (player === "X") {
    nextOrder[0] = "X";
    nextOrder[1] = "O";
  } else {
    nextOrder[0] = "O";
    nextOrder[1] = "X";
  }

  useGameStore.setState({ players: nextOrder }, false, "game/choosePlayer");
};

export const restartGame = () => {
  useGameStore.setState({ ...initialState }, false, "game/restartGame");
};

export const setMenu = (state: "history" | "settings" | null) => {
  useGameStore.setState({ menu: state }, false, "game/setMenu");
};
