import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators  
  // private btnAddProduct = this.page.locator("//div[@class='productinfo text-center']//a[@data-product-id='1']"); 
  readonly btnAddFirstProduct: Locator;
  readonly btnAddSecondProduct: Locator;
  readonly btnViewFirstProduct: Locator;
  readonly titleTextCenter: Locator;
  readonly txtSearch: Locator; 

  readonly btnSearchSubmit: Locator; 
  readonly currentProductsName: Locator; 
  readonly currentProductsAddBtn: Locator; 
  readonly btnContinueShop: Locator; 
  readonly btnViewCart: Locator; 

  constructor(page: Page) {
    super(page);  
    this.btnAddFirstProduct = page.locator("//div[@class='productinfo text-center']//a[@data-product-id='1']");
    this.btnAddSecondProduct = page.locator("//div[@class='productinfo text-center']//a[@data-product-id='2']");
    this.btnViewFirstProduct = page.locator("//a[@href='/product_details/1']");
    
    this.titleTextCenter = page.locator("//h2[@class='title text-center']");
    this.txtSearch = page.locator("//input[@id='search_product']");
	  this.btnSearchSubmit = page.locator("//button[@id='submit_search']");

	  this.currentProductsName = page.locator("//div[@class='productinfo text-center']//descendant::p");
	  this.currentProductsAddBtn = page.locator("//div[@class='productinfo text-center']//descendant::a[@class='btn btn-default add-to-cart']");
	  this.btnContinueShop = page.locator("//button[text()='Continue Shopping']"); 
	  this.btnViewCart = page.locator("//u[text()='View Cart']");  
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async checkURL(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/products');
  }
  
  //------------------------- Button -------------------------
  async clickBtnAddFirstProduct(): Promise<void> { 
    await this.btnAddFirstProduct.click();
  }

  async clickBtnAddSecondProduct(): Promise<void> { 
    await this.btnAddSecondProduct.click();
  }

  async clickBtnViewCart(): Promise<void> { 
    await this.btnViewCart.click();
  }

  async clickBtnContinueShop(): Promise<void> { 
    await this.btnContinueShop.click();
  }

  async clickBtnViewFirstProduct(): Promise<void> { 
    await this.btnViewFirstProduct.click();
  }

  async clickBtnSearchSubmit(): Promise<void> { 
    await this.btnSearchSubmit.click();
  }
 
  //------------------------- Text -------------------------
  async verifyTextCenterVisible(): Promise<void> { 
    await this.titleTextCenter.waitFor({ state: 'visible' });
    console.log(await this.titleTextCenter.textContent());
  }

  async verifyTextCenter(keyword: string): Promise<void> { 
    await expect(this.titleTextCenter).toHaveText(keyword);
  }


  // ------------------------- Search -------------------------
  async enterSearchProduct(keyword: string): Promise<void> { 
    await this.txtSearch.fill(keyword);
  }


  async checkProductSearchResult(searchKey: string): Promise<void> {
    const productCount = await this.currentProductsName.count(); 
    for (let i = 0; i < productCount; i++) {
        const product = this.currentProductsName.nth(i); 
        console.log(i + ". " + await product.innerText()); 
        await expect(product).toContainText(searchKey);
    }
  }
  
  async addAllCurrentProductToCart(): Promise<void> {
    const productCount = await this.currentProductsAddBtn.count(); 
    for (let i = 0; i < productCount; i++) {
      await this.currentProductsAddBtn.nth(i).click();  
      await this.btnContinueShop.click();
    }
  }
  

}
