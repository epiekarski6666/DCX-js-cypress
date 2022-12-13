/// <reference types="cypress" />

import MainPage from "../support/page-object/mainPage"
import TechPage from "../support/page-object/techPage"


describe("List of capabilities", () => {
    it("Test Scenario: List of capabilities", () => {

        // Cypress: npx cypress open
        // Mocha: npx cypress run --spec "cypress/integration/capabilities.js" --browser chrome

        // Open the main page
        MainPage.openMainPage();

        // On the header locate the capabilities dropdown
        MainPage.locateDropdown("Capabilities");

        // Ensure that the capabilities dropdown list contains [Products & Platforms, Technology Expertise]
        MainPage.ensureDropdownListContains("Capabilities", "Products & Platforms");
        MainPage.ensureDropdownListContains("Capabilities", "Technology Expertise");

        // Select Technology Expertise and ensure that the page contains a list of technologies
        MainPage.selectDropdownOption("Capabilities", "Technology Expertise");
        TechPage.ensurePageContainsTechnologiesList();

        // Each of the technology blocks should contain: Name, Image, Description]
        TechPage.checkBlocksContainNameImageDescription();

    })
})