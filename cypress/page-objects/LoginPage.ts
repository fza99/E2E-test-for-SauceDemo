class LoginPage {
    private usernameInput = '[data-test="username"]';
    private passwordInput = '[data-test="password"]';
    private loginButton = '[data-test="login-button"]';
  
    visit() {
      cy.visit('https://saucedemo.com/');
    }
  
    login(username: string, password: string) {
      cy.get(this.usernameInput).type(username);
      cy.get(this.passwordInput).type(password);
      cy.get(this.loginButton).click();
    }
  }
  
  export default LoginPage;
  