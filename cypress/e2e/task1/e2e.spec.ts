// cypress/e2e/e2e.spec.ts

import LoginPage from '../../page-objects/LoginPage';
import ProductPage from '../../page-objects/ProductPage';
import CartPage from '../../page-objects/CartPage';
import CheckoutPage from '../../page-objects/CheckoutPage';

describe('E2E Test for SauceDemo', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should add a product to the cart and finalize the purchase', () => {
    // Visit the website and login
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    // Add a product to the cart
    productPage.addToCart();
    productPage.goToCart();

    // Checkout
    cartPage.checkout();

    // Fill in checkout information and finalize the purchase
    checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    checkoutPage.finishCheckout();

    // Verify the order completion
    checkoutPage.verifyOrderCompletion();
  });
});
