import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreatedPage extends BasePage {

    //locator
    readonly accountCreatedtxt: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.accountCreatedtxt = page.locator("//h2 [@data-qa = 'account-created']");
        this.continueBtn = page.locator ("//a [@data-qa = 'continue-button']");

    }

    async expectAccountCreatedtextVisible() : Promise <void> {
        await expect (this.accountCreatedtxt).toBeVisible();
    }

    async clickContinueBtn() : Promise <void> {
        await this.continueBtn.click();
    }

}