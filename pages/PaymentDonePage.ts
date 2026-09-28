import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentDonePage extends BasePage {

    // Locators
    readonly placeSuccessfulltext: Locator;
    readonly deleteAccountbtn: Locator;

    constructor (page:Page) {
        super(page);
        this.placeSuccessfulltext = page.locator("//p [contains (text(), 'has been confirmed')]");
        this.deleteAccountbtn = page.locator("//a [@href = '/delete_account']");
    }

    async expectPlaceSuccessfulltextVisible(): Promise <void> {
        await expect(this.placeSuccessfulltext).toContainText('has been confirmed');
    }

    async clickDeleteAccountbtn() : Promise <void> {
        await this.deleteAccountbtn.click();
    }
}