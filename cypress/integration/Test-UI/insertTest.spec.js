/**
 * This test have how objective verify if it can insert new element to the API
 */

/**
 * ARR: Arrange: Organized here are the items I need to run the tests
 */
const baseURL = "http://localhost:4200/";

//Correspond the element that it want add
const bookToInsert = {
  name: "The Pragmatic Programmer",
  author: "Andy Hunt and Dave Thomas",
};

//ASS: Assert
describe("Verify if it can insert new element and show in the dashboard", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });

  it("Has the correct title", () => {
    cy.title().should("equal", "BooksUi");
  });

  it("Verify that the save button is disabled for save a book", () => {
    cy.contains("Add").click();
    cy.contains("Save").should("be.disabled");
  });

  it("The initial state of my app is correct", () => {
    // Input name
    cy.contains("Add").click();
    cy.get('[data-cy= "input-name"]').should("be.visible");
    cy.get('[data-cy= "input-name"]').should("be.empty");

    //Input author
    cy.get('[data-cy= "input-author"]').should("be.visible");
    cy.get('[data-cy= "input-author"]').should("be.empty");
    cy.contains("Save").should("be.disabled");
  });
  it("Check if it can add new book in the dashboard", () => {
    cy.contains("Add").click();
    //Input name
    cy.get('[data-cy= "input-name"]').click();
    cy.get('[data-cy= "input-author"]').focus();
    cy.wait(500);
    cy.get('[data-cy= "input-name"]').type(`${bookToInsert.name}`);
    cy.get('[data-cy= "input-name"]').should(
      "have.value",
      `${bookToInsert.name}`
    );
    //Input author
    cy.get('[data-cy= "input-author"]').focus();
    cy.get('[data-cy= "input-author"]').click();
    cy.wait(500);
    cy.get('[data-cy= "input-author"]').type(`${bookToInsert.author}`);
    cy.get('[data-cy= "input-author"]').should(
      "have.value",
      `${bookToInsert.author}`
    );
    cy.wait(900);
    cy.contains("Save").click();
  });
});
