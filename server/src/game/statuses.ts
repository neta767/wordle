import {letter} from "../lib/types";
import {solution} from "../constants/setting";

export type CharStatus = 'absent' | 'present' | 'correct'

// format a guess into an array of letter objects
// e.g. [{value: 'A', status: 'absent'}]
export const getGuessStatus = (guess: string): letter[] => {
    const solutionArray = [...solution]
    const guessStatus: letter[] = [...guess].map((l) => {
        return {value: l, status: 'absent'}
    })

    // handle all correct cases first
    guessStatus.forEach((l, i) => {
        if (solution[i] === l.value) {
            guessStatus[i].status = 'correct'
            solutionArray[i] = null
        }
    })

    guessStatus.forEach((l, i) => {
        if (solutionArray.includes(l.value) && l.status !== 'correct') {
            guessStatus[i].status = 'present'
            solutionArray[solutionArray.indexOf(l.value)] = null
        }
    })
    return guessStatus
}
