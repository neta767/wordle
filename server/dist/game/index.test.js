import app from '../app';
import request from 'supertest';
import { expect } from 'chai';
describe('game feature', () => {
    describe('GET /game', () => {
        it('should respond with expected JSON structure', () => {
            return request(app)
                .get('/game')
                .expect(200)
                .then(res => {
                expect(res.text).to.be.a('string');
            });
        });
    });
    describe('POST /game', () => {
        it('should respond with expected JSON structure', () => {
            return request(app)
                .post('/game')
                .send({ guesses: [], hashSolution: '76c0c99c33baeeef5f43172b2495dbf8.2f02c544044237626d43a300c2a3d43a' })
                .expect(200)
                .expect('content-type', 'application/json; charset=utf-8')
                .then(res => {
                expect(res.body).to.include.all.keys('guessesStatuses', 'charStatuses', 'isGameWon', 'solution');
                //todo maybe check what the type...but for now they empty
            });
        });
        it('should return 400 for missing guesses', () => {
            return request(app)
                .post('/game')
                .send({ hashSolution: 'test' })
                .expect(400)
                .expect({ message: 'missing guesses' });
        });
        it('should return 400 for missing hashSolution', () => {
            return request(app)
                .post('/game')
                .send({ guesses: [] })
                .expect(400)
                .expect({ message: 'missing hashSolution' });
        });
        it('should return 400 for missing input', () => {
            return request(app)
                .post('/game')
                .send({})
                .expect(400)
                .expect({ message: 'missing input' });
        });
    });
});
