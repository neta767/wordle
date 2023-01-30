import { MAX_CHALLENGES } from "../../constants/settings";
import { guess } from "../../lib/types";
import { CompletedRow } from "./CompletedRow";
import { CurrentRow } from "./CurrentRow";
import { EmptyRow } from "./EmptyRow";
import React from "react";

type Props = {
  guesses: guess[];
  currentGuess: string;
  isRevealing?: boolean;
};

export const Grid = React.memo(function Grid({
  guesses,
  currentGuess,
  isRevealing,
}: Props) {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : [];

  return (
    <>
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  );
});
