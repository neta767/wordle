import React from 'react'
import AppRouter from "./AppRouter";

describe.skip('<AppRouter />', () => {
    //todo fix
    it('renders', () => {
        cy.mount(
            <AppRouter userName={null}/>
        )
        cy.contains('Welcome').should('exist')

    })

    it('renders', () => {
        cy.mount(
            <AppRouter userName={null}/>, {
                routerProps: {
                    initialEntries: ['/game'],
                },
            })
        cy.get("[data-cy='game-page']").should('exist')

    })
})