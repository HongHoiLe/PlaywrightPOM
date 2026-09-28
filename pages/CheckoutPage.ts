import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    // Locators
    readonly fullName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly cityStatePostcode: Locator;
    readonly country: Locator;
    readonly mobileNumber: Locator;
    readonly itemInCart: Locator;
    readonly comment: Locator;
    readonly placeOrderbtn: Locator;

    constructor(page: Page) {
        super(page);
        this.fullName = page.locator("//ul [@class = 'address item box']//li [@class = 'address_firstname address_lastname']");
        this.company = page.locator("//ul [@class = 'address item box']//li [@class = 'address_address1 address_address2'][1]");
        this.address = page.locator ("//ul [@class = 'address item box']//li [@class = 'address_address1 address_address2'][2]");
        this.cityStatePostcode = page.locator ("//ul [@class = 'address item box']//li [@class = 'address_city address_state_name address_postcode']");
        this.country = page.locator("//ul [@class = 'address item box']//li [@class = 'address_country_name']");
        this.mobileNumber = page.locator("//ul [@class = 'address item box']//li [@class = 'address_phone']");
        this.itemInCart = page.locator("//div [@id = 'cart_info']//a [@href = '/product_details/1']");
        this.comment = page.locator("//textarea [@name = 'message']");
        this.placeOrderbtn = page.locator("//a [text()= 'Place Order']");
    }

    async expectFullNamecontain(firstname: string, lastname: string): Promise <void> {
        await expect(this.fullName).toContainText(`${firstname} ${lastname}`);
    }

    async expectCompanycontain(company: string): Promise <void> {
        await expect(this.company).toContainText(company);
    }

    async expectAddresscontain(address1: string): Promise <void> {
        await expect(this.address).toContainText(address1);
    }

    async expectCityStatePostcodecontain(city: string, state: string, postcode: string): Promise <void> {
        await expect(this.cityStatePostcode).toContainText(`${city} ${state} ${postcode}`);
    }

    async expectCountrycontain(country: string): Promise <void> {
        await expect(this.country).toContainText(country);
    }

    async expectMobileNumbercontain(mobileNumber: string): Promise <void> {
        await expect(this.mobileNumber).toContainText(mobileNumber);
    }

    async expectItemInCartCorrect(itemInCart: string): Promise <void> {
        await expect(this.itemInCart).toContainText(itemInCart);
    }

    async fillComment(): Promise <void> {
        await this.comment.fill("I love playwright");
    }

    async clickPlaceOrderbtn(): Promise <void> {
        await this.placeOrderbtn.click()
    }
}