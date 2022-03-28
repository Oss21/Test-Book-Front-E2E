/**
 * This test have how objective verify if it can delete a element
 */

/**
 * ARR: Arrange: Organized here are the items I need to run the tests
 */
const baseURL = "http://localhost:4200/";

let bookToDelete = {};

//ASS: Assert
describe("Verify if it can delete a element and show in the dashboard", () => {
  let position = 0;
  beforeEach(() => {
    cy.visit(`${baseURL}`);
    // Allows obtain the random element for delete
    cy.get("tr td:nth-child(2)").then((result) => {
      position = Math.floor(Math.random() * result.length);
    });
  });

  it("Has the correct title", () => {
    cy.title().should("equal", "BooksUi");
  });

  it("Check if it can delete a book", () => {
    // Input name
    cy.get("tr td:nth-child(2)").each((value, index, $list) => {
      if (position === index) {
        cy.log(index);
        cy.get("td").eq(0).click();
        cy.wait(500);
        cy.get('[data-cy="bt-delete"]').click();
      }
    })
  })

  it("Check if i can delete multiple elements",()=>{
      //cy.get("tr").eq(0).click();
  
  })

})
