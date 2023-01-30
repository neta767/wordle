import { SOLUTION_LENGTH } from "../../constants/settings";
import { Cell } from "./Cell";
import React from "react";

type Props = {
  guess: string;
};

export const CurrentRow = React.memo(function CurrentRow({ guess }: Props) {
  const splitGuess = guess.split("");
  const emptyCells = Array.from(Array(SOLUTION_LENGTH - splitGuess.length));

  return (
    <div data-cy="current-row" className="mb-1 flex justify-center">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
});
