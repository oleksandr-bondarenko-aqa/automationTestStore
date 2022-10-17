import BasePage from "./BasePage";
import {faker} from "@faker-js/faker";

class RegistrationPage extends BasePage {

    visit() {
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/create');
    }

    getFirstName() {
        return cy.get('#AccountFrm_firstname');
    }

    getLastName() {
        return cy.get('#AccountFrm_lastname');
    }

    getEmail() {
        return cy.get('#AccountFrm_email');
    }

    getAddress1() {
        return cy.get('#AccountFrm_address_1');
    }

    getCity() {
        return cy.get('#AccountFrm_city');
    }

    getRegionState() {
        return cy.get('#AccountFrm_zone_id');
    }

    getZipCode() {
        return cy.get('#AccountFrm_postcode');
    }

    getCountry() {
        return cy.get('#AccountFrm_country_id');
    }

    getLoginName() {
        return cy.get('#AccountFrm_loginname');
    }

    getPassword() {
        return cy.get('#AccountFrm_password');
    }

    getConfirmPassword() {
        return cy.get('#AccountFrm_confirm');
    }

    getNewsletterRadioYes() {
        return cy.get('#AccountFrm_newsletter1');
    }

    getTermsAgreeCheckbox() {
        return cy.get('#AccountFrm_agree');
    }

    getContinueButton() {
        return cy.get('button[title="Continue"]');
    }

    verifyThankYouMessage() {
        cy.log("**Verify thank you message**")
        cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')
    }
}

export default new RegistrationPage();