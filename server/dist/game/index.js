import { Router } from 'express';
import { getGuessStatus } from './statuses';
import bodyParser from 'body-parser';
import { solution } from '../constants/setting';
function UpdateGameStatus(req, res) {
    const { guess, isGameOver } = req.body;
    if (!guess && isGameOver === undefined) {
        return res.status(400).send({ message: 'missing input' });
    }
    if (!guess) {
        return res.status(400).send({ message: 'missing guess' });
    }
    if (isGameOver === undefined) {
        return res.status(400).send({ message: 'missing isGameOver' });
    }
    const resData = {
        guessStatus: getGuessStatus(guess, solution),
    };
    if (isGameOver) {
        resData.solution = solution;
    }
    res.status(200).send(resData);
}
export const game = Router();
game.post('/', bodyParser.json(), UpdateGameStatus);
