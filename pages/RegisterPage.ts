import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
    // Locators 
    readonly url = 'https://automationexercise.com/';

    // private txtUserId = this.page.locator("//input[@placeholder='Name']");
    // private txtEmail = this.page.locator("//input[@placeholder='Email Address' and @data-qa='signup-email']");
    // private btnSubmit = this.page.locator("//button[@type='submit' and text()='Signup']"); 
    // private rdoGenderMale = this.page.locator("//div[@id='uniform-id_gender1']");  
    // private chkNewsletter = this.page.locator("//input[@id='newsletter']");
    // private chkOptin = this.page.locator("//input[@id='optin']"); 
    // private txtPassword = this.page.locator("//input[@id='password']"); 
    // private ddlDay = this.page.locator("//select[@id='days']");
    // private ddlMonth = this.page.locator("//select[@id='months']");
    // private ddlYear = this.page.locator("//select[@id='years']"); 
    // private txtFirstName = this.page.locator("//input[@id='first_name']");
    // private txtLastName = this.page.locator("//input[@id='last_name']");
    // private txtCompany = this.page.locator("//input[@id='company']");
    // private txtAdd1 = this.page.locator("//input[@id='address1']");
    // private txtAdd2 = this.page.locator("//input[@id='address2']");
    // private ddlCountry = this.page.locator("//select[@id='country']");
    // private txtState = this.page.locator("//input[@id='state']");
    // private txtCity = this.page.locator("//input[@id='city']");
    // private txtZipCode = this.page.locator("//input[@id='zipcode']");
    // private txtMobPhone = this.page.locator("//input[@id='mobile_number']"); 
    // private btnCreateAccount = this.page.locator("//button[@type='submit' and text()='Create Account']");
    // private btnContinue = this.page.locator("//a[@class='btn btn-primary' and text()='Continue']");
    
    readonly txtUserId: Locator;
    readonly txtEmail: Locator;
    readonly btnSubmit: Locator;
    readonly rdoGenderMale: Locator;
    readonly chkNewsletter: Locator;
    readonly chkOptin: Locator;
    readonly txtPassword: Locator;
    readonly ddlDay: Locator;
    readonly ddlMonth: Locator;
    readonly ddlYear: Locator;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtCompany: Locator;
    readonly txtAdd1: Locator;
    readonly txtAdd2: Locator;
    readonly ddlCountry: Locator;
    readonly txtState: Locator;
    readonly txtCity: Locator;
    readonly txtZipCode: Locator;
    readonly txtMobPhone: Locator;
    readonly btnCreateAccount: Locator;
    readonly btnContinue: Locator;

    readonly txtEmailLogin: Locator;
    readonly txtPassLogin: Locator;
    readonly submitLoginBtn: Locator;

    // constructor
    constructor(page: Page) {
        super(page);  
        this.txtUserId = page.locator("//input[@placeholder='Name']");
        this.txtEmail = page.locator("//input[@placeholder='Email Address' and @data-qa='signup-email']");
        this.btnSubmit = page.locator("//button[@type='submit' and text()='Signup']");
        this.rdoGenderMale = page.locator("//div[@id='uniform-id_gender1']");
        this.chkNewsletter = page.locator("//input[@id='newsletter']");
        this.chkOptin = page.locator("//input[@id='optin']");
        this.txtPassword = page.locator("//input[@id='password']");
        this.ddlDay = page.locator("//select[@id='days']");
        this.ddlMonth = page.locator("//select[@id='months']");
        this.ddlYear = page.locator("//select[@id='years']");
        this.txtFirstName = page.locator("//input[@id='first_name']");
        this.txtLastName = page.locator("//input[@id='last_name']");
        this.txtCompany = page.locator("//input[@id='company']");
        this.txtAdd1 = page.locator("//input[@id='address1']");
        this.txtAdd2 = page.locator("//input[@id='address2']");
        this.ddlCountry = page.locator("//select[@id='country']");
        this.txtState = page.locator("//input[@id='state']");
        this.txtCity = page.locator("//input[@id='city']");
        this.txtZipCode = page.locator("//input[@id='zipcode']");
        this.txtMobPhone = page.locator("//input[@id='mobile_number']");
        this.btnCreateAccount = page.locator("//button[@type='submit' and text()='Create Account']");
        this.btnContinue = page.locator("//a[@class='btn btn-primary' and text()='Continue']");

        // login
        this.txtEmailLogin = page.locator("//input[@type='email' and @data-qa='login-email']");
        this.txtPassLogin = page.locator("//input[@placeholder='Password']");
        this.submitLoginBtn = page.locator("//button[@type='submit' and @data-qa='login-button']"); 
    }

    async goto(): Promise<void> {
        await this.navigate(this.url);
    }
 
    async enterUserId(keyword: string): Promise<void> {
        await this.txtUserId.fill(keyword);
    }

    async enterEmail(keyword: string): Promise<void> {
        await this.txtEmail.fill(keyword);
    }
    
    // Button 
    async clickSubmitBtn(): Promise<void> {
        await this.btnSubmit.click();
    }

    /////////////////
    async clickRdoGenderMale(): Promise<void> {
        await this.rdoGenderMale.click();
    } 
    async enterPassword(keyword: string): Promise<void> {
        await this.txtPassword.fill(keyword);
    }  
    async selectValueDay(day: string, month: string, year: string): Promise<void> {
        await this.ddlDay.selectOption(day);
        await this.ddlMonth.selectOption(month);
        await this.ddlYear.selectOption(year);
    } 
    async clickChkNewsletter(): Promise<void> { 
        await this.chkNewsletter.check();

    } 
    async clickchkOptin(): Promise<void> { 
        await this.chkOptin.check();
    }



    ////////////////////////////////
    async enterAddressInformation(firstName: string, lastName: string,
        company: string, address1: string, address2: string,
        country: string, state: string, city: string, zipCode: string, phoneNumber: string
    ): Promise<void> {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
        await this.txtCompany.fill(company);
        await this.txtAdd1.fill(address1);
        await this.txtAdd2.fill(address2);
        await this.ddlCountry.selectOption(country);
        await this.txtState.fill(state);
        await this.txtCity.fill(city);
        await this.txtZipCode.fill(zipCode);
        await this.txtMobPhone.fill(phoneNumber);
    }
 
    async clickCreateAccountBtn(): Promise<void> {
        await this.btnCreateAccount.click();
    }
 
    async clickContinueBtn(): Promise<void> {
        await this.btnContinue.click();
    }


    async enterLoginInfo(email: string, pass: string): Promise<void> { 
        await this.txtEmailLogin.fill(email);
        await this.txtPassLogin.fill(pass); 
    }

    async clickSubmitLoginBtn(): Promise<void> {
        await this.submitLoginBtn.click();
    }


}

    // this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    // this.installationHeading = page.getByRole('heading', { name: 'Installation' });