const { assert } = require('chai');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading(){return $('.content-header')}
    get cookiebtn(){return $('#onetrust-accept-btn-handler')}
    get usernameTb(){return $('#sso-email')}
    get passwordTb(){return $('#sso-password')}
    get loginbtn(){return $('#login-button')}
    get errorMsg(){return $('.login-error')}
    get joinNowbtn(){return $('.skywards-form .skywards-form__register-now')}
    

  
    
  
 
    acceptCookie()
    {
        this.cookiebtn.click();
    }
    
    verifyHeading()
    {
        this.heading.isDisplayed();
    }

    verifyUserNameTextbox()
    {
        this.usernameTb.waitForDisplayed({ timeout: 2000 });
    }

    verifyPasswordTextbox()
    {
        this.passwordTb.isDisplayed();
    }

    login (username, password) {
        this.usernameTb.setValue(username);
        this.usernameTb.clearValue();
        this.usernameTb.setValue(username);
        this.passwordTb.waitForDisplayed({ timeout: 4000 });
        this.passwordTb.setValue(password);
        this.loginbtn.click(); 
    }
  
    gotoJoinNowPage(){
        this.joinNowbtn.waitForClickable(2000);
        this.joinNowbtn.click();
    }

    verifyErrorMsg(Message){
        
        var msg= this.errorMsg.getText();
        console.log(msg);
        assert.equal(Message, msg);
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
