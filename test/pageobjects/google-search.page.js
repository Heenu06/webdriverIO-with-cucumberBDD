import Page from './page'

class googlePage extends Page {

    get searchBox()
    {
        return browser.element('//*[@name="q"]');
    }
    get searchButton()
    {
        return browser.element('//*[@name="btnK"]');
    }

    open () {
        super.open('https://www.google.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);

    }
    enterText(searchText)
    {
        this.searchBox.setValue(searchText);
        browser.pause(1000);
        this.searchButton.click();
    }
}

export default new googlePage();