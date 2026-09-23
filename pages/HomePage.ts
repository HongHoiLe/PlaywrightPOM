import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
//   readonly getStartedLink: Locator;
//   readonly installationHeading: Locator;

  constructor(page: Page) {
    super(page);
    // this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    // this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    


  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }


 

  // Button
  async clickLoginSignUpBtn(): Promise<void> {
    await this.page.locator("//a[text()=' Signup / Login']").click();
  }


  async clickDelBtn(): Promise<void> {
    await this.page.locator("//a[@href='/delete_account']").click();
  }

  async clickContinueDeleteBtn(): Promise<void> {
    await this.page.locator("//a[@class='btn btn-primary' and text()='Continue']").click();
  }
  //a[@class='btn btn-primary' and text()='Continue']

  // async expectInstallationHeadingVisible(): Promise<void> {
  //   await expect(this.installationHeading).toBeVisible();
  // }
}
