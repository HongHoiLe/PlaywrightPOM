import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  readonly loginSignUpBtn: Locator; 

  readonly textSignUp: Locator;
  readonly btnDel: Locator;
  readonly btnContinueDelete: Locator;
  readonly btnProductPage: Locator;
  readonly btnCartPage: Locator;
  readonly btnAddFirstProduct: Locator;
  readonly btnContinueShop: Locator;
  readonly accDelText: Locator;
  
 
  constructor(page: Page) {
    super(page);
    this.loginSignUpBtn = page.getByRole('link', { name: 'Signup / Login' }); 
     
    this.textSignUp = page.locator("//h2[text()='New User Signup!']");
    this.btnDel = page.locator("//a[@href='/delete_account']");
    this.btnContinueDelete = page.locator("//a[@class='btn btn-primary' and text()='Continue']");
    this.btnProductPage = page.locator("//a[@href='/products']");
    this.btnCartPage = page.locator("//div[@class='shop-menu pull-right']//a[@href='/view_cart']");
    this.btnAddFirstProduct = page.locator("(//a[@data-product-id='1'])[1]");
    this.btnContinueShop = page.locator("//button[text()='Continue Shopping']");
    this.accDelText = page.locator("//h2[@data-qa='account-deleted']");
  } 


  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  async clickLoginSignUpBtn(): Promise<void> { 
    await this.loginSignUpBtn.click();
  }
 
  async expectText(keyword: string): Promise<void> {
    await expect(this.textSignUp).toHaveText(keyword);
  }
 
  async clickDelBtn(): Promise<void> {
    await this.btnDel.click();
  }

  async clickbBtnCartPage(): Promise<void> {
    await this.btnCartPage.click();
  }

  async clickContinueDeleteBtn(): Promise<void> {
    await this.btnContinueDelete.click();
  } 

  async clickBtnProductPage(): Promise<void> { 
    await this.btnProductPage.click();
  }
 
  async clickBtnAddFirstProduct(): Promise<void> { 
    await this.btnAddFirstProduct.click();
  }

  async clickBtnContinueShop(): Promise<void> { 
    await this.btnContinueShop.click();
  }

  async verifyDeleteText(delText: string): Promise<void> { 
    await expect(this.accDelText).toContainText(delText);
  }
}


  // private textSignUp = this.page.locator("//h2[text()='New User Signup!']");
  // private btnDel = this.page.locator("//a[@href='/delete_account']");
  // private btnContinueDelete = this.page.locator("//a[@class='btn btn-primary' and text()='Continue']"); 
  // private btnProductPage = this.page.locator("//a[@href='/products']"); 