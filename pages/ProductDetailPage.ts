import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
    

    // Locators
  readonly productNameDetail: Locator;
  readonly categoryDetail: Locator;
  // readonly pricecDetail: Locator;
  readonly availabilityDetail: Locator;
  readonly conditionDetail: Locator;
  readonly brandDetail: Locator;

  constructor (page: Page) {
    super(page);
  this. productNameDetail = page.locator ("//h2[text()='Blue Top']");
  this. categoryDetail = page.locator ("//p[contains(text(), 'Category')]");
  // this. priceDetail = page.locator ("")
  this. availabilityDetail = page.locator ("//b[text() = 'Availability:']");
  this. conditionDetail = page.locator ("//b[text() = 'Condition:']");
  this. brandDetail = page.locator ("//b[text() = 'Brand:']");
  }

  async expectProductNameDetailVisible(): Promise<void> {
    await expect(this.productNameDetail).toBeVisible();
  }
  async expectCategoryDetailVisible(): Promise<void> {
    await expect(this.categoryDetail).toBeVisible();
  }
  async expectAvailabilityDetailVisible(): Promise<void> {
    await expect(this.availabilityDetail).toBeVisible();
  }
    async expectConditionDetailVisible(): Promise<void> {
    await expect(this.conditionDetail).toBeVisible();
  }
    async expectBrandDetailVisible(): Promise<void> {
    await expect(this.brandDetail).toBeVisible();
} 
}