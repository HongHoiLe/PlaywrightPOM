import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';
import { registerData } from '../test-data/registerData';
export class RegisterPage extends BasePage {

  
  // Locators
  readonly txtNewUserSignup: Locator;
  readonly ipName: Locator;
  readonly ipEmail: Locator;
  readonly btSignup: Locator;
  readonly txtEnterAccountInformation: Locator;
  readonly RdoTitle: Locator;
  readonly ipPassWord: Locator;
  readonly ddlDay: Locator;
  readonly ddlMonth: Locator;
  readonly ddlYear: Locator;
  readonly chkNewsletter: Locator;
  readonly chkReceive: Locator;
  readonly ipFirstName: Locator;
  readonly ipLastName: Locator;
  readonly ipCompany: Locator;
  readonly ipAddress: Locator;
  readonly ipAddress2: Locator;
  readonly ddlCountry: Locator;
  readonly ipState: Locator;
  readonly ipCity: Locator;
  readonly ipZipcode: Locator;
  readonly ipMobileNumber: Locator;
  readonly btCreatAcc: Locator;
  


  constructor(page: Page) {
    super(page);
    this.txtNewUserSignup = page.locator("//h2[text()='New User Signup!']");
    this.ipName = page.locator("//input[@data-qa='signup-name']");
    this.ipEmail = page.locator("//input[@data-qa='signup-email']");
    this.btSignup = page.locator("//button[@data-qa='signup-button']");
    this.txtEnterAccountInformation = page.locator("//b[text()='Enter Account Information']")
    this.RdoTitle = page.locator("//input[@value='Mr']");
    this.ipPassWord = page.locator("//input[@data-qa='password']");
    this.ddlDay = page.locator("//select[@id='days']");
    this.ddlMonth = page.locator("//select[@id='months']");
    this.ddlYear = page.locator("//select[@id='years']");
    this.chkNewsletter = page.locator("//input[@name='newsletter']");
    this.chkReceive = page.locator("//input[@name='optin']");
    this.ipFirstName = page.locator("//input[@data-qa='first_name']");
    this.ipLastName = page.locator("//input[@data-qa='last_name']");
    this.ipCompany = page.locator("//input[@data-qa='company']");
    this.ipAddress = page.locator("//input[@data-qa='address']");
    this.ipAddress2 = page.locator("//input[@data-qa='address2']");
    this.ddlCountry = page.locator("//select[@id='country']");
    this.ipState = page.locator("//input[@data-qa='state']");
    this.ipCity = page.locator("//input[@data-qa='city']");
    this.ipZipcode = page.locator("//input[@data-qa='zipcode']");
    this.ipMobileNumber = page.locator("//input[@data-qa='mobile_number']");
    this.btCreatAcc = page.locator("//button[@data-qa='create-account']");
   

  }
  //Signup Login page
  async expectNewUserSignUpVisible(): Promise<void> {
    await expect(this.txtNewUserSignup).toBeVisible();
  }
  
  async inputNameEMail(): Promise<void> {
    await this.ipName.fill(registerData.name);
    await this.ipEmail.fill(registerData.email);
  }

  async clickButtonSignup(): Promise<void> {
    await this.btSignup.click();
  }

  // Registerpage

  async expectEnterAccountInformationVisible(): Promise<void> {
    await expect(this.txtEnterAccountInformation).toBeVisible();
  }

  async inputAccountInformation(): Promise<void> {
    await this.RdoTitle.check();
    await expect(this.RdoTitle).toBeChecked();
    await this.ipPassWord.fill(registerData.password);
    await this.ddlDay.selectOption(registerData.ddlDay);
    await this.ddlMonth.selectOption(registerData.ddlMonth);
    await this.ddlYear.selectOption(registerData.ddlYear);
  }

  async subscribeNewsletter(): Promise<void> {
    await this.chkNewsletter.check();
    }

    async subscribeSpecialOffers(): Promise<void> {
    await this.chkReceive.check();
    }

    async inputAddressInformation(): Promise<void>{
      await this.ipFirstName.fill(registerData.firstName);
      await this.ipLastName.fill(registerData.lastName);
      await this.ipCompany.fill(registerData.company);
      await this.ipAddress.fill(registerData.address1);
      await this.ipAddress2.fill(registerData.address2);
      await this.ddlCountry.selectOption(registerData.country);
      await this.ipState.fill(registerData.state);
      await this.ipCity.fill(registerData.city);
      await this.ipZipcode.fill(registerData.zipcode);
      await this.ipMobileNumber.fill(registerData.mobileNumber);
    }

    async clickCreatAccountButton(): Promise<void>{
      await this.btCreatAcc.click();
    }

    async registerAccount(): Promise<void> {
      await this.inputNameEMail();
      await this.clickButtonSignup();
      await this.inputAccountInformation();
      await this.subscribeNewsletter();
      await this.subscribeSpecialOffers();
      await this.inputAddressInformation();
      await this.clickCreatAccountButton();
      }

} 

