import Page from './page';

class gmailLogin extends Page {


    get usernameInput()   { return browser.element('//*[@id="identifierId"]'); }
    get nextButton() {return browser.element('//content/span[contains(., "Next")]'); }
    get passwordInput() {return browser.element('//input[@name="password"]');}
    get composeButton() {return browser.element('//div[@class="T-I J-J5-Ji T-I-KE L3"]');}
    get enterEmail() {return browser.element('//textarea[@name="to"]');}
    get enterSubject() {return browser.element('//input[@name="subjectbox"]');}
    get enterMsg() {return browser.element('//div[@class="Am Al editable LW-avf"]');}
    get sendButton() {return browser.element('//div[@class="T-I J-J5-Ji aoO v7 T-I-atl L3"]');}
    get msg() {return browser.element('//span[contains(., "Message Sent")]'); }
    //get sendButton() {return browser.element('//div[@id=":1ku"]');}

    open() {
        super.open('https://www.google.com/gmail/')
        browser.pause(1000);

    }

    enterUsername(username) {
        this.usernameInput.setValue(username);
        this.nextButton.click();
        browser.pause(2000);

    }

    enterPassword(password) {
        this.passwordInput.setValue(password);
        this.nextButton.click();
        browser.pause(2000);

    }

    composeMail() {
        browser.pause(2000);
        this.composeButton.click();
        browser.pause(2000);
    }

    sendMail(toMailId, subject, message) {
        this.enterEmail.setValue(toMailId);
        this.enterSubject.setValue(subject);
        browser.pause(2000);
        this.enterMsg.setValue(message);
        this.sendButton.click();

        browser.pause(4000);
    }

  /*  emailSent() {
       var msg = browser.getTitle();
        console.log("msg is = " + msg);


    }  */


}

export default new gmailLogin();