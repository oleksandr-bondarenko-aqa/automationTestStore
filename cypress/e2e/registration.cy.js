import registrationPage from "../support/pages/RegistrationPage";
import {faker} from "@faker-js/faker";

const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postcode: faker.address.zipCode(),
    userName: faker.internet.userName(),
    password: faker.internet.password(15)
}

//   it('registration', () => {
//     cy.visit('/');
//
//     cy.get('#customer_menu_top').click();
//     cy.get('#accountFrm button').click();
//
//     cy.get('#AccountFrm_firstname').type('First Name');
//     cy.get('#AccountFrm_lastname').type('Last Name');
//     cy.get('#AccountFrm_email').type('olegzandr4@i.ua');
//     cy.get('#AccountFrm_address_1').type('random address');
//     cy.get('#AccountFrm_city').type('Otso City');
//     cy.get('#AccountFrm_zone_id').select(1);
//     cy.get('#AccountFrm_postcode').type('77788');
//     cy.get('#AccountFrm_country_id').select('United Kingdom');
//     cy.get('#AccountFrm_loginname').type('olegzandr4');
//     cy.get('#AccountFrm_password').type('Qwerty@1!');
//     cy.get('#AccountFrm_confirm').type('Qwerty@1!');
//     cy.get('#AccountFrm_newsletter1').check();
//     cy.get('#AccountFrm_agree').check();
//     cy.get('button[title="Continue"]').click();
//
//     cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')
//   })

it('registration with faker.js', () => {
    registrationPage.visit();

    cy.log("**Fill the registration form**")
    registrationPage.getFirstName().type(user.firstName);
    registrationPage.getLastName().type(user.lastName);
    registrationPage.getEmail().type(user.email);
    registrationPage.getAddress1().type(user.address);
    registrationPage.getCity().type(user.city);
    registrationPage.getRegionState().select(1);
    registrationPage.getZipCode().type(user.postcode);
    registrationPage.getCountry().select('United Kingdom');
    registrationPage.getLoginName().type(user.userName);
    registrationPage.getPassword().type(user.password);
    registrationPage.getConfirmPassword().type(user.password);
    registrationPage.getNewsletterRadioYes().check();
    registrationPage.getTermsAgreeCheckbox().check();
    registrationPage.getContinueButton().click();

    registrationPage.verifyThankYouMessage();
})

