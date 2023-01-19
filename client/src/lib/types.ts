export type CharStatus = "absent" | "present" | "correct";

export type gameReq = {
    guesses: string[];
    hashSolution: string;
};

export type gameRes = {
    charStatuses: { [key: string]: CharStatus };
    guessesStatuses: CharStatus[][];
    isGameWon: boolean;
    solution: string;
};