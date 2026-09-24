import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  readonly loginSignUpBtn: Locator; 

  constructor(page: Page) {
    super(page);
    this.loginSignUpBtn = page.getByRole('link', { name: 'Signup / Login' }); 
     
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  async clickLoginSignUpBtn(): Promise<void> {
    //await this.page.locator("//a[text()=' Signup / Login']").click();
    await this.loginSignUpBtn.click();
  }

  //
  async expectText(keyword: string): Promise<void> {
    await expect(this.page.locator("//h2[text()='New User Signup!']")).toHaveText(keyword);
  }

  
        // assertEquals("New User Signup!", txtNewUser);
 
  async clickDelBtn(): Promise<void> {
    await this.page.locator("//a[@href='/delete_account']").click();
  }

  async clickContinueDeleteBtn(): Promise<void> {
    await this.page.locator("//a[@class='btn btn-primary' and text()='Continue']").click();
  } 

  // async expectInstallationHeadingVisible(): Promise<void> {
  //   await expect(this.installationHeading).toBeVisible();
  // }
}
