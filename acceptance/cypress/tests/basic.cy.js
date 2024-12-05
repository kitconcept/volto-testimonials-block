context("Basic Acceptance Tests", () => {
  describe("Text Block Tests", () => {
    beforeEach(() => {
      cy.intercept("GET", "/**/*?expand*").as("content");
      cy.intercept("GET", "/**/Document").as("schema");

      // given a logged in editor and a page in edit mode
      cy.autologin();
      cy.createContent({
        contentType: "Image",
        contentId: "image",
        contentTitle: "my-image",
      });
      cy.createContent({
        contentType: "Document",
        contentId: "document",
        contentTitle: "Document",
      });
      cy.visit("/");
      cy.wait("@content");
    });

    it("As editor I can add a page with a testimonials block with multiple slides", () => {
      cy.get("#toolbar-add > .icon").click();
      cy.get("#toolbar-add-document").click();
      cy.get(".documentFirstHeading")
        .type("My Page")
        .get(".documentFirstHeading")
        .contains("My Page");

      cy.get(".slate-editor > div > p").click();
      cy.get(".text-slate-editor-inner > .ui > .icon").click();
      cy.get(
        '[style="transition: opacity 500ms;"] > :nth-child(6) > .ui > .icon',
      ).click();
      cy.get("#field-testimonial-0-slides-0").type(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      );
      cy.get(
        ".field-wrapper-image-1-slides-0 > .grid > .stretched > .eight > .objectbrowser-field > .ui > .icon",
      ).click();
      cy.get('[title="/image (Image)"]').dblclick();
      cy.get("#field-name-2-slides-0").type("Lorem Ipsum");
      cy.get("#field-additionalData-3-slides-0").type(
        "Lorem Ipsum dolor sit amet",
      );
      cy.get(".add-item-button-wrapper > .ui").click();
      cy.get("#field-testimonial-0-slides-1").type(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      );
      cy.get(
        ".field-wrapper-image-1-slides-1 > .grid > .stretched > .eight > .objectbrowser-field > .ui > .icon",
      ).click();
      cy.get('[title="/image (Image)"]').dblclick();
      cy.get("#field-name-2-slides-1").type("Lorem Ipsum");
      cy.get("#field-additionalData-3-slides-1").type(
        "Lorem Ipsum dolor sit amet",
      );
      cy.get(".add-item-button-wrapper > .ui").click();
      cy.get("#field-testimonial-0-slides-2").type(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      );
      cy.get(
        ".field-wrapper-image-1-slides-2 > .grid > .stretched > .eight > .objectbrowser-field > .ui > .icon",
      ).click();
      cy.get('[title="/image (Image)"]').dblclick();
      cy.get("#field-name-2-slides-2").type("Lorem Ipsum");
      cy.get("#field-additionalData-3-slides-2").click();
      cy.get("#field-additionalData-3-slides-2").type(
        "Lorem Ipsum dolor sit amet",
      );
      cy.get("#toolbar-save > .icon").click();
      // wait for content to load, then visit the page
      cy.wait("@content");
      cy.url().should("eq", `${Cypress.config().baseUrl}/my-page`);
    });
  });
});
