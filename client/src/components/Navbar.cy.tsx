import React from 'react'
import {Navbar} from './Navbar'
import {GAME_TITLE} from "../constants/strings";

describe('<Navbar />', () => {
    it('should contain 3 button and GAME_TITLE', () => {
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get('button').should('exist').should('have.length', 3)
        cy.get('p').contains(GAME_TITLE).should('exist')
    })

    it('should contains login-button without logout-button and user-name', () => {
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='login-button']").should('exist')
        cy.get("[data-cy='logout-button']").should('not.exist')
        cy.get("[data-cy='user-name']").should('not.exist')
    })

    it('should contains logout-button and user-name without login-button ', () => {
        cy.mount(<Navbar userName='test' logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='login-button']").should('not.exist')
        cy.get("[data-cy='logout-button']").should('exist')
        cy.get("[data-cy='user-name']").contains('test').should('exist')
    })

    it('should send true when login-button clicked', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={handleClick} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='login-button']").click()
        cy.get('@onClick').should('have.been.calledWith', true);
    })

    it('should call logout when logout-button clicked', () => {
        cy.mount(<Navbar userName='test' logout={cy.stub().as('onClick')} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='logout-button']").click()
        cy.get('@onClick').should('have.been.called');
    })

    it('should send true when info-button clicked', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={handleClick} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='info-button']").click()
        cy.get('@onClick').should('have.been.calledWith', true);
    })

    it('should contains login-button without logout-button', () => {
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={true}/>)
        cy.get("[data-cy='light-button']").should('exist')
        cy.get("[data-cy='dark-button']").should('not.exist')
    })

    it('should contains dark-button without light-button ', () => {
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={() => {
        }} isDarkMode={false}/>)
        cy.get("[data-cy='light-button']").should('not.exist')
        cy.get("[data-cy='dark-button']").should('exist')
    })

    it('should send false when light-button clicked', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={handleClick} isDarkMode={true}/>)
        cy.get("[data-cy='light-button']").click()
        cy.get('@onClick').should('have.been.calledWith', false);
    })


    it('should send true when dark-button clicked', () => {
        const handleClick = cy.spy().as('onClick');
        cy.mount(<Navbar userName={null} logout={() => {
        }} setIsInfoModalOpen={() => {
        }} setIsLoginModalOpen={() => {
        }} handleDarkMode={handleClick} isDarkMode={false}/>)
        cy.get("[data-cy='dark-button']").click()
        cy.get('@onClick').should('have.been.calledWith', true);
    })
})
