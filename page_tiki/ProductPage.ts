import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage { 
  // Locators  
  readonly btnProductSize1T: Locator; 
  readonly btnProductColorRed: Locator; 
  readonly textProductPrice: Locator; 
  
  readonly btnAddToCart: Locator; 
  readonly btnBuyProductNow: Locator; 
  readonly popupEmail: Locator; 
  readonly popupHeader: Locator; 
  readonly closeSignInPopup: Locator; 

  constructor(page: Page) {
    super(page); 
    this.btnProductSize1T = page.locator("//div[@data-view-label='Dung lượng']//div[@data-view-index='0']"); 
    this.btnProductColorRed = page.locator("//div[@data-view-label='Màu sắc']//div[@data-view-index='1']"); 
    this.textProductPrice = page.locator("//div[@class='product-price__current-price']"); 

    this.btnBuyProductNow = page.locator("//div[@class='group-button']//span[text()='Mua ngay']"); 
    this.btnAddToCart = page.locator("//div[@class='group-button']/button[@data-view-id='pdp_add_to_cart_button']"); 

    this.popupHeader = page.locator("//div[@class='heading']/p"); 
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
    await this.btnProductSize1T.click();
  } 

  async clickBtnProductColorRed(): Promise<void> { 
    if (await this.btnProductColorRed.isVisible()) {
      await this.btnProductColorRed.click();
    }else{
      console.log("Red color not found. Skip.");
    }
  }

  async verifyProductPrice(): Promise<void> { 
    await expect(this.textProductPrice).toBeVisible();
  }

  async getProductPrice(): Promise<string> { 
    let price = await this.textProductPrice.innerText(); 
    console.log("Price: " + price);
    return price;
  }

  async copareProductPrice(previousPrice: string): Promise<void> {  
    await this.textProductPrice.waitFor({state:'visible', timeout:3000});

    let currentPrice = await this.textProductPrice.innerText();  
    if(currentPrice === previousPrice){
      console.log("Price stay same at: " + currentPrice);
    } else {
      console.log("Old Price: " + previousPrice + "| New price: " + currentPrice);
    }
  }


  // pop up
  async clickCloseSignInPopup(): Promise<void> { 
    await this.closeSignInPopup.click();
  }

  async verifyPopupVisible(keyword: string): Promise<void> { 
    await expect(this.popupEmail).toBeVisible();
    await expect(this.popupHeader).toHaveText(keyword);
  }
  
}
 