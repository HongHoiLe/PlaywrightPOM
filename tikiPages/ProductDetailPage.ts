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
        this.storageFirstOption = page.locator ("// span [text() = '1TB']// parent:: div [@data-view-id = 'pdp_main_select_configuration_item']");
        this.price1tbOption = page.locator ("//div [@class = 'product-price__current-price']");
        this.colorSecondOption = page.locator ("// span [contains (text(),'Đỏ')]// ancestor:: div [@data-view-id = 'pdp_main_select_configuration_item']");
        this.addToCartBtn = page.locator ("//button [@data-view-id = 'pdp_add_to_cart_button']");
        this.registerPopup = page.locator ("//div [@class = 'heading']");
        this.closePopupBtn = page.locator ("//button [@class = 'btn-close']");
        this.buyNowBtn = page.locator ("//div [@class = 'group-button']// child:: span [contains (text(),'Mua ngay')]");
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
        await expect(this.registerPopup).toContainText("Đăng nhập")
    }

    async clickClosePopupBtn(): Promise <void> {
        await this.closePopupBtn.click();
    }

    async clickBuyNowBtn(): Promise <void> {
        await this.buyNowBtn.click();
    }
}