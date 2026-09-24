import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
    readonly url = 'https://automationexercise.com/';

    // Locators 

    constructor(page: Page) {
    super(page);
 
    }

    async goto(): Promise<void> {
        await this.navigate(this.url);
    }
 
    async enterUserId(keyword: string): Promise<void> {
        await this.page.locator("//input[@placeholder='Name']").fill(keyword);
    }

    async enterEmail(keyword: string): Promise<void> {
        await this.page.locator("//input[@placeholder='Email Address' and @data-qa='signup-email']").fill(keyword);
    }
    
    // Button 
    async clickSubmitBtn(): Promise<void> {
        await this.page.locator("//button[@type='submit' and text()='Signup']").click();
    }

    /////////////////
    async clickRdoGenderMale(): Promise<void> {
        await this.page.locator("//div[@id='uniform-id_gender1']").click();
    } 
    async enterPassword(keyword: string): Promise<void> {
        await this.page.locator("//input[@id='password']").fill(keyword);
    }  
    async selectValueDay(day: string, month: string, year: string): Promise<void> {
        await this.page.locator("//select[@id='days']").selectOption(day);
        await this.page.locator("//select[@id='months']").selectOption(month);
        await this.page.locator("//select[@id='years']").selectOption(year); 
    } 
    async clickChkNewsletter(): Promise<void> {
        await this.page.locator("//input[@id='newsletter']").click();
    } 
    async clickchkOptin(): Promise<void> {
        await this.page.locator("//input[@id='optin']").click();
    }
 
    async enterAddressInformation(firstName: string, lastName: string,
        company: string, address1: string, address2: string,
        country: string, state: string, city: string, zipCode: string, phoneNumber: string
    ): Promise<void> {
        await this.page.locator("//input[@id='first_name']").fill(firstName);
        await this.page.locator("//input[@id='last_name']").fill(lastName); 
        await this.page.locator("//input[@id='company']").fill(company); 
        await this.page.locator("//input[@id='address1']").fill(address1);
        await this.page.locator("//input[@id='address2']").fill(address2);
        await this.page.locator("//select[@id='country']").selectOption(country);
        await this.page.locator("//input[@id='state']").fill(state);
        await this.page.locator("//input[@id='city']").fill(city);
        await this.page.locator("//input[@id='zipcode']").fill(zipCode);
        await this.page.locator("//input[@id='mobile_number']").fill(phoneNumber);
    }
 
    async clickCreateAccountBtn(): Promise<void> {
        await this.page.locator("//button[@type='submit' and text()='Create Account']").click();
    }
 
    async clickContinueBtn(): Promise<void> {
        await this.page.locator("//a[@class='btn btn-primary' and text()='Continue']").click();
    }




    //   async expectTitleToContainPlaywright(): Promise<void> {
    //     await expect(this.page).toHaveTitle(/Playwright/);
    //   }
    // async expectInstallationHeadingVisible(): Promise<void> {
    //   await expect(this.installationHeading).toBeVisible();
    // }
}

    // this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    // this.installationHeading = page.getByRole('heading', { name: 'Installation' });