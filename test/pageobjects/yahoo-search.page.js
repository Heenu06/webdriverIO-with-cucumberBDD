
import Page from './page';

class YahooPage extends Page  {
  /**
  * define elements
  */

  get searchInput()   { return browser.element('#yschsp'); }
  get searchButton()  { return browser.element('//span[@title="Search"]'); }
  get resultsList()   { return browser.element('#results'); }
  get cookiePage()    { return browser.element('//h1[@class="consent-title"]');}
  get clickOk()      { return browser.element('//button[@class="btn primary"]');}  //class="btn primary"

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://search.yahoo.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
      if(this.cookiePage.isVisible()){
          this.clickOk.click();
      }
  }

  enterText (item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }
}

export default new YahooPage();
