const LoginPage = require('../../login.page');
//const SecurePage = require('../../secure.page');

describe('Verify login page', () => {
    it('Try to login via invalid credentials', () => {
        LoginPage.open();
        LoginPage.acceptCookie();
        LoginPage.verifyHeading();
        LoginPage.verifyUserNameTextbox();
        LoginPage.verifyPasswordTextbox();
        LoginPage.login('Rajni', 'Hoping good');
        LoginPage.verifyErrorMsg('Sorry, the email address, Emirates Skywards number or password you entered is incorrect. Please check and try again.');

    });
});


