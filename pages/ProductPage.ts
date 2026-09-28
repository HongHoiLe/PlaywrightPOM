import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
 
  // Locators
  readonly titleAllProducts: Locator;
  readonly proDuctlist: Locator;
  readonly firstPRoduct: Locator;
  constructor(page: Page) {
    super(page)
    
    this.titleAllProducts = page.locator("//h2[@class='title text-center']");
    this.proDuctlist = page.locator("//div[contains(@class,'product-image-wrapper')]");
    this.firstPRoduct = page.locator("//a[@href='/product_details/1']");
  }

 
  
  async expectxtAllProductsVisible(): Promise<void> {
    await expect(this.titleAllProducts).toBeVisible();
    await expect(this.titleAllProducts).toContainText('All Products')
  }
  async expectxtProductsListVisible(): Promise<void> {
    await expect(this.proDuctlist.first()).toBeVisible();
    }
  
  async clickFirstProductItems(): Promise<void> {
    await this.firstPRoduct.click();
  }

  
}