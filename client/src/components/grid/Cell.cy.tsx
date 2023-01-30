import { Cell } from "./Cell";

describe("<Cell />", () => {
  it("should contains the correct value", () => {
    cy.mount(<Cell value="test" />);
    cy.get("div div").should("exist").contains("test");
  });

  it("should have empty cell style", () => {
    cy.mount(<Cell />);
    cy.get("div div").should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
  });

  it("should have absent cell style", () => {
    cy.mount(<Cell status="absent" />);
    cy.get("div div").should(
      "have.css",
      "background-color",
      "rgb(148, 163, 184)"
    );
  });

  it("should have correct cell style", () => {
    cy.mount(<Cell status="correct" />);
    cy.get("div div").should(
      "have.css",
      "background-color",
      "rgb(34, 197, 94)"
    );
  });

  it("should have present cell style", () => {
    cy.mount(<Cell status="present" />);
    cy.get("div div").should(
      "have.css",
      "background-color",
      "rgb(234, 179, 8)"
    );
  });
});
