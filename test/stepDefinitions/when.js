
import { defineSupportCode } from 'cucumber';

import gmailLogin from '../pageobjects/gmail-login.page';

defineSupportCode(function({ When }) {


  // *** belongs to gmail login feature
  When(/^I enter username "([^"]*)" into the text box and click next$/, function(arg1) {
    gmailLogin.enterUsername(arg1);
  });

  When(/^I enter password "([^"]*)" into the text box and click next$/, function(arg1) {
    gmailLogin.enterPassword(arg1);
    //browser.getTitle().should.equal('Gmail');
  });

  When(/^I click on compose button$/, function() {
    gmailLogin.composeMail();

  });

  When(/^I enter TO email id "([^"]*)" and subject "([^"]*)" and "([^"]*)"$/, function(arg1, arg2, arg3) {
    gmailLogin.sendMail(arg1, arg2, arg3);

  });






});
