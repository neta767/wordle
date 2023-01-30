import { guess } from "../../lib/types";
import { Cell } from "./Cell";
import React from "react";

type Props = {
  guess: guess;
  isRevealing?: boolean;
};

export const CompletedRow = React.memo(function CompletedRow({
  guess,
  isRevealing,
}: Props) {
  return (
    <div data-cy="completed-row" className="mb-1 flex justify-center">
      {guess.map((letter, i) => (
        <Cell
          key={i}
          value={letter.value}
          status={letter.status}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  );
});
