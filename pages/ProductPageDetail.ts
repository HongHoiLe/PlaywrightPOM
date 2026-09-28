import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPageDetail extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators     
  readonly txtProductQty: Locator;
  readonly btnAddToCart: Locator;
  readonly btnViewCart: Locator;
  readonly txtName: Locator;
  readonly txtEmail: Locator;
  readonly txtReviewComment: Locator;
  readonly submitBtn: Locator;
  readonly productName: Locator;
  readonly productCategory: Locator;
  readonly productPrice: Locator;
  readonly productAvailability: Locator;
  readonly productCondition: Locator;
  readonly productBrand: Locator;

  constructor(page: Page) {
    super(page);  
    this.txtProductQty = page.locator("//input[@id='quantity']");
    this.btnAddToCart = page.locator("//button[@class='btn btn-default cart']");
    this.btnViewCart = page.locator("//u[text()='View Cart']");
    this.txtName = page.locator("//input[@placeholder='Your Name']");
    this.txtEmail = page.locator("//input[@placeholder='Email Address']");
    this.txtReviewComment = page.locator("//textarea[@placeholder='Add Review Here!']");
    this.submitBtn = page.locator("//button[@type='submit' and @id='button-review']");
    
    this.productName = page.locator("//div[@class='product-information']/h2");
    this.productCategory = page.locator("//div[@class='product-information']/p[1]");
    this.productPrice = page.locator("//div[@class='product-information']/span/span");
    this.productAvailability = page.locator("//div[@class='product-information']/p[2]");
    this.productCondition = page.locator("//div[@class='product-information']/p[3]");
    this.productBrand = page.locator("//div[@class='product-information']/p[4]");
  }


  // **************************** Functions ****************************
  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 

 
      
  // Button
  async clickBtnAddProduct(): Promise<void> { 
    await this.productName.click();
  }
  
  async verifyProductDetail(): Promise<void> { 
    await this.productName.waitFor({ state: 'visible' });
    await this.productCategory.waitFor({ state: 'visible' });
    await this.productPrice.waitFor({ state: 'visible' });
    await this.productAvailability.waitFor({ state: 'visible' });
    await this.productCondition.waitFor({ state: 'visible' });
    await this.productBrand.waitFor({ state: 'visible' });
 
    console.log(await this.productName.textContent());
    console.log(await this.productCategory.textContent());
    console.log(await this.productPrice.textContent());
    console.log(await this.productAvailability.textContent());
    console.log(await this.productCondition.textContent());
    console.log(await this.productBrand.textContent());
  }

 
}
