import { SOLUTION_LENGTH } from "../../constants/settings";
import { Cell } from "./Cell";
import React from "react";

export const EmptyRow = React.memo(() => {
  const emptyCells = Array.from(Array(SOLUTION_LENGTH));
  return (
    <div data-cy="empty-row" className="mb-1 flex justify-center">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
});
