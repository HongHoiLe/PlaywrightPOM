import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  readonly txtDescriptionComment: Locator;
  readonly txtNameCard: Locator;
  readonly txtCardNumber: Locator;
  readonly txtCVC: Locator;
  readonly txtExMonth: Locator;
  readonly txtExYear: Locator;
  readonly btnPlaceOrder: Locator;
  readonly btnPaySumbmit: Locator;
  readonly btnDownInvoice: Locator;
  readonly btnContinue: Locator;
  readonly btnContinueAfterInvoice: Locator;


  readonly textAddName: Locator;
  readonly textAddName2: Locator;
  readonly textCountry: Locator;
  readonly textPhone: Locator;
  readonly txtOrderConfirm: Locator;
 

  constructor(page: Page) {
    super(page);
    this.txtDescriptionComment = page.locator("//textarea[@class='form-control']");

    this.txtNameCard = page.locator("//input[@name='name_on_card']");
    this.txtCardNumber = page.locator("//input[@name='card_number']");
    this.txtCVC = page.locator("//input[@name='cvc']");
    this.txtExMonth = page.locator("//input[@name='expiry_month']");
    this.txtExYear = page.locator("//input[@name='expiry_year']");
    this.btnPlaceOrder = page.locator("//a[@href='/payment']");
    this.btnPaySumbmit = page.locator("//button[@class='form-control btn btn-primary submit-button']");
    this.btnDownInvoice = page.locator("//a[@href='/download_invoice/500']");
    this.btnContinue = page.locator("//a[@class='btn btn-primary' and text()='Continue']");
 
    this.textAddName = page.locator("//ul[@class='address item box']//li[@class='address_firstname address_lastname']");
    this.textAddName2 = page.locator("//ul[@class='address item box']//li[@class='address_address1 address_address2'][2]");
    this.textCountry = page.locator("//ul[@class='address item box']//li[@class='address_country_name']");
    this.textPhone = page.locator("//ul[@class='address item box']//li[@class='address_phone']");

    // this.btnDownInvoice = page.locator("//a[@href='/download_invoice/500']");  
    this.btnDownInvoice = page.locator("//div[@class='col-sm-9 col-sm-offset-1']/a");  
    this.btnContinueAfterInvoice = page.locator("//a[@class='btn btn-primary' and text()='Continue']");  
    this.txtOrderConfirm = page.locator("//div[@class='col-sm-9 col-sm-offset-1']/p");  
     
  } 


  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  async enterTxtDescriptionComment(keyword: string): Promise<void> { 
    //await this.txtDescriptionComment.waitFor({ state: 'visible' }); 
    // console.log("Textarea count:", await this.page.locator("textarea").count());
    // console.log("Count:", await this.txtDescriptionComment.count());
    // console.log("Visible:", await this.txtDescriptionComment.isVisible()); 
    // await this.txtDescriptionComment.click();
    await this.txtDescriptionComment.fill(keyword);
  }
  async clickBtnPlaceOrder(): Promise<void> { 
    console.log("Place Order count:", await this.btnPlaceOrder.count());
    console.log("URL:", this.page.url());
    await this.btnPlaceOrder.click();
  }

  async clickBtnDownInvoice(): Promise<void> {  
    await this.btnDownInvoice.click();
  }
  
  async clickBtnContinueAfterInvoice(): Promise<void> {  
    await this.btnContinueAfterInvoice.click();
  }

  async enterTxtNameCard(keyword: string): Promise<void> { 
    await this.txtNameCard.fill(keyword);
  }

  async enterTxtCardNumber(keyword: string): Promise<void> { 
    await this.txtCardNumber.fill(keyword);
  }

  async enterTxtCVC(keyword: string): Promise<void> { 
    await this.txtCVC.fill(keyword);
  }

  async enterTxtExMonth(keyword: string): Promise<void> { 
    await this.txtExMonth.fill(keyword);
  }

  async enterTxtExYear(keyword: string): Promise<void> { 
    await this.txtExYear.fill(keyword);
  }

  async clickBtnPaySubmit(): Promise<void> { 
    await this.btnPaySumbmit.click();
  } 

  async fillInPaymentDetail(txtNameCard: string, txtCardNumber: string, txtTxtCVC: string, txtExMonth: string, txtExYear: string): Promise<void> { 
    await this.enterTxtNameCard(txtNameCard);
    await this.enterTxtCardNumber(txtCardNumber);
    await this.enterTxtCVC(txtTxtCVC);
    await this.enterTxtExMonth(txtExMonth);
    await this.enterTxtExYear(txtExYear); 
  } 

  async verifyDeliveryAddress(fullName: string, address1: string, country: string, phone: string): Promise<void> { 
    await expect(this.textAddName).toContainText(fullName);
    await expect(this.textAddName2).toContainText(address1);
    await expect(this.textCountry).toContainText(country);
    await expect(this.textPhone).toContainText(phone);
  }

  async verifyOrderSuccess(text: string): Promise<void> { 
    await expect(this.txtOrderConfirm).toContainText(text); 
  }
  //
}
