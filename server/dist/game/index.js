import { Router } from 'express';
import { cypher } from "../cypher";
import { checkIfGameWon, getCharStatuses, getGuessesStatuses } from "./statuses";
import bodyParser from "body-parser";
import { MAX_CHALLENGES } from "../constants/setting";
function getHashSolution(req, res) {
    res.status(200).send(cypher.enc('WHICH'));
}
function UpdateGameStatus(req, res) {
    const { guesses, hashSolution } = req.body;
    if (!guesses && !hashSolution) {
        return res.status(400).send({ message: 'missing input' });
    }
    if (!guesses) {
        return res.status(400).send({ message: 'missing guesses' });
    }
    if (!hashSolution) {
        return res.status(400).send({ message: 'missing hashSolution' });
    }
    const solution = hashSolution ? cypher.dec(hashSolution.toString()) : '';
    const resData = {
        guessesStatuses: getGuessesStatuses(guesses, solution),
        charStatuses: getCharStatuses(guesses, solution),
        isGameWon: checkIfGameWon(guesses, solution),
        solution: (guesses.length === MAX_CHALLENGES) ? solution : ''
    };
    res.status(200).send(resData);
}
export const game = Router();
game.get('/', getHashSolution);
game.post('/', bodyParser.json(), UpdateGameStatus);
