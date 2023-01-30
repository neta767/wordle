// format a guess into an array of letter objects
// e.g. [{value: 'A', status: 'absent'}]
export const getGuessStatus = (guess, solution) => {
    const solutionArray = [...solution];
    const guessStatus = [...guess].map((l) => {
        return { value: l, status: 'absent' };
    });
    // handle all correct cases first
    guessStatus.forEach((l, i) => {
        if (solution[i] === l.value) {
            guessStatus[i].status = 'correct';
            solutionArray[i] = null;
        }
    });
    guessStatus.forEach((l, i) => {
        if (solutionArray.includes(l.value) && l.status !== 'correct') {
            guessStatus[i].status = 'present';
            solutionArray[solutionArray.indexOf(l.value)] = null;
        }
    });
    return guessStatus;
};
