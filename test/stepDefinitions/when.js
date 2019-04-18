
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/login_phptravels.page';
import googlePage from '../pageobjects/google-search.page';
import facebookPage from '../pageobjects/facebook-login.page';

defineSupportCode(function({ When }) {
  // *** belongs to Yahoo search feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    yahooPage.search();
  });

  // *** belongs to php travels-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });

  // *** belongs to google search feature
  When(/^I enter "([^"]*)" into the google search box$/, function(arg1) {
    googlePage.enterText(arg1);

  });
  When(/^I click the google search button$/, function(){
    googlePage.search();
  })

  // *** belongs to facebook login feature
  When(/^I enter username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
        facebookPage.accountLogin(arg1, arg2);
      });


});
