import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    //Locator
    readonly firstProduct: Locator;

    constructor (page: Page) {
        super(page);
        this.firstProduct = page.locator ("(//a [@data-view-id = 'product_list_item']) [1]");
    }

    async clickFirstProduct(): Promise <void> {
        await this.firstProduct.click();
    }

    
}