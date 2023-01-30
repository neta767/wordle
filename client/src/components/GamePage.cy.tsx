import React from "react";
import { GamePage } from "./GamePage";

describe("<GamePage />", () => {
  it("renders", () => {
    cy.mount(<GamePage />);
  });
});
