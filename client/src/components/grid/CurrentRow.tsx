import { SOLUTION_LENGTH } from "../../constants/settings";
import { Cell } from "./Cell";
import React from "react";

type Props = {
  guess: string;
    className: string
};

export const CurrentRow = React.memo(function CurrentRow({ guess,className }: Props) {
  const splitGuess = guess.split("");
  const emptyCells = Array.from(Array(SOLUTION_LENGTH - splitGuess.length));
    const classes = `flex justify-center mb-1 ${className}`


  return (
    <div data-cy="current-row" className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
});
