class MainPage {

    openMainPage() {
        cy.visit("/");
    }

    locateDropdown(dropdownName) {
        cy.contains(dropdownName).should("be.visible");
    }

    ensureDropdownListContains(dropdownName, option) {
        cy.contains(dropdownName).realHover();
        cy.contains(option).should("be.visible");
    }

    selectDropdownOption(dropdownName, option) {
        cy.contains(dropdownName).realHover();
        cy.contains(option).click();
    }

}

export default new MainPage();