type Square = "X" | "O";
type NullableSquare = Square | null | "XO";
type WinLine = [number, number, number];
type WinnerResult = [Square | "XO", WinLine] | ["XO"] | [null];

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

export function calculateWinner(squares: NullableSquare[]): WinnerResult {
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

function getRandomMove(nextSquares: (null | "X" | "O")[]): number {
  const num = randomInteger(0, 8);

  if (nextSquares[num]) {
    return getRandomMove(nextSquares);
  } else {
    return num;
  }
}

function getStrike(board: NullableSquare[], player: Square) {
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
export function calculateBotEasyMove(
  squares: (null | "X" | "O")[],
  bot: Square
) {
  const nextSquares = squares.slice();

  // Бот просто выбирает случайную свободную ячейку.
  const index = getRandomMove(nextSquares);
  nextSquares[index] = bot;

  return nextSquares;
}

export function calculateBotMiddleMove(
  squares: (null | "X" | "O")[],
  bot: Square
) {
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
  squares: (null | "X" | "O")[],
  bot: Square,
  currentMove: number
) {
  const nextSquares = squares.slice();
  const player = bot === "O" ? "X" : "O";

  let index: number | null = 0;
  index = getRandomMove(nextSquares);

  // Если центр не занят, бот сразу его занимает
  if (nextSquares[4] === null) {
    index = 4;
  }

  // Если занята одна из центральных сторон, бот занимает соседнюю
  if (currentMove === 1) {
    let firstMovePlayer = nextSquares.findIndex((square) => square === player);

    if (firstMovePlayer === 1) {
      index = 2;
    }

    if (firstMovePlayer === 3) {
      index = 6;
    }

    if (firstMovePlayer === 5 || firstMovePlayer === 7) {
      index = 8;
    }

    if (firstMovePlayer === 4) {
      const randomEven = Math.floor(Math.random() * 5) * 2;
      index = randomEven !== 4 ? randomEven : 2;
    }
  }

  if (
    currentMove === 3 &&
    nextSquares[4] === player &&
    (nextSquares[0] === player ||
      nextSquares[2] === player ||
      nextSquares[6] === player ||
      nextSquares[8] === player)
  ) {
    if (nextSquares[0] === null) {
      index = 0;
    } else if (nextSquares[2] === null) {
      index = 2;
    } else {
      index = 8;
    }
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
