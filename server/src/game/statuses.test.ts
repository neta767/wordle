import { expect } from 'chai';
import { getGuessStatus } from './statuses';

describe('getGuessStatus', () => {
  it('guess statuses', () => {
    expect(getGuessStatus('ABCDE', 'EDCBA')).to.be.deep.eq([
      { value: 'A', status: 'present' },
      { value: 'B', status: 'present' },
      { value: 'C', status: 'correct' },
      { value: 'D', status: 'present' },
      { value: 'E', status: 'present' },
    ]);
    expect(getGuessStatus('ABCDE', 'VWXYZ')).to.be.deep.eq([
      { value: 'A', status: 'absent' },
      { value: 'B', status: 'absent' },
      { value: 'C', status: 'absent' },
      { value: 'D', status: 'absent' },
      { value: 'E', status: 'absent' },
    ]);
    expect(getGuessStatus('ABCDE', 'ABCDE')).to.be.deep.eq([
      { value: 'A', status: 'correct' },
      { value: 'B', status: 'correct' },
      { value: 'C', status: 'correct' },
      { value: 'D', status: 'correct' },
      { value: 'E', status: 'correct' },
    ]);

    expect(getGuessStatus('BOSSY', 'SASSY')).to.be.deep.eq([
      { value: 'B', status: 'absent' },
      { value: 'O', status: 'absent' },
      { value: 'S', status: 'correct' },
      { value: 'S', status: 'correct' },
      { value: 'Y', status: 'correct' },
    ]);
  });
});
