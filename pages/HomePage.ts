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
  readonly textLoginAs: Locator;
  readonly textSubcription: Locator;
  readonly textTitleAuto: Locator;
  readonly autoLogo: Locator;
  readonly btnScrollUpArrow: Locator;
  readonly textLoginUserName: Locator;
  btnAddRecommnedProduct: Locator;
  btnRecommnedProductName: Locator;
  textRecommendProduct: Locator;
  btnViewCart: Locator;
  txtSubEmail: Locator;
  btnSubEmail: Locator;
  successAlertSubEmail: Locator;

  constructor(page: Page) {
    super(page);
    this.loginSignUpBtn = page.getByRole('link', { name: 'Signup / Login' }); 
     
    this.textSignUp = page.locator("//h2[text()='New User Signup!']");

    this.btnDel = page.locator("//a[@href='/delete_account']");
    this.btnContinueDelete = page.locator("//a[@class='btn btn-primary' and text()='Continue']");
    this.btnProductPage = page.locator("//a[@href='/products']");
    this.btnCartPage = page.locator("//div[@class='shop-menu pull-right']//a[@href='/view_cart']");
    

    this.textLoginAs = page.locator("//div[@class='shop-menu pull-right']//i[@class='fa fa-user']/..");
    this.textLoginUserName = page.locator("//div[@class='shop-menu pull-right']//i[@class='fa fa-user']/../b");

    this.btnContinueShop = page.locator("//button[text()='Continue Shopping']");
    this.accDelText = page.locator("//h2[@data-qa='account-deleted']");

    this.textTitleAuto = page.locator("(//h2[contains(text(),'Full-Fledged')])[1]");
    this.autoLogo = page.locator("//div[@class='logo pull-left']/a");
    this.btnScrollUpArrow = page.locator("//a[@id='scrollUp']");
    

    this.textRecommendProduct = page.locator("//div[@class='recommended_items']/h2");
    this.btnAddRecommnedProduct = page.locator("//div[@id='recommended-item-carousel']//div[@class='productinfo text-center']/a");
    this.btnRecommnedProductName = page.locator("//div[@id='recommended-item-carousel']//div[@class='productinfo text-center']/p"); 
    
    // Product
    this.btnViewCart = page.locator("//p[@class='text-center']//a[@href='/view_cart']");
    // this.btnAddFirstProduct = page.locator("(//a[@data-product-id='1'])[1]");
    this.btnAddFirstProduct = page.locator("//div[@class='features_items']//div[@class='productinfo text-center']//a[@data-product-id='1']");
    //div[@class='features_items']//div[@class='productinfo text-center']//p[text()='Blue Top']/following-sibling::a
    
    // Footer
    this.textSubcription = page.locator("//div[@class='single-widget']/h2");
    this.txtSubEmail = page.locator("//input[@id='susbscribe_email']");
    this.btnSubEmail = page.locator("//button[@id='subscribe']");
    this.successAlertSubEmail = page.locator("//div[@class='alert-success alert']");
    
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

  ////////////////////////////////////
  async verifyDeleteText(delText: string): Promise<void> { 
    await expect(this.accDelText).toContainText(delText);
  }

  async verifyLoginAsText(text: string): Promise<void> { 
    await expect(this.textLoginAs).toContainText(text);
  }

  async verifyLoginAsUserName(text: string, username: string): Promise<void> { 
    await expect(this.textLoginAs).toContainText(text);
    await expect(this.textLoginUserName).toContainText(username);
  }
  //////////////
  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async expectTextSubcription(keyword: string): Promise<void> {
    await expect(this.textSubcription).toHaveText(keyword);
  }

  async expectTextTitleAuto(keyword: string): Promise<void> {
    await expect(this.textTitleAuto).toHaveText(keyword);
  }

  async scrollToSubcription(): Promise<void> {
    await this.textSubcription.scrollIntoViewIfNeeded();
  }

  
  async clickBtnScrollUpArrow(): Promise<void> {
    await this.btnScrollUpArrow.click();
  }
  
  async scrollToLogo(): Promise<void> {
    await this.autoLogo.scrollIntoViewIfNeeded();
  }

// recommend

  async verifyTextRecommend(text: string): Promise<void> { 
    await expect(this.textRecommendProduct).toContainText(text);
  }

  async addRecommnedProduct(): Promise<string> {  
    let productName: string = await this.btnRecommnedProductName.nth(1).innerText();
    console.log("Recommend Product name: " + productName); 
    await this.btnAddRecommnedProduct.nth(1).click();
    return productName;
  }
  
  async clickBtnViewCart(): Promise<void> {
    await this.btnViewCart.click();
  }
  
  // ------------- Footer ------------- 
  async addSubEmail(subEmail: string): Promise<void> {
    await this.txtSubEmail.fill(subEmail);
    await this.btnSubEmail.click();
  }
  
  async verifySucessSubEmailMsg(): Promise<void>{
    await expect(this.successAlertSubEmail).toHaveText("You have been successfully subscribed!");
  }

}




  // private textSignUp = this.page.locator("//h2[text()='New User Signup!']");
  // private btnDel = this.page.locator("//a[@href='/delete_account']");
  // private btnContinueDelete = this.page.locator("//a[@class='btn btn-primary' and text()='Continue']"); 
  // private btnProductPage = this.page.locator("//a[@href='/products']"); 