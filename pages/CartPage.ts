import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  readonly btnProceedCheckOut: Locator; 
  readonly btnRegisterLogin: Locator; 
  readonly ShoppingCartText: Locator; 
 

  constructor(page: Page) {
    super(page);
    this.btnProceedCheckOut = page.locator("//a[@class='btn btn-default check_out']");
    this.btnRegisterLogin = page.locator("//a[@href='/login']//u");  
    
    
    this.ShoppingCartText = page.locator("//div[@class='breadcrumbs']//li[2]");  
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
    await expect(this.ShoppingCartText).toHaveText(keyword);
  }
}
