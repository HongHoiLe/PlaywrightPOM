import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com';
  
  // Locators
  readonly homePageIsVisible: Locator;
  readonly signupLogiButton: Locator;
  readonly txtLoggedisas: Locator;
  readonly btDeleteAccount: Locator;
  readonly btPRoduct: Locator;
  readonly proDuctCard: Locator;
  readonly btAddtocart: Locator;
  readonly btCart: Locator;
  readonly lnkViewCart: Locator;

  constructor(page: Page) {
    super(page)
    this.homePageIsVisible = page.locator("//img[@alt='Website for automation practice']");
    this.signupLogiButton = page.locator("//a[@href='/login']");
    this.txtLoggedisas = page.locator("//i[@class='fa fa-user']//parent::a");
    this.btDeleteAccount = page.locator("//a[@href='/delete_account']");
    this.btPRoduct = page.locator("//a[@href='/products']");
    this.proDuctCard = page.locator("//img[@src='/get_product_picture/3']")
    //this.btAddtocart = page.locator("//a[@data-product-id='3' and @class='btn btn-default add-to-cart']");
    this.btAddtocart = page.locator("//div[@class='product-overlay']//a[@data-product-id='3']");
    this.lnkViewCart = page.locator("//div[@id='cartModal']//a[@href='/view_cart']");
    this.btCart = page.locator("//div[@class='shop-menu pull-right']//a[@href='/view_cart']");

  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
  
  async expectHomePageVisible(): Promise<void> {
    await expect(this.homePageIsVisible).toBeVisible();
  }
  
  async clickSignupLogin(): Promise<void> {
    await this.signupLogiButton.click();
  }
  async clickProductButton(): Promise<void> {
    await this.btPRoduct.click();
  }
  async expectLoggedisasVisible(): Promise<void> {
    await expect(this.txtLoggedisas).toBeVisible();
  }
  async clickAddToCartButton(): Promise<void> {
    //await this.proDuctCard.scrollIntoViewIfNeeded();
    await this.proDuctCard.hover();
    await this.btAddtocart.click();
  }
  async clickLinkViewCart(): Promise<void> {
    await expect(this.lnkViewCart).toBeVisible();
    await this.lnkViewCart.click();
  }
  async clickCartButton(): Promise<void> {
    await this.btCart.click();
  }

  async clickDeleteAccountButton(): Promise<void> {
    await this.btDeleteAccount.click();
  }
  
}
