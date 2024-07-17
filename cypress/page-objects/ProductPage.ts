class ProductPage {
    private addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    private cartLink = '.shopping_cart_link';
  
    addToCart() {
      cy.get(this.addToCartButton).click();
    }
  
    goToCart() {
      cy.get(this.cartLink).click();
    }
  }
  
  export default ProductPage;
  