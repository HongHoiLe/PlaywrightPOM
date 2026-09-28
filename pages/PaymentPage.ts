import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {
 
  // Locators
  readonly ipNameOnCard : Locator;
  readonly ipCardNumber : Locator;
  readonly ipCVC : Locator;
  readonly ipExpirationMonth : Locator;
  readonly ipEXpirationYear : Locator;
  readonly btPayAndConfirmOrder : Locator;
  readonly txtPaymentdone : Locator
  
  constructor(page: Page) {
    super(page)
    
    this.ipCardNumber = page.locator("//input[@name='name_on_card']");
    this.ipCVC = page.locator("//input[@name='cvc']");
    this.ipExpirationMonth = page.locator("//input[@name='expiry_month']");
    this.ipEXpirationYear = page.locator("//input[@name='expiry_year']");
    this.btPayAndConfirmOrder = page.locator("//button[@data-qa='pay-button']");
    this.txtPaymentdone = page.locator("//p[@text()='Congratulations! Your order has been confirmed!'");
  }
  //Payment
async inputPaymentInformations(name_on_card : string, card_number: string, cvc: string, expiration_month: string, expiration_year: string):  Promise<void>  {
    await this.ipCardNumber.fill(name_on_card);
    await this.ipCardNumber.fill(card_number);
    await this.ipCVC.fill(cvc);
    await this.ipExpirationMonth.fill(expiration_month);
    await this.ipEXpirationYear.fill(expiration_year);
};

async clickPayAndConfirmOrder():  Promise<void>  {

    await this.btPayAndConfirmOrder.click();

}

async verifyPaymentdone():  Promise<void>  {
    await expect(this.txtPaymentdone).toBeVisible;

}
}