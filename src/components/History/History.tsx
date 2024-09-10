import { FC } from "react";
import { jumpTo, useGameHistory } from "store/useGameStore";
import "./History.scss";

interface HistoryProps {}

const History: FC<HistoryProps> = () => {
  const history = useGameHistory();

  return (
    <div className="history">
      <h2>История шагов</h2>
      <ol className="history__list">
        {history.map((squares: any[], move: number) => {
          let description;

          if (move > 0) {
            description = `Ход - ${(move + 1) % 2 === 0 ? "X" : "O"}`;
          } else {
            description = "Начало игры";
          }

          return (
            <li
              className="history__item"
              key={move}
              onClick={() => jumpTo(move)}
            >
              {move > 0 && (
                <span className="history__item-move">{`${move}. `}</span>
              )}
              <span className="history__item-description">{description}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
