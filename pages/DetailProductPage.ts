import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DetailProductPage extends BasePage {
 
  // Locators
  readonly productName: Locator;
  readonly category: Locator;
  readonly price : Locator;
  readonly availability : Locator;
  readonly condition : Locator;
  readonly brand : Locator;

  constructor(page: Page) {
    super(page)
    this.productName = page.locator("//div[@class='product-information']//h2");
    this.category = page.locator("//div[@class='product-information']//p[1]");
    this.price = page.locator("//label[text()='Quantity:']/preceding-sibling::span")
    this.availability = page.locator("//b[text()='Availability:']")
    this.condition = page.locator("//b[text()='Condition:']")
    this.brand = page.locator("//b[text()='Brand:']")
  }

 
  async verifyProductDetailPageVisible(): Promise<void>  {
    await expect(this.page).toHaveURL('https://automationexercise.com/product_details/1');
  }
  async verifyProductInformation() : Promise<void> {
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
    }

  
}