class CartPage {
    private checkoutButton = '[data-test="checkout"]';
  
    checkout() {
      cy.get(this.checkoutButton).click();
    }
  }
  
  export default CartPage;
  