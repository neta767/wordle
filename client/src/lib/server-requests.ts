import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export type CharStatus = 'absent' | 'present' | 'correct'
const endpoint = 'http://localhost:3003';

export type gameReq = {
    guesses: string[],
    hashSolution: string;
}

export type gameRes = {
    charStatuses: { [key: string]: CharStatus },
    guessesStatuses: CharStatus[][],
    isGameWon: boolean;
    solution: string;
}

export async function updateGameStatus(gameReq: gameReq): Promise<string | gameRes> {
    try {
        const body = JSON.stringify(gameReq);
        const method = 'POST';
        const headers = {
            'content-type': 'application/json',
        }
        const url = `${endpoint}/game`;
        const response = await fetch(url, {method, headers, body});
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        return (await response.json()) as gameRes;
    } catch (error) {
        if (error instanceof Error) {
            return 'error message: ' + error.message;
        } else {
            return 'unexpected error: ' + error;
        }
    }
}

export async function getHashSolution(): Promise<string | void> {
    try {
        const method = 'GET';
        const headers = {
            'content-type': 'application/text',
        }
        const url = `${endpoint}/game`;
        const response = await fetch(url, {method, headers});
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        if (error instanceof Error) {
            return console.log('error message: ' + error.message)

        } else {
            return console.log('unexpected error: ' + error)
        }
    }
}
