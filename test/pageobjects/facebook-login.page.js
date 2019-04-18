import Page from './page'

class facebookLogin extends Page {

    get usernameInput() {
        return browser.element('//*[@id="email"]');
    }

    get passwordInput() {
        return browser.element('//*[@id="pass"]');
    }

    get loginButton() {
        return browser.element('//*[@id="loginbutton"]');
    }
    get accountDetails(){
        return browser.element('//*[@id="bluebarRoot"]');
    }
    get searchBox() {
        return browser.element('//*[@name="q"]');
    }
    get searchButton() {
        return browser.element('//*[@class="_585_"]');
    }



    login()
    {
        super.open('http://www.facebook.com')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);

    }

    accountLogin(username, password)
    {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
        browser.pause(2000);

    }

    getAccount()
    {

        this.accountDetails.waitForVisible(2000);
        return this.accountDetails.isVisible();
    }

    searchFor(name)
    {
        this.searchBox.setValue(name);
        browser.pause(1000);
        this.searchButton.click();

    }
}


export default new facebookLogin()