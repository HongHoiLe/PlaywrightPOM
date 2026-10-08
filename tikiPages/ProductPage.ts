import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    //Locator
    readonly firstProduct: Locator;
    readonly breadCrumb: Locator;

    constructor (page: Page) {
        super(page);
        this.firstProduct = page.locator ("(//a [@data-view-id = 'product_list_item']) [1]");
        this.breadCrumb = page.locator ("//a [@class = 'breadcrumb-item']// child:: span [contains (text(),'Kết quả tìm kiếm')]");
    }

    async clickFirstProduct(): Promise <void> {
        await this.firstProduct.click();
    }

    async expectBreadCrumbVisible(): Promise <void> {
        await expect(this.breadCrumb).toBeVisible();
    }
}