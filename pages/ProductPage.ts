import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
 
  // Locators
  readonly titleAllProducts: Locator;
  readonly proDuctlist: Locator;
  readonly firstPRoduct: Locator;
  readonly txtWomenTopsProduct: Locator;
  readonly menCategoryAccordion: Locator;
  readonly lnkTShirts : Locator;
  readonly titleMenTshirtsProduct: Locator;
  constructor(page: Page) {
    super(page)
    
    this.titleAllProducts = page.locator("//h2[@class='title text-center']");
    this.proDuctlist = page.locator("//div[contains(@class,'product-image-wrapper')]");
    this.firstPRoduct = page.locator("//a[@href='/product_details/1']");
    this.txtWomenTopsProduct = page.locator("//h2[text()='Women - Tops Products']");
    this.menCategoryAccordion = page.locator("//a[@href='#Men']");
    this.lnkTShirts = page.locator("//a[@href='/category_products/3']");
    this.titleMenTshirtsProduct = page.locator("//h2[@class='title text-center']");
  }

 
  async verifyCategoryPageVisible(): Promise<void>  {
    await expect(this.page).toHaveURL('https://automationexercise.com/category_products/2');
  };

  async expectxtAllProductsVisible(): Promise<void> {
    await expect(this.titleAllProducts).toBeVisible();
    await expect(this.titleAllProducts).toContainText('All Products')
  }
  async expectxtProductsListVisible(): Promise<void> {
    await expect(this.proDuctlist.first()).toBeVisible();
    }
  
  async clickFirstProductItems(): Promise<void> {
    await this.firstPRoduct.click();
  }
  async expectxtWomenTopsProductVisible(): Promise<void> {
    await expect(this.txtWomenTopsProduct).toBeVisible();
    }
 
  async clickmenCategoryAccordion(): Promise<void> {
    await this.menCategoryAccordion.click();
    }
  
  async clickTshirtsLink(): Promise<void> {
    await this.lnkTShirts.click();
      }

  async expectxtMenTshirtsProduct(): Promise<void> {
    await expect(this.titleMenTshirtsProduct).toBeVisible();
    await expect(this.titleMenTshirtsProduct).toContainText('Men - Tshirts Products');
  }
  
}