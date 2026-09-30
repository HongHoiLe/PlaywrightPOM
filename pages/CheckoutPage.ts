import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';
import { registerData } from '../test-data/registerData';
export class CheckoutPage extends BasePage {
 
  // Locators
  readonly deliveryName : Locator;
  readonly deliveryCompany : Locator;
  readonly deliveryAddress1 : Locator;
  readonly deliveryAddress2 : Locator;
  readonly deliveryCityStateZipcode : Locator;
  readonly deliveryCountry: Locator;
  readonly deliveryPhone: Locator;
  readonly billingName: Locator;
  readonly billingCompany: Locator;
  readonly billingAddress1: Locator;
  readonly billingAddress2: Locator;
  readonly billingCityStateZipcode : Locator;
  readonly billingCountry: Locator;
  readonly billingPhone: Locator;
  readonly productName : Locator;
  readonly productPrice : Locator ;
  readonly productQuantity : Locator ;
  readonly productTotal : Locator;
  readonly txtArea : Locator;
  readonly btPlaceOrder : Locator;
 
  
  constructor(page: Page) {
    super(page)
    this.deliveryName = page.locator("//ul[@id='address_delivery']//li[@class='address_firstname address_lastname']");
    this.deliveryCompany = page.locator("//ul[@id='address_delivery']//li[@class='address_address1 address_address2'][1]");
    this.deliveryAddress1 = page.locator("//ul[@id='address_delivery']//li[@class='address_address1 address_address2'][2]");
    this.deliveryAddress2 = page.locator("//ul[@id='address_delivery']//li[@class='address_address1 address_address2'][3]");
    this.deliveryCityStateZipcode = page.locator("//ul[@id='address_delivery']//li[@class='address_city address_state_name address_postcode']");
    this.deliveryCountry = page.locator("//ul[@id='address_delivery']//li[@class='address_country_name']");
    this.deliveryPhone = page.locator("//ul[@id='address_delivery']//li[@class='address_phone']");
    this.billingName = page.locator("//ul[@id='address_invoice']//li[@class='address_firstname address_lastname']");
    this.billingCompany = page.locator("//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][1]");
    this.billingAddress1 = page.locator("//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][2]");
    this.billingAddress2 = page.locator("//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][3]");
    this.billingCityStateZipcode = page.locator("//ul[@id='address_invoice']//li[@class='address_city address_state_name address_postcode']");
    this.billingCountry = page.locator("//ul[@id='address_invoice']//li[@class='address_country_name']");
    this.billingPhone = page.locator("//ul[@id='address_invoice']//li[@class='address_phone']");
    this.productName = page.locator("//td[@class='cart_description']//a");
    this.productPrice = page.locator("//td[@class='cart_price']//p");
    this.productQuantity = page.locator("//td[@class='cart_quantity']//button");
    this.productTotal = page.locator("//td[@class='cart_total']//p");
    this.txtArea = page.locator("//textarea[@class='form-control']");
    this.btPlaceOrder = page.locator("//a[@href='/payment']");
  }

 
  async verifyCheckoutPageVisible(): Promise<void>  {
    await expect(this.page).toHaveURL('https://automationexercise.com/checkout');
  };


//Check out
  async verifyAddressDetailVidible():  Promise<void>  {
    //Your delivery address
  await expect(this.deliveryName).toContainText('Hieu Vuong Minh');
  await expect(this.deliveryCompany).toHaveText(registerData.company);
  await expect(this.deliveryAddress1).toHaveText(registerData.address1);
  await expect(this.deliveryAddress2).toHaveText(registerData.address2);
  await expect(this.deliveryCityStateZipcode).toHaveText(`${registerData.city} ${registerData.state} ${registerData.zipcode}`)
  await expect(this.deliveryCountry).toHaveText(registerData.country);
  await expect(this.deliveryPhone).toHaveText(registerData.mobileNumber);
    //Your billing address
  await expect(this.billingName).toContainText('Hieu Vuong Minh');
  await expect(this.billingCompany).toHaveText(registerData.company);
  await expect(this.billingAddress1).toHaveText(registerData.address1);
  await expect(this.billingAddress2).toHaveText(registerData.address2);
  await expect(this.billingCityStateZipcode).toHaveText(`${registerData.city} ${registerData.state} ${registerData.zipcode}`)
  await expect(this.billingCountry).toHaveText(registerData.country);
  await expect(this.billingPhone).toHaveText(registerData.mobileNumber)
};
    //Review Your Order
  async verifyReviewYourOrderVidible():  Promise<void>  {
  await expect(this.productName).toHaveText('Sleeveless Dress');
  await expect(this.productPrice).toHaveText('Rs. 1000');
  await expect(this.productQuantity).toHaveText('1');
  await expect(this.productTotal).toHaveText('Rs. 1000');
}; 
async inputYourComment(comment : string):  Promise<void>  {
    await this.txtArea.fill(comment);
};
async clickPlaceOrderButton():  Promise<void>  {
    await this.btPlaceOrder.click();
}






}