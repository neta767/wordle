import {Keyboard} from './Keyboard'

describe('<Keyboard />', () => {
    it('should contains 27 keys', () => {
        cy.mount(<Keyboard onChar={() => {
        }} keysStatuses={{}} onDelete={() => {
        }}/>)
        cy.get('button').should('have.length', 27)
    })

    it('should display key with the correct value and correspondingly style', () => {
        cy.mount(<Keyboard onChar={() => {
        }} keysStatuses={{'T': 'correct'}} onDelete={() => {
        }}/>)
        cy.contains('T').should('have.css', 'background-color', 'rgb(34, 197, 94)')
    })

    it('should send value when key pressed', () => {
        const handleChar = cy.spy().as('onChar');
        cy.mount(<Keyboard onChar={handleChar} keysStatuses={{}} onDelete={() => {
        }}/>)
        cy.document('button').trigger('keyup', {key: 'T'})
        cy.get('@onChar').should('have.been.calledWith', ('T'));
    })

    it('should send value when key clicked', () => {
        const handleChar = cy.spy().as('onChar');
        cy.mount(<Keyboard onChar={handleChar} keysStatuses={{}} onDelete={() => {
        }}/>)
        cy.contains('T').click()
        cy.get('@onChar').should('have.been.calledWith', ('T'));
    })

    it('should not send value when invalid key presses', () => {
        const handleChar = cy.spy().as('onChar');
        cy.mount(<Keyboard onChar={handleChar} keysStatuses={{}} onDelete={() => {
        }}/>)
        cy.document('button').trigger('keyup', {key: 'א'})
        cy.get('@onChar').should('not.to.have.been.called', ('א'));
    })

    it('should called onDelete when Backspace pressed', () => {
        const handleDelete = cy.spy().as('onDelete');
        cy.mount(<Keyboard onChar={() => {
        }} keysStatuses={{}} onDelete={handleDelete}/>)
        cy.document('button').trigger('keyup', {code: 'Backspace'})
        cy.get('@onDelete').should('be.called')
    })

    it('should called onDelete when Delete clicked', () => {
        const handleDelete = cy.spy().as('onDelete');
        cy.mount(<Keyboard onChar={() => {
        }} keysStatuses={{}} onDelete={handleDelete}/>)
        cy.contains('Delete').click()
        cy.get('@onDelete').should('be.called')
    })
})