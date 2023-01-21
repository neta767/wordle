import {CharStatus} from "../../lib/types";
import {Cell} from "./Cell";
import React from "react";

type Props = {
    guess: string;
    isRevealing?: boolean;
    guessStatuses: CharStatus[];
};

export const CompletedRow = React.memo(function CompletedRow({guess, isRevealing, guessStatuses}: Props) {
    const splitGuess = guess.split("");
    return (
        <div data-cy='completed-row' className="mb-1 flex justify-center">
            {splitGuess.map((letter, i) => (
                <Cell
                    key={i}
                    value={letter}
                    status={guessStatuses[i]}
                    position={i}
                    isRevealing={isRevealing}
                    isCompleted
                />
            ))}
        </div>
    );
});
