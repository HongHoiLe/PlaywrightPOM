import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    // Locators
  readonly allProducttxt: Locator;
  readonly productsList: Locator;
  readonly viewProductFirstItem: Locator;
  readonly categoryMen: Locator;
  readonly categoryNamePage: Locator;

  constructor(page: Page) {
    super(page);
    this.allProducttxt = page.locator("//h2[@class='title text-center']");
    this.productsList = page.locator("//div[@class='features_items']");
    this.viewProductFirstItem = page.locator("//a[@href='/product_details/1']");
    this.categoryMen = page.locator ("//h4 [@class = 'panel-title'] //a [@href = '#Men']");
    this.categoryNamePage = page.locator ("//ol [@class = 'breadcrumb'] //li [@class = 'active']");
  }

  async expectAllProducttxtVisible(): Promise<void> {
    await expect(this.allProducttxt).toBeVisible();
  }

  async expectProductsListVisible(): Promise<void> {
    await expect(this.productsList).toBeVisible();
  }

  async clickViewProductFirstItem(): Promise<void> {
    await this.viewProductFirstItem.click();
  }

  async clickCategoryMen(): Promise <void> {
    await this.categoryMen.click();
  }

  async clickSubCategoryMen(categoryMen: string): Promise <void> {
    const category = this.page.getByText(categoryMen, { exact: true });
    await category.click();
  }

  async expectMenCategoryNamePagecontain(categoryMen: string): Promise <void> {
    await expect(this.categoryNamePage).toContainText(categoryMen);
  }

  async expectWomenCategoryNamePagecontain (categoryWomen: string): Promise <void> {
    await expect(this.categoryNamePage).toContainText(categoryWomen);
  }
}