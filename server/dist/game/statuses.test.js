import { expect } from 'chai';
import { getGuessStatuses } from './statuses';
describe('getGuessStatuses', () => {
    it('guess statuses', () => {
        expect(getGuessStatuses('ABCDE', 'EDCBA')).to.be.deep.eq([
            'present',
            'present',
            'correct',
            'present',
            'present',
        ]);
        expect(getGuessStatuses('ABCDE', 'VWXYZ')).to.be.deep.eq([
            'absent',
            'absent',
            'absent',
            'absent',
            'absent',
        ]);
        expect(getGuessStatuses('ABCDE', 'ABCDE')).to.be.deep.eq([
            'correct',
            'correct',
            'correct',
            'correct',
            'correct',
        ]);
        expect(getGuessStatuses('BOSSY', 'SASSY')).to.be.deep.eq([
            'absent',
            'absent',
            'correct',
            'correct',
            'correct',
        ]);
    });
});
