import React from 'react'
import {Keyboard} from './Keyboard'
import {Key} from "./Key";

describe('<Keyboard />', () => {
    it('renders', () => {
        cy.mount(<Keyboard onChar={() => {
        }} charStatuses={{}} onDelete={() => {
        }}/>)
        cy.get('button').should('have.length', 27)
    })

    it('renders', () => {
        const handleChar = cy.spy().as('onChar');
        cy.mount(<Keyboard onChar={handleChar} charStatuses={{}} onDelete={() => {
        }}/>)
        cy.document('button').trigger('keyup', {key: 'T'})
        cy.get('@onChar').should('have.been.calledWith', ('T'));
    })
})