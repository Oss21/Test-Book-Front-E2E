/**
 * This test have how objective verify if it can insert new element to the API
 */

/**
 * ARR: Arrange: Organized here are the items I need to run the tests
 */
const baseURL = "http://localhost:4200/";

const bookToUpdate = {
  name: "Refactoring: Improving the Design of Existing Code",
  author: "Martin Fowler",
};

//Correspond the element that it want update
const bookToDataUpdate = {
  name: "Software Testing and Quality Assurance: Theory and Practice",
  author: "Kshirasagar Naik and Priyadarshi Tripathy",
};

//ASS: Assert
describe("Verify if it can update a element and show in the dashboard", () => {
    beforeEach(() => {
      cy.visit(`${baseURL}`);
    });
  
    it("Has the correct title", () => {
      cy.title().should("equal", "BooksUi");
    });

  it("Check if it can update a book", () => {
      // Input name
      cy.get("tr td:nth-child(2)").each((value, index, $list) => {
        const bookName = value.text();
        if (bookName.includes(`${bookToUpdate.name}`)) {
          //Verify if the book have the same name before to edit
          cy.get("tr td:nth-child(2)")
            .eq(index)
            .next()
            .then((valueAuthor) => {
              // text of following sibling
              const bookAuthor = valueAuthor.text();
              if (bookAuthor.includes(`${bookToUpdate.author}`)) {
                //Verify if the book have the same author to edit
                cy.get("td").eq(3).click();
              }
            });
        }
      }); //End to show the edit window

    //Input name
    cy.get('[data-cy= "input-name"]').click();
    cy.get('[data-cy= "input-name"]').clear();
    cy.wait(500);
    cy.get('[data-cy= "input-name"]').type(`${bookToDataUpdate.name}`);
    cy.get('[data-cy= "input-name"]').should(
      "have.value",
      `${bookToDataUpdate.name}`
    );
    cy.wait(500);
    //Input author
    cy.get('[data-cy= "input-author"]').click();
    cy.get('[data-cy= "input-author"]').focus().clear();
    cy.get('[data-cy= "input-author"]').type(`${bookToDataUpdate.author}`);
    cy.get('[data-cy= "input-author"]').should(
      "have.value",
      `${bookToDataUpdate.author}`
    );
    cy.wait(900);
    cy.contains("Save").click();
  });
});
