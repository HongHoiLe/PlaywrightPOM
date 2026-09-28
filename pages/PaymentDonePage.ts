import { Page, Locator, expect, Download } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentDonePage extends BasePage {

    // Locators
    readonly placeSuccessfulltext: Locator;
    readonly deleteAccountbtn: Locator;
    readonly downloadInvoicebtn: Locator;
    readonly continueBtn: Locator;


    constructor (page:Page) {
        super(page);
        this.placeSuccessfulltext = page.locator("//p [contains (text(), 'has been confirmed')]");
        this.deleteAccountbtn = page.locator("//a [@href = '/delete_account']");
        this.downloadInvoicebtn = page.locator("//a [@href = '/download_invoice/500']");
        this.continueBtn = page.locator("//a [@data-qa = 'continue-button']");
    }

    async expectPlaceSuccessfulltextVisible(): Promise <void> {
        await expect(this.placeSuccessfulltext).toContainText('has been confirmed');
    }

    async clickDeleteAccountbtn(): Promise <void> {
        await this.deleteAccountbtn.click();
    }

    async downloadedInvoice(): Promise<Download> {
        const downloadPromise = this.page.waitForEvent('download'); 
        await this.clickDownloadInvoicebtn();
        return await downloadPromise;
    }

    async clickDownloadInvoicebtn(): Promise <void> {
        await this.downloadInvoicebtn.click();
    }

    async clickContinuebtn(): Promise <void> {
        await this.continueBtn.click();
    }
}