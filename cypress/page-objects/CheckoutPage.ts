class CheckoutPage {
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';
    private finishButton = '[data-test="finish"]';
    private completeHeader = '.complete-header';
  
    fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
      cy.get(this.firstNameInput).type(firstName);
      cy.get(this.lastNameInput).type(lastName);
      cy.get(this.postalCodeInput).type(postalCode);
      cy.get(this.continueButton).click();
    }
  
    finishCheckout() {
      cy.get(this.finishButton).click();
    }
  
    verifyOrderCompletion() {
      cy.get(this.completeHeader).should('contain.text', 'Thank you for your order!');
    }
  }
  
  export default CheckoutPage;
  