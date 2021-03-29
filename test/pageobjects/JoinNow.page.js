const Page = require('./page');
const { assert } = require('chai');
class JoinNow extends Page {

    get heading(){return $('.h1-bold')}
    get titleDd(){return $('eol-select.textfield.textfield--defined')}
    get selectMs(){return $('.eol-dropdown-list__item-ct li')}
    get firstNameTb(){return $('#txtFirstName')}
    get lastNameTb(){return $('#txtFamilyName')}
    get dateTb(){return $('#MainContent_ctl01_JoinNowResponsiveDOB_day')}
    get monthTb(){return $('#MainContent_ctl01_JoinNowResponsiveDOB_month')}
    get yearTb(){return $('#MainContent_ctl01_JoinNowResponsiveDOB_year')}
    get countryTb(){return $('#MainContent_ctl01_txtCountryofResidence')}
    get selectCount(){return $('eol-select.textfield.residenceCountry div section ul li div')}
    get languageDd(){return $('eol-select.textfield.preferred-language')}
    get selectlang(){return $('eol-select.textfield.preferred-language div section ul li')}
    get phoneTb(){return $('#txtTelephoneNumber')}
    get emailTb(){return $('#txtEmailAddress')}
    get passwordTb(){return $('#txtSetNewPassword')}
    get createAccountTb(){return $('#btnjoin')}
    

    verifyHeading()
    {
        this.heading.isDisplayed();
    }

    fillForm(username, lastname, date, month, year, phone, email, password)
    {
        
        this.titleDd.click();
        this.selectMs.click();
        this.firstNameTb.setValue(username);
        this.lastNameTb.setValue(lastname);
        this.dateTb.setValue(date);
        this.monthTb.setValue(month);
        this.yearTb.setValue(year);
        this.countryTb.click();
        this.selectCount.click();
        this.languageDd.click();
        this.selectlang.click();
        this.phoneTb.setValue(phone);
        this.emailTb.setValue(email);
        this.passwordTb.setValue(password);
        createAccountTb.a

        
    }

    clickCreateAccount()
    {
        this.createAccountTb.click();
    }
 
}

module.exports = new JoinNow();