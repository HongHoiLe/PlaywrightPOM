import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly url = 'https://tiki.vn/';

    //Locator
    readonly closeBtn: Locator;
    readonly searchBox: Locator;
    readonly searchBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.closeBtn = page.locator ("//img [@alt = 'close-icon']");
        this.searchBox = page.locator ("//input [@data-view-id = 'main_search_form_input']");
        this.searchBtn = page.locator ("//button [@data-view-id = 'main_search_form_button']");
    }

    async goto(): Promise<void> {
        await this.navigate(this.url);
    }

    async clickCloseBtn(): Promise <void> {
        await this.closeBtn.click();
    }

    async fillSearchBox(item: string): Promise <void> {
        await this.searchBox.fill(item);
        await this.searchBtn.click();
    }
}