import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators     
  readonly lhsCategory: Locator; 
  readonly titleCategory: Locator; 

  readonly btnCategoryWomen: Locator;
  readonly btnCategoryMen: Locator;
  readonly btnSubCategoryDress: Locator;
  readonly btnSubCategoryTops: Locator;
  readonly btnSubCategorySaree: Locator;
  readonly btnSubCategoryTShirt: Locator;
  readonly btnSubCategoryJean: Locator;

  constructor(page: Page) {
    super(page);  
    this.lhsCategory = page.locator("//div[@class='left-sidebar']/h2"); 
    this.titleCategory = page.locator("//h2[@class='title text-center']"); 
     
    this.btnCategoryWomen = page.locator("//div[@class='panel-group category-products']//a[@href='#Women']");
    this.btnCategoryMen = page.locator("//div[@class='panel-group category-products']//a[@href='#Men']");
    this.btnSubCategoryDress = page.locator("//div[@class='panel-group category-products']//div[@id='Women']//li[1]/a");
    this.btnSubCategoryTops = page.locator("//div[@class='panel-group category-products']//div[@id='Women']//li[2]/a");
    this.btnSubCategorySaree = page.locator("//div[@class='panel-group category-products']//div[@id='Women']//li[3]/a");
    this.btnSubCategoryTShirt = page.locator("//div[@class='panel-group category-products']//div[@id='Men']//li[1]/a");
    this.btnSubCategoryJean = page.locator("//div[@class='panel-group category-products']//div[@id='Men']//li[2]/a");
  }


  // **************************** Functions ****************************
  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  async checkCategoryVisible(): Promise<void> { 
    await expect(this.lhsCategory).toBeVisible();
    await this.btnCategoryWomen.click();
  }
  
 
  //////////////////////////////////////
  async clickBtnCategoryWomen(): Promise<void> { 
    await this.btnCategoryWomen.click();
  }

  async clickBtnCategoryMen(): Promise<void> { 
    await this.btnCategoryMen.click();
  }

  async clickBtnSubCategoryWomen(subcategory: number):Promise<void> {  
    switch(subcategory) {
      case 1:
        await this.btnSubCategoryDress.click();
        break;
      case 2:
        await this.btnSubCategoryTops.click();
        break;
      case 3:
        await this.btnSubCategorySaree.click();
        break;
      default:
        break;
    } 
  }

  async verifyTitleCategoryWomen(subcategory: number): Promise<void> { 
    switch(subcategory) {
      case 1:
        await expect(this.titleCategory).toContainText("Women - Dress Products");
        break;
      case 2:
        await expect(this.titleCategory).toContainText("Women - Tops Products");
        break;
      case 3:
        await expect(this.titleCategory).toContainText("Women - Saree Products");
        break;
      default: 
        break;
    }  
  }

  async clickBtnSubCategoryMen(subcategory: number): Promise<void> { 
    switch(subcategory) {
      case 1:
        await this.btnSubCategoryTShirt.click();
        break;
      case 2:
        await this.btnSubCategoryJean.click();
        break; 
      default:
        break;
    }  
  }
  async verifyTitleCategoryMen(subcategory: number): Promise<void> { 
    switch(subcategory) {
      case 1:
        await expect(this.titleCategory).toContainText("Men - Tshirts Products");
        break;
      case 2:
        await expect(this.titleCategory).toContainText("Men - Jeans Products");
        break; 
      default: 
        break;
    }  
  }  
 
}
