import Page from './page'

class facebookLogin extends Page {



    login()
    {
        super.open('http://www.facebook.com')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);

    }
}


export default new facebookLogin()