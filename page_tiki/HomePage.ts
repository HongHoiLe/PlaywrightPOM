import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  // readonly loginSignUpBtn: Locator; 

  readonly btnDelAd: Locator; 
  readonly txtSearchProduct: Locator; 
  readonly btnSearch: Locator; 
  
  readonly btnFirstProduct: Locator; 
  readonly btnFirstProductPrice: Locator; 
  
  readonly productList: Locator; 
  readonly productPriceList: Locator; 

  constructor(page: Page) {
    super(page);
    this.btnDelAd = page.locator("//img[@alt='close-icon']"); 
    this.txtSearchProduct = page.locator("//input[@data-view-id='main_search_form_input']"); 
    this.btnSearch = page.locator("//button[@data-view-id='main_search_form_button']"); 

    // Product 
    this.btnFirstProduct = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']/div)[1]"); 
    this.btnFirstProductPrice = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']//div[@class='price-discount__price'])[1]"); 

    this.productList = page.locator("//div[@class='sc-2d0320b9-0 gHqeOl']/div"); 
    this.productPriceList = page.locator("//div[@class='sc-2d0320b9-0 gHqeOl']//div[@class='price-discount__price']"); 
  } 
 
  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  async clickBtnDelAd(): Promise<void> { 
    await this.btnDelAd.click();
  }
 
  async enterSearchProduct(keyword: string): Promise<void> { 
    await this.txtSearchProduct.fill(keyword);
    await this.btnSearch.click();
  }

  

  async clickBtnFirstProduct(): Promise<void> { 
    await this.btnFirstProduct.click();
  }

  async getProductPrice(): Promise<string> { 
    const price = await this.btnFirstProductPrice.innerText();
    return price;
  }
  
  async clickNthProduct(index: number): Promise<void> { 
    await this.btnFirstProduct.nth(index).click();
  }

  async getNthProductPrice(index: number): Promise<string> { 
    const price = await this.productPriceList.nth(index).innerText();
    return price;
  }
}
 