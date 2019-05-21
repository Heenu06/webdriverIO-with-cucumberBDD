
import { defineSupportCode } from 'cucumber';

import gmailLogin from '../pageobjects/gmail-login.page';

defineSupportCode(function({ Given }) {

  //*** belongd to gmail login
  Given(/^I am on the gmail page$/, function() {
    gmailLogin.open();
    browser.getTitle().should.equal('Gmail');
  });

  });

