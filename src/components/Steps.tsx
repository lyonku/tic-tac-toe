import { FC } from "react";

interface StepsProps {
  history: any;
  jumpTo: (move: number) => any;
}

const Steps: FC<StepsProps> = ({ history, jumpTo }) => {
  return (
    <ol>
      {history.map((squares: any[], move: number) => {
        let description;
        if (move > 0) {
          description = "Go to move #" + move;
        } else {
          description = "Go to game start";
        }

        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
