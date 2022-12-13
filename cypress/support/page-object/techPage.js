class TechPage {

    ensurePageContainsTechnologiesList() {
        cy.get("div.media-body").should("have.length", 6);
        
    }

    checkBlocksContainNameImageDescription() {
        for (let i = 0; i < 6; i++) {
            cy.get("div.media-body").eq(i).find("*[class^='card-']")
            .should("have.class", "card-heading")
            .should("have.class", "card-image")
            .should("have.class", "card-description")
            }
        }

}

export default new TechPage();