

import { defineSupportCode } from 'cucumber';

import gmailLogin from '../pageobjects/gmail-login.page';

defineSupportCode(function({ Then }) {


    // *** belongs to gmail login feature
    Then(/^email should sent successfully$/, function() {
        gmailLogin.emailSent();
        //browser.getTitle().should.equal('Inbox (179) - heenupathak06@gmail.com - Gmail');
    });


});


