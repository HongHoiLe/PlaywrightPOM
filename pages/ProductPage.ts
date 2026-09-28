import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    // Locators
  readonly allProducttxt: Locator;
  readonly productsList: Locator;
  readonly viewProductFirstItem: Locator 

  constructor(page: Page) {
    super(page);
    this.allProducttxt = page.locator("//h2[@class='title text-center']");
    this.productsList = page.locator("//div[@class='features_items']");
    this.viewProductFirstItem = page.locator("//a[@href='/product_details/1']");
  }

  async expectAllProducttxtVisible(): Promise<void> {
    await expect(this.allProducttxt).toBeVisible();
  }

  async expectProductsListVisible(): Promise<void> {
    await expect(this.productsList).toBeVisible();
  }

  async clickViewProductFirstItem(): Promise<void> {
    await this.viewProductFirstItem.click();
  }

}