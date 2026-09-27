import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly url = 'http://automationexercise.com';
    
    // Locators
  readonly homePagebtn: Locator;
  readonly productPagebtn: Locator;
  readonly logoHomePage: Locator 

  constructor(page: Page) {
    super(page);
    this.homePagebtn = page.locator("//i[@class='fa fa-home']");
    this.productPagebtn = page.locator("//a[@href='/products']");
    this.logoHomePage = page.locator("//img[@src='/static/images/home/logo.png']");
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async expectLogoHomePageVisible(): Promise<void> {
    await expect(this.logoHomePage).toBeVisible();
  }
  
  async clickProductPagebtn(): Promise<void> {
    await this.productPagebtn.click();
  }


}