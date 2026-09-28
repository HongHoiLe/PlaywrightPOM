import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterLoginPage extends BasePage {

    // Locators
    readonly nameField: Locator;
    readonly emailAddressField: Locator;
    readonly signUpbtn: Locator;
    readonly newUsertext: Locator;


    constructor(page: Page) {
        super(page);
        this.nameField = page.locator ("//form [@action ='/signup'] //input [@name= 'name']");
        this.emailAddressField = page.locator ("//form [@action ='/signup'] //input [@name= 'email']");
        this.signUpbtn = page.locator ("//form  [@action ='/signup'] //button [text()= 'Signup']");
        this.newUsertext = page.locator ("//h2 [text()= 'New User Signup!']");
    }
    
    async fillNameField (name: string) : Promise <void> {
        await this.nameField.fill(name);
    }

    async fillEmailAddressField (email: string) : Promise <void> {
        await this.emailAddressField.fill(email);
    }
    
    async clickSignUpbtn () : Promise <void> {
        await this.signUpbtn.click();
    }

    async expectNewUserTextVisible(): Promise <void> {
        await expect(this.newUsertext).toBeVisible();
    }
}