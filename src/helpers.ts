type Square = "X" | "O";
type NullableSquare = Square | null;
type WinLine = [number, number, number];
type WinnerResult = [Square, WinLine] | [null];

export function calculateWinner(squares: NullableSquare[]): WinnerResult {
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

  for (let i = 0; i < winlines.length; i++) {
    const [a, b, c] = winlines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a] as Square, winlines[i]];
    }
  }

  return [null];
}
