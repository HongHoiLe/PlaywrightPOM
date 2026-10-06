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

  constructor(page: Page) {
    super(page);
    // this.loginSignUpBtn = page.getByRole('link', { name: 'Signup / Login' }); 
     
    this.btnDelAd = page.locator("//img[@alt='close-icon']"); 
    this.txtSearchProduct = page.locator("//input[@data-view-id='main_search_form_input']"); 
    this.btnSearch = page.locator("//button[@data-view-id='main_search_form_button']"); 
    this.btnFirstProduct = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']/div)[1]"); 

    this.btnFirstProductPrice = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']//div[@class='price-discount__price'])[1]"); 

    // Product 
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

  
  async getProductPrice(): Promise<string> { 
    const price = await this.btnFirstProductPrice.innerText();
    return price;
  }

  async clickBtnFirstProduct(): Promise<void> { 
    await this.btnFirstProduct.click();
  }

}
 