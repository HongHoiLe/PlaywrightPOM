import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    // Locators
    readonly cartPageTitle: Locator;
    readonly proceedCheckoutbtn: Locator;
    readonly registerLoginbtn: Locator;


    constructor(page: Page) {
        super(page);
        this.cartPageTitle = page.locator("//li [text()= 'Shopping Cart']");
        this.proceedCheckoutbtn = page.locator("//a [@class= 'btn btn-default check_out']");
        this.registerLoginbtn = page.locator ("//div [@class ='modal-body'] //a [@href= '/login']");
    }

    async expectCartPageTitleVisible() : Promise <void>{
        await expect (this.cartPageTitle).toBeVisible();
    }

    async clickProceedCheckoutbtn() : Promise <void> {
        await this.proceedCheckoutbtn.click();
    }

    async clickRegisterLoginbtn() : Promise <void> {
        await this.registerLoginbtn.click();
    }
}