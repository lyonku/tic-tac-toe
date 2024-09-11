type Square = "X" | "O";
type WinLine = [number, number, number];
type WinnerResult = [Square | "XO", WinLine] | ["XO"] | [null];
type SquaresType = (Square | null)[];

const winlines: WinLine[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares: SquaresType): WinnerResult {
  for (let i = 0; i < winlines.length; i++) {
    const [a, b, c] = winlines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a] as Square, winlines[i]];
    }
  }
  const hasNull = squares.includes(null);
  if (!hasNull) {
    return ["XO"];
  }

  return [null];
}

function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomMove(nextSquares: SquaresType): number {
  const num = randomInteger(0, 8);

  if (nextSquares[num]) {
    return getRandomMove(nextSquares);
  } else {
    return num;
  }
}

function getStrike(board: SquaresType, player: Square) {
  for (const line of winlines) {
    const [a, b, c] = line;

    if (board[a] === player && board[b] === player && board[c] === null) {
      return c;
    }
    if (board[a] === player && board[c] === player && board[b] === null) {
      return b;
    }
    if (board[b] === player && board[c] === player && board[a] === null) {
      return a;
    }
  }
  return null;
}
export function calculateBotEasyMove(squares: SquaresType, bot: Square) {
  const nextSquares = squares.slice();

  // Бот просто выбирает случайную свободную ячейку.
  const index = getRandomMove(nextSquares);
  nextSquares[index] = bot;

  return nextSquares;
}

export function calculateBotMiddleMove(squares: SquaresType, bot: Square) {
  const nextSquares = squares.slice();

  // Бот пытается выиграть, если есть возможность.
  let index = getStrike(nextSquares, bot);

  if (index === null) {
    // Если такой возможности нет, он пытается заблокировать ход игрока.
    const player = bot === "O" ? "X" : "O";
    index = getStrike(nextSquares, player);

    if (index === null) {
      // Если и это невозможно, бот делает случайный ход.
      index = getRandomMove(nextSquares);
    }
  }

  nextSquares[index] = bot;

  return nextSquares;
}

export function calculateBotHardMove(
  squares: SquaresType,
  bot: Square,
  currentMove: number
) {
  const nextSquares = squares.slice();
  const player = bot === "O" ? "X" : "O";

  let index: number | null = 0;
  // Если нет других возможностей, бот делает случайный ход.
  index = getRandomMove(nextSquares);

  // Если центр не занят, бот сразу его занимает
  if (nextSquares[4] === null) {
    index = 4;
  }

  // Если занята одна из центральных сторон, бот занимает соседнюю
  if (currentMove === 1) {
    let firstMoveIndex = getFirstMoveIndex(squares, player);
    if (firstMoveIndex !== null && firstMoveIndex) {
      index = firstMoveIndex;
    }
  }

  // Если игроком занят центр и угол, то бот займет любой другой угол
  if (
    currentMove === 3 &&
    nextSquares[4] === player &&
    hasCornerOccupied(nextSquares, player)
  ) {
    index = getFreeCornerIndex(nextSquares);
  }

  // Если бот в центре а игрок пытается занять углы, бот будет занимать центры сторон
  if (currentMove === 3 && nextSquares[4] === bot) {
    index = getFreeSideIndex(nextSquares);
  }

  // Бот пытается заблокировать ход игрока.
  let blockIndex = getStrike(nextSquares, player);
  if (blockIndex !== null) {
    index = blockIndex;
  }

  // Бот пытается выиграть, если есть возможность.
  let winIndex = getStrike(nextSquares, bot);
  if (winIndex !== null) {
    index = winIndex;
  }

  nextSquares[index] = bot;

  return nextSquares;
}

function getRandomEven() {
  const evens = [0, 2, 6, 8];
  return evens[Math.floor(Math.random() * evens.length)];
}

function getFreeSideIndex(squares: SquaresType) {
  const sides = [1, 3, 5, 7];
  return sides.find((index) => squares[index] === null) as number;
}

function getFreeCornerIndex(squares: SquaresType) {
  const corners = [0, 2, 6, 8];
  return corners.find((index) => squares[index] === null) as number;
}

function hasCornerOccupied(squares: SquaresType, player: Square) {
  return [0, 2, 6, 8].some((index) => squares[index] === player);
}

function getFirstMoveIndex(squares: SquaresType, player: Square) {
  let firstMovePlayer = squares.findIndex((square) => square === player);

  switch (firstMovePlayer) {
    case 1:
      return 2;
    case 3:
      return 6;
    case 5:
      return 8;
    case 7:
      return 8;
    case 4:
      return getRandomEven();
    default:
      break;
  }
}

export function vibrate(ms: number) {
  if ("vibrate" in navigator) {
    navigator.vibrate(ms);
  }
}
