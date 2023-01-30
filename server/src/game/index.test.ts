import app from '../app';
import request from 'supertest';
import { expect } from 'chai';

describe('game feature', () => {
  describe('POST /game', () => {
    it('should respond with expected JSON structure', () => {
      return request(app)
        .post('/game')
        .send({ guess: 'test', isGameOver: true })
        .expect(200)
        .expect('content-type', 'application/json; charset=utf-8')
        .then((res) => {
          expect(res.body).to.include.all.keys('solution', 'guessStatus');
        });
    });

    it('should respond with expected JSON structure', () => {
      return request(app)
        .post('/game')
        .send({ guess: 'test', isGameOver: false })
        .expect(200)
        .expect('content-type', 'application/json; charset=utf-8')
        .then((res) => {
          expect(res.body).to.include.all.keys('guessStatus');
        });
    });

    it('should return 400 for missing guesses', () => {
      return request(app).post('/game').send({ isGameOver: true }).expect(400).expect({ message: 'missing guess' });
    });

    it('should return 400 for missing isGameOver', () => {
      return request(app).post('/game').send({ guess: 'test' }).expect(400).expect({ message: 'missing isGameOver' });
    });

    it('should return 400 for missing input', () => {
      return request(app).post('/game').send({}).expect(400).expect({ message: 'missing input' });
    });
  });
});
