import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {

    // Locators
    readonly nameOnCard: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expirationMonth: Locator;
    readonly expirationYear: Locator;
    readonly payConfirmbtn: Locator;

    constructor (page: Page) {
        super(page);
        this.nameOnCard = page.locator("//input [@name= 'name_on_card']");
        this.cardNumber = page.locator("//input [@name= 'card_number']");
        this.cvc = page.locator("//input [@name= 'cvc']");
        this.expirationMonth = page.locator("//input [@name= 'expiry_month']");
        this.expirationYear = page.locator("//input [@name= 'expiry_year']");
        this.payConfirmbtn = page.locator("//button [@id= 'submit']");
    }

    async fillNameOnCard(nameOnCard: string): Promise <void> {
        await this.nameOnCard.fill(nameOnCard);
    }

    async fillCardNumber(cardNumber: string): Promise <void> {
        await this.cardNumber.fill(cardNumber);
    }

    async fillCVC(cvc: string): Promise <void> {
        await this.cvc.fill(cvc);
    }

    async fillExpirationMonth(expirationMonth: string): Promise <void> {
        await this.expirationMonth.fill(expirationMonth);
    }

    async fillExpirationYear(expirationYear: string): Promise <void> {
        await this.expirationYear.fill(expirationYear);
    }

    async clickPayConfirmbtn(): Promise <void> {
        await this.payConfirmbtn.click();
    }
}