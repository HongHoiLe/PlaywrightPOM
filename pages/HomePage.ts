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
  readonly signupLoginbtn: Locator;
  readonly deleteAccountBtn: Locator;
  readonly categorySideBar: Locator;
  readonly categoryWomen: Locator;
  readonly subcriptionTxt: Locator;
  readonly topText: Locator;

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
    this.signupLoginbtn = page.locator ("//a [@href = '/login']");
    this.deleteAccountBtn = page.locator ("//a [@href= '/delete_account']");
    this.categorySideBar = page.locator ("//div [@class = 'panel-group category-products']");
    this.categoryWomen = page.locator ("//h4 [@class = 'panel-title'] //a [@href = '#Women']");
    this.subcriptionTxt = page.locator ("//div [@class = 'single-widget'] // h2");
    this.topText = page.locator ("//div[contains(@class,'item') and contains(@class,'active')]//h2 [contains (text(), 'Fledged')]");
}

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => {
    window.scrollTo(0,0);
    });
  }

  async expectLogoHomePageVisible(): Promise<void> {
    await expect(this.logoHomePage).toBeVisible();
  }

  async expectCategorySideBarVisible(): Promise <void> {
    await expect(this.categorySideBar).toBeVisible();
  }

  async expectTopTextVisible(): Promise <void> {
    await expect(this.topText).toBeVisible();
  }
  
  async clickProductPagebtn(): Promise<void> {
    await this.productPagebtn.click();
  }

  async clickAddFirstProductToCartbtn(): Promise <void>{
    await this.firstProduct.scrollIntoViewIfNeeded();
    await this.firstProduct.hover();
    await this.addFirstProductToCartbtn.click();
  }

  async clickContinueShoppingbtn(): Promise <void>{
    await this.continueShoppingbtn.click();
  }

  async clickCartbtn(): Promise <void> {
    await this.viewCartbtn.scrollIntoViewIfNeeded();
    await this.viewCartbtn.click();
  }

  async expectLoginSuccesstxtVisible(name: string): Promise<void> {
    await expect(this.loginSuccesstxt).toContainText(`Logged in as ${name}`);
  }
  async getTextFirstProduct(): Promise <string> {
    return await this.firstProduct.innerText();
  }

  async clickSignupLoginbtn(): Promise <void> {
    await this.signupLoginbtn.click();
  }

  async clickDeleteAccountbtn(): Promise <void> {
    await this.deleteAccountBtn.click();
  }

  async clickCategoryWomen(): Promise <void> {
    await this.categoryWomen.click();
  }

  async clickSubCategoryWomen(categoryWomen: string): Promise <void> {
    const subCategoryWomen = this.page.locator(`//div[@id='Women']//a[contains(text(), '${categoryWomen}')]`);
    await subCategoryWomen.click();
  }

  async expectSubcriptionTxtcontains(): Promise <void> {
    await expect(this.subcriptionTxt).toContainText('Subscription');
  }
}
