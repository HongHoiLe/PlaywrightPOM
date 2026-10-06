import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {

    //Locator
    readonly storageFirstOption: Locator;
    readonly price1tbOption: Locator;
    readonly colorSecondOption: Locator;
    readonly addToCartBtn: Locator;
    readonly registerPopup: Locator;
    readonly closePopupBtn: Locator;
    readonly buyNowBtn: Locator;

    constructor (page: Page) {
        super(page);
        this.storageFirstOption = page.locator ("//div [@data-view-id = 'pdp_main_select_configuration_item'] // span [text() = '1TB']");
        this.price1tbOption = page.locator ("//div [@class = 'sc-31ecf63b-1 fgrIVW']");
        this.colorSecondOption = page.locator ("//div [@data-view-id = 'pdp_main_select_configuration_item']// child:: span [contains (text(),'Đỏ')]");
        this.addToCartBtn = page.locator ("//button [@data-view-id = 'pdp_add_to_cart_button']");
        this.registerPopup = page.locator ("//div [@class = 'heading']");
        this.closePopupBtn = page.locator ("//button [@class = 'btn-close']");
        this.buyNowBtn = page.locator ("//button [@class = 'sc-9e5b140a-0 hDQYRF']");
    }

    async clickStorageFirstOption(): Promise <void> {
        await this.storageFirstOption.click();
    }

    async getPrice1tbOption(): Promise <number> {
        return parseFloat(await this.price1tbOption.innerText());
    }

    async clickColorSecondOption(): Promise <void> {
        await this.colorSecondOption.click();
    }

    async clickAddToCartBtn(): Promise <void> {
        await this.addToCartBtn.click();
    }

    async expectRegisterPopupVisible(): Promise <void> {
        await expect(this.registerPopup).toContainText("Đăng Nhập")
    }

    async clickClosePopupBtn(): Promise <void> {
        await this.closePopupBtn.click();
    }

    async clickBuyNowBtn(): Promise <void> {
        await this.buyNowBtn.click();
    }
}