import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly url = 'http://automationexercise.com';
    
    // Locators
  readonly homePagebtn: Locator;
  readonly productPagebtn: Locator;
  readonly logoHomePage: Locator; 
  readonly addFirstProductToCartbtn: Locator;
  readonly firstProduct: Locator;
  readonly continueShoppingbtn: Locator;
  readonly viewCartbtn: Locator;
  readonly loginSuccesstxt: Locator;

  constructor(page: Page) {
    super(page);
    this.homePagebtn = page.locator("//i[@class='fa fa-home']");
    this.productPagebtn = page.locator("//a[@href='/products']");
    this.logoHomePage = page.locator("//img[@src='/static/images/home/logo.png']");
    this.addFirstProductToCartbtn = page.locator("//div[@class='product-overlay']//a[@class='btn btn-default add-to-cart' and @data-product-id = '1']");
    this.firstProduct = page.locator ("//div [@class = 'features_items'] //div[@class='productinfo text-center'] //p[text()='Blue Top']");
    this.continueShoppingbtn = page.locator ("//div [@class = 'modal-footer'] //button [text()='Continue Shopping']");
    this.viewCartbtn = page.locator ("//ul [@class = 'nav navbar-nav'] //a [@href = '/view_cart']");
    this.loginSuccesstxt = page.locator ("//a[contains(text(), 'Logged in as')]");

}

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async expectLogoHomePageVisible(): Promise<void> {
    await expect(this.logoHomePage).toBeVisible();
  }
  
  async clickProductPagebtn(): Promise<void> {
    await this.productPagebtn.click();
  }

  async clickAddFirstProductToCartbtn(): Promise <void>{
    await this.firstProduct.hover();
    await this.addFirstProductToCartbtn.click();
  }

  async clickContinueShoppingbtn(): Promise <void>{
    await this.continueShoppingbtn.click();
  }

  async clickCartbtn(): Promise <void> {
    await this.viewCartbtn.click();
  }

  async expectLoginSuccesstxtVisible(name: string): Promise<void> {
    await expect(this.loginSuccesstxt).toContainText(`Logged in as ${name}`);
  }
  async getTextFirstProduct(): Promise <string> {
    return await this.firstProduct.innerText();
  }


}