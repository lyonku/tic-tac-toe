import { FC } from "react";
import { useGameWinline, useGameWinner } from "useStore";

interface StrikeLineProps {}

const StrikeLine: FC<StrikeLineProps> = () => {
  const winner = useGameWinner();
  const winline = useGameWinline();

  const positions: { [key: string]: string } = {
    "0,1,2": "horizontal top",
    "3,4,5": "horizontal center",
    "6,7,8": "horizontal bottom",
    "0,3,6": "vertical left",
    "1,4,7": "vertical center",
    "2,5,8": "vertical right",
    "0,4,8": "diagonal toRight",
    "2,4,6": "diagonal toLeft",
  };

  return (
    <div
      className={`strike-line ${winner ? "start" : ""} ${
        winner ? positions[winline.join()] : ""
      }`}
      style={{ backgroundColor: winner === "X" ? "#e2b714" : "#999999" }}
    ></div>
  );
};

export default StrikeLine;
