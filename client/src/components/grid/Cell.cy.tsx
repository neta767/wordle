import {Cell} from './Cell'

describe('<Cell />', () => {
    it('contains the correct value', () => {
        cy.mount(<Cell value='test'/>)
        cy.get('div div').should('exist').contains('test')
    })
})