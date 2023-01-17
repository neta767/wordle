import App from "./App";
import React from "react";
// import AppRouter from './AppRouter'

describe("<App/>", () => {
    it("renders", () => {
        cy.mount(<App/>);

    });
//     it('home link should be active when url is "/"', () => {
//   // No need to pass in custom initialEntries as default url is '/'
//   cy.mount(<AppRouter userName='' />)
//   cy.get('div').contains('Welcome')
// })
//
// it('game link should be active when url is "/game"', () => {
//   cy.mount(<AppRouter userName='' />, {
//     routerProps: {
//       initialEntries: ['/game'],
//     },
//   })
//   // cy.get('').contains('Login').should('have.class', 'active')
//   });
});


