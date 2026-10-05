import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  readonly btnProceedCheckOut: Locator; 
  readonly btnRegisterLogin: Locator; 
  readonly shoppingCartText: Locator; 
 
  readonly productName: Locator; 
  readonly tableCart: Locator; 
  readonly productPrice: Locator; 
  readonly productQty: Locator; 
  readonly productTotalPrice: Locator; 

  constructor(page: Page) {
    super(page);
    this.btnProceedCheckOut = page.locator("//a[@class='btn btn-default check_out']");
    this.btnRegisterLogin = page.locator("//a[@href='/login']//u");  
    
    this.shoppingCartText = page.locator("//div[@class='breadcrumbs']//li[2]");  
    this.tableCart = page.locator("//table[@class='table table-condensed']");   
    
    this.productName = page.locator("//td[@class='cart_description']//a");  
    this.productPrice = page.locator("//table[@class='table table-condensed']/tbody/tr/td[@class='cart_price']/p");   
    this.productQty = page.locator("//table[@class='table table-condensed']/tbody/tr/td[@class='cart_quantity']/button");   
    this.productTotalPrice = page.locator("//table[@class='table table-condensed']/tbody/tr/td[@class='cart_total']/p");   
    
  } 


  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  async clickProceedCheckOutBtn(): Promise<void> { 
    await this.btnProceedCheckOut.click();
  }
 
  async clickRegisterLoginBtn(): Promise<void> { 
    await this.btnRegisterLogin.click();
  }
  
  
  async verifyCartDisplay(keyword: string): Promise<void> { 
    await expect(this.shoppingCartText).toHaveText(keyword);
  }

  async checkProductListCart (searchKey: string): Promise<void>{
    const productCount = await this.productName.count();
    for (let i=0; i<productCount; i++){
      const product = this.productName.nth(i);
      console.log(i + ". " + product.innerText);
      await expect(product).toContainText(searchKey);
    }
  }

   
  async getProductListCartInfo(): Promise<void>{
    const productCount = await this.productName.count();
    for (let i=0; i<productCount; i++){
      const productName = await this.productName.nth(i);
      console.log(i + ". " + productName.innerText);
 
      // const productPrice = this.productPrice.nth(i);
      // const productQty = this.productQty.nth(i);
      // const productTotalPrice = this.productTotalPrice.nth(i);
      // console.log(i + ". " + productName.innerText + " - " + productPrice.innerText + " - " + productQty.innerText + " - " + productTotalPrice.innerText); 
    }
  }


}
