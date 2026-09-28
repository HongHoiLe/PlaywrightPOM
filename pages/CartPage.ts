import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
 
  // Locators
  readonly btProcesssToCheckout: Locator;
  readonly LnkRegesterLogin: Locator;
  readonly txtShoppingCart : Locator;
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
    this.btProcesssToCheckout = page.locator("//a[@class='btn btn-default check_out']");
    this.LnkRegesterLogin = page.locator("//div[@id='checkoutModal']//a[@href='/login']");
    this.txtShoppingCart = page.locator("//li[text()='Shopping Cart:']");
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

 
  async verifyCartPageVisible(): Promise<void>  {
    await expect(this.page).toHaveURL('https://automationexercise.com/view_cart');
  };

//Shopping Cart
  async clickProceedToCheckoutbutton(): Promise<void>  {
    await this.btProcesssToCheckout.click();
  };

  async clickLinkRegeserLogin() : Promise<void> {
    await this.LnkRegesterLogin.click();
};
//Check out
  async verifyAddressDetailVidible():  Promise<void>  {
    //Your delivery address
  await expect(this.deliveryName).toContainText('Hieu Vuong Minh');
  await expect(this.deliveryCompany).toHaveText('GMS');
  await expect(this.deliveryAddress1).toHaveText('So 9 Pham Van Dong');
  await expect(this.deliveryAddress2).toHaveText('Ha Noi');
  await expect(this.deliveryCityStateZipcode).toHaveText('Ha Noi Cau Giay 032154')
  await expect(this.deliveryCountry).toHaveText('Indian');
  await expect(this.deliveryPhone).toHaveText('03214587547')
    //Your billing address
  await expect(this.billingName).toContainText('Hieu Vuong Minh');
  await expect(this.billingCompany).toHaveText('GMS');
  await expect(this.billingAddress1).toHaveText('So 9 Pham Van Dong');
  await expect(this.billingAddress2).toHaveText('Ha Noi');
  await expect(this.billingCityStateZipcode).toHaveText('Ha Noi Cau Giay 032154')
  await expect(this.billingCountry).toHaveText('Indian');
  await expect(this.billingPhone).toHaveText('03214587547')
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
    await this.txtArea.click();
}






}