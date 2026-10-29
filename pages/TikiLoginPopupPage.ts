import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TikiProductListPage extends BasePage {
 
  // Locators
  readonly clickFirstItem: Locator;
  readonly clickCapacityItem: Locator;
  readonly txtProductPrice: Locator;
  readonly clickColorItem: Locator;
  readonly menCategoryAccordion: Locator;
  readonly lnkTShirts : Locator;
  readonly titleMenTshirtsProduct: Locator;
  constructor(page: Page) {
    super(page)
    
    this.clickFirstItem = page.locator("//picture[@class='webpimg-container']//img[@alt='product_image_badge']").first();
    this.clickCapacityItem = page.locator("//div[@data-view-id='pdp_main_select_configuration_item']//span[text()='1TB']");
    this.txtProductPrice = page.locator("//div[@class='product-price__current-price' and text()='59.990.000']");
    this.clickColorItem = page.locator("//p[text()='Màu sắc']//span[text()=' Đỏ Burgundy']");
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