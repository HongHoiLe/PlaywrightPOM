import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators  
  // private btnAddProduct = this.page.locator("//div[@class='productinfo text-center']//a[@data-product-id='1']"); 
  readonly btnAddProduct: Locator;
  readonly btnViewFirstProduct: Locator;
  readonly titleAllProduct: Locator;


  constructor(page: Page) {
    super(page);  
    this.btnAddProduct = page.locator("//div[@class='productinfo text-center']//a[@data-product-id='1']");
    this.btnViewFirstProduct = page.locator("//a[@href='/product_details/1']");
    this.titleAllProduct = page.locator("//h2[@class='title text-center']");
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async checkURL(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/products');
  }
  
 
  // Button
  async clickBtnAddProduct(): Promise<void> { 
    await this.btnAddProduct.click();
  }
  
  async clickbtnViewFirstProduct(): Promise<void> { 
    await this.btnViewFirstProduct.click();
  }
 
  async checkTitleVisible(): Promise<void> { 
    await this.titleAllProduct.waitFor({ state: 'visible' });
    console.log(await this.titleAllProduct.textContent());
  }
}
