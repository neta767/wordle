import {expect} from 'chai'
import {getGuessStatus} from './statuses'

describe('getGuessStatus', () => {
    it('guess statuses', () => {
        expect(getGuessStatus('ABCDE', 'EDCBA')).to.be.deep.eq([
            'present',
            'present',
            'correct',
            'present',
            'present',
        ])
        expect(getGuessStatus('ABCDE', 'VWXYZ')).to.be.deep.eq([
            'absent',
            'absent',
            'absent',
            'absent',
            'absent',
        ])
        expect(getGuessStatus('ABCDE', 'ABCDE')).to.be.deep.eq([
            'correct',
            'correct',
            'correct',
            'correct',
            'correct',
        ])

        expect(getGuessStatus('BOSSY', 'SASSY')).to.be.deep.eq([
            'absent',
            'absent',
            'correct',
            'correct',
            'correct',
        ])
    })
})
