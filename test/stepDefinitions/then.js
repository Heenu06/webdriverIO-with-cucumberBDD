
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import myAccount from '../pageobjects/login_phptravels.page';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo search feature
  Then(/^I should see a list of search results$/, function() {
    yahooPage.isSearched().should.be.true;
  });

  // *** belongs to php travels-loging  feature
  Then(/^I should see the message "([^"]*)" on my account page$/, function(message) {
    myAccount.getUserInfo().should.equal(message);
  });

  //*** belongs to google search feature
  Then(/^I should see a list of search results on google page$/, function()
  {
    googlePage.getResults().should.be.true;
  });



});
