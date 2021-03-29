const LoginPage = require('../../login.page');
const JoinNow = require('../../JoinNow.page');

describe('Verify join now page', () => {
    it('Try to login via invalid credentials', () => {

        LoginPage.open();
        LoginPage.acceptCookie();
        LoginPage.gotoJoinNowPage();
        //browser.back();
        //browser.closeWindow();
        JoinNow.verifyHeading();
        JoinNow.fillForm('Rajni', 'Sharma', '01', 'June', '1991', '9876543210', 'rajni@yopmail.com', 'Hoping good')       
        JoinNow.clickCreateAccount();

       // browser.newSession(capabilities);
        //browser.saveScreenshot('./Screenshot');
       // browser.deleteCookies(['test3']);
       // cookies = browser.getCookies();
        //console.log(cookies);

        //browser.newWindow('https://webdriver.io');
       // browser.navigateTo('https://webdriver.io');
       // browser.pause(3000);
        //browser.reloadSession();
        //console.log(browser.sessionId);
       
    });
});