import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {

    // Locators
    readonly accountInforText: Locator;
    readonly genderRadiobtn: Locator;
    readonly passwordField: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyField: Locator;
    readonly address1Field: Locator;
    readonly address2Field: Locator
    readonly countryDropdown: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly createAccountbtn: Locator;


    constructor(page: Page) {
        super(page);
        this.genderRadiobtn = page.locator ("//input [@id ='id_gender1']");
        this.passwordField = page.locator ("//input [@id ='password']");
        this.dayDropdown = page.locator ("//select [@id ='days']");
        this.monthDropdown = page.locator ("//select [@id ='months']");
        this.yearDropdown = page.locator ("//select [@id ='years']");
        this.newsletterCheckbox = page.locator ("//input [@id ='newsletter']");
        this.firstNameField = page.locator ("//input [@id ='first_name']");
        this.lastNameField = page.locator ("//input [@id ='last_name']");
        this.companyField = page.locator ("//input [@id ='company']");
        this.address1Field = page.locator ("//input [@id ='address1']");
        this.address2Field = page.locator ("//input [@id ='address2']");
        this.countryDropdown = page.locator ("//select [@name ='country']");
        this.stateField = page.locator ("//input [@id ='state']");
        this.cityField = page.locator ("//input [@id ='city']");
        this.zipcodeField = page.locator ("//input [@id ='zipcode']");
        this.mobileNumberField = page.locator ("//input [@id ='mobile_number']");
        this.createAccountbtn = page.locator ("//button [text() = 'Create Account']");
        this.accountInforText = page.locator ("//b [text()= 'Enter Account Information']");
        this.specialOffersCheckbox = page.locator ("//input [@name= 'optin']");
    }

    async expectAccountInforTextVisible(): Promise <void> {
        await expect(this.accountInforText).toBeVisible();
    }

    async clickGenderRadiobtn () : Promise <void> {
        await this.genderRadiobtn.click();
    }

    async fillPasswordField (password: string) : Promise <void> {
        await this.passwordField.fill(password);
    }

    async selectDay(day: string) : Promise <void> {
        await this.dayDropdown.selectOption(day);
    }
    
    async selectMonth(month: string) : Promise <void> {
        // select theo value
        await this.monthDropdown.selectOption(month);
    }
    
    async selectYear(year: string) : Promise <void> {
        // select theo value
        await this.yearDropdown.selectOption(year);
    }

    async clickNewsletterCheckbox () : Promise <void> {
        await this.newsletterCheckbox.click();
    }

    async clickSpecialOffersCheckbox () : Promise <void> {
        await this.specialOffersCheckbox.click();
    }

    async fillFirstNameField (firstName: string) : Promise <void> {
        await this.firstNameField.fill(firstName);
    }

    async fillLastNameField (lastName: string) : Promise <void> {
        await this.lastNameField.fill(lastName);
    }

    async fillCompanyField (company: string) : Promise <void> {
        await this.companyField.fill(company);
    }

    async fillAddress1Field (address1: string) : Promise <void> {
        await this.address1Field.fill(address1);
    }

    async fillAddress2Field (address2: string) : Promise <void> {
        await this.address2Field.fill(address2);
    }

    async selectCountry (country: string) : Promise <void> {
        await this.countryDropdown.selectOption(country);
    }

    async fillStateField (state: string) : Promise <void> {
        await this.stateField.fill(state);
    }

    async fillCityField (city: string) : Promise <void> {
        await this.cityField.fill(city);
    }

    async fillZipcodeField (zipcode: string) : Promise <void> {
        await this.zipcodeField.fill(zipcode);
    }

    async fillMobileNumberField (mobileNumber: string) : Promise <void> {
        await this.mobileNumberField.fill(mobileNumber);
    }

    async clickCreateAccountbtn () : Promise <void> {
        await this.createAccountbtn.click();
    }
}