import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage { 
  // Locators  
  readonly btnProductSize500: Locator; 
  readonly btnProductColorRed: Locator; 
  readonly textProductPrice: Locator; 
  
  readonly btnAddToCart: Locator; 
  readonly btnBuyProductNow: Locator; 
  readonly popupEmail: Locator; 
  readonly closeSignInPopup: Locator; 

  constructor(page: Page) {
    super(page); 
    this.btnBuyProductNow = page.locator("(//div[@class='group-button']/button)[1]"); 
    this.btnAddToCart = page.locator("//button[@data-view-id='pdp_add_to_cart_button']"); 

    this.btnProductSize500 = page.locator("//div[@class='sc-e6f89401-0 itpMTL']"); 
    this.btnProductColorRed = page.locator("//div[@class='product-price__current-price']"); 
    this.textProductPrice = page.locator("//div[@class='product-price__current-price']"); 

    this.popupEmail = page.locator("//p[@class='login-with-email']"); 
    this.closeSignInPopup = page.locator("//button[@class='btn-close']"); 
 
  }  

  async clickBtnAddToCart(): Promise<void> { 
    await this.btnAddToCart.click();
  }

  async clickBtnBuyProductNow(): Promise<void> { 
    await this.btnBuyProductNow.click();
  } 

  async clickBtnProductSize(): Promise<void> { 
    await this.btnProductSize500.click();
  } 

  async clickBtnProductColorRed(): Promise<void> { 
    await this.btnProductColorRed.click();
  }

  async getProductPrice(): Promise<string> { 
    const price = await this.textProductPrice.innerText(); 
    console.log("Price: " + price);
    return price;
  }

  async clickCloseSignInPopup(): Promise<void> { 
    await this.closeSignInPopup.click();
  }

  async copareProductPrice(key: string): Promise<void> { 
    await expect(this.textProductPrice).toHaveText(key);
  }

  async verifyProductPrice(): Promise<void> { 
    await expect(this.textProductPrice).toBeVisible();
  }

  async verifyPopupVisible(): Promise<void> { 
    await expect(this.popupEmail).toBeVisible();
  }
  
}
 