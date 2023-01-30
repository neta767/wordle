import { Router, Request, Response } from 'express';
import { getGuessStatus } from './statuses';
import bodyParser from 'body-parser';
import { solution } from '../constants/setting';
import { gameReq, gameRes } from '../lib/types';

function UpdateGameStatus(req: Request, res: Response) {
  const { guess, isGameOver } = req.body as gameReq;
  if (!guess && isGameOver === undefined) {
    return res.status(400).send({ message: 'missing input' });
  }
  if (!guess) {
    return res.status(400).send({ message: 'missing guess' });
  }
  if (isGameOver === undefined) {
    return res.status(400).send({ message: 'missing isGameOver' });
  }
  const resData: gameRes = {
    guessStatus: getGuessStatus(guess, solution),
  };
  if (isGameOver) {
    resData.solution = solution;
  }
  res.status(200).send(resData);
}

export const game = Router();

game.post('/', bodyParser.json(), UpdateGameStatus);
