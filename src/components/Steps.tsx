import { FC } from "react";
import { jumpTo, useGameHistory } from "useStore";

interface StepsProps {}

const Steps: FC<StepsProps> = () => {
  const history = useGameHistory();

  return (
    <>
      <h2>История шагов</h2>
      <ol className="steps__list">
        {history.map((squares: any[], move: number) => {
          let description;

          if (move > 0) {
            description = `Ход - ${(move + 1) % 2 === 0 ? "X" : "O"}`;
          } else {
            description = "Начало игры";
          }

          return (
            <li className="steps__item" key={move} onClick={() => jumpTo(move)}>
              {move > 0 && (
                <span className="steps__item-move">{`${move}. `}</span>
              )}
              <span className="steps__item-description">{description}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Steps;
