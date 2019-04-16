
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/login_phptravels.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo search feature
  Given(/^I am on the search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
  });

  // *** belongs to php travel-loging  feature
  Given(/^I am on the phptravels page$/, function() {
    loginPage.open();     // navigating to login page
  });

});
