import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DeleteAccountPage extends BasePage {

    // Locators
    readonly accountDeletedtext: Locator;
    readonly continueBtn: Locator;

    constructor (page:Page) {
        super(page);
        this.accountDeletedtext = page.locator("//h2 [@data-qa = 'account-deleted']");
        this.continueBtn = page.locator("//a [@data-qa = 'continue-button']");
    }

    async expectAccountDeletedTextVisible(): Promise <void> {
        await expect(this.accountDeletedtext).toBeVisible();
    }

    async clickContinuebtn() : Promise <void> {
        await this.continueBtn.click();
    }
}