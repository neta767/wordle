import { REVEAL_TIME_MS } from "../../constants/settings";
import { CharStatus } from "../../lib/types";
import classnames from "classnames";
import "./Cell.css";
import React from "react";

type Props = {
  value?: string;
  status?: CharStatus;
  isRevealing?: boolean;
  isCompleted?: boolean;
  position?: number;
};

export const Cell = React.memo(function Cell({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) {
  //isCompleted is true when row completed
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const animationDelay = `${position * REVEAL_TIME_MS}ms`;
  const classes = classnames(
    "xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white",
    {
      "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600":
        !status,
      "border-black dark:border-slate-100": value && !status,
      "shadowed text-white": status,
      "absent bg-slate-400 dark:bg-slate-700 border-slate-400 dark:border-slate-700":
        status === "absent",
      "correct bg-green-500 border-green-500": status === "correct",
      "present bg-yellow-500 border-yellow-500": status === "present",
      "cell-fill-animation": isFilled,
      "cell-reveal": shouldReveal,
    }
  );

  return (
    <div data-cy="cell" className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  );
});
