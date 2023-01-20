import {SOLUTION_LENGTH} from "../../constants/settings";
import {Cell} from "./Cell";
import {useState} from "react";

type Props = {
    guess: string;
};

export const CurrentRow = ({guess}: Props) => {
    const [currentGuess, setCurrentGuess] = useState("");
    const splitGuess = currentGuess.split("");
    const emptyCells = Array.from(Array(SOLUTION_LENGTH - splitGuess.length));

    return (
        <div data-cy='current-row' className='flex justify-center mb-1'>
            {splitGuess.map((letter, i) => (
                <Cell key={i} value={letter}/>
            ))}
            {emptyCells.map((_, i) => (
                <Cell key={i}/>
            ))}
        </div>
    );
};
