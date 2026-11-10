import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterLoginPage extends BasePage {

    // Locators
    readonly nameField: Locator;
    readonly emailAddressField: Locator;
    readonly signUpbtn: Locator;
    readonly newUsertext: Locator;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginBtn: Locator;
    readonly loginText: Locator;
    readonly existingEmailError: Locator;


    constructor(page: Page) {
        super(page);
        this.nameField = page.locator ("//form [@action ='/signup'] //input [@name= 'name']");
        this.emailAddressField = page.locator ("//form [@action ='/signup'] //input [@name= 'email']");
        this.signUpbtn = page.locator ("//form  [@action ='/signup'] //button [text()= 'Signup']");
        this.newUsertext = page.locator ("//h2 [text()= 'New User Signup!']");
        this.loginEmailField = page.locator("//form[@action='/login']//input[@name='email']");
        this.loginPasswordField = page.locator("//form[@action='/login']//input[@name='password']");
        this.loginBtn = page.locator("//form[@action='/login']//button[normalize-space()='Login']");
        this.loginText = page.locator("//h2[normalize-space()='Login to your account']");
        this.existingEmailError = page.locator("//p[normalize-space()='Email Address already exist!']");
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

    async fillLoginEmailField(email: string): Promise<void> {
        await this.loginEmailField.fill(email);
    }

    async fillLoginPasswordField(password: string): Promise<void> {
        await this.loginPasswordField.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginBtn.click();
    }

    async expectLoginTextVisible(): Promise<void> {
        await expect(this.loginText).toBeVisible();
    }

    async expectExistingEmailErrorVisible(): Promise<void> {
        await expect(this.existingEmailError).toBeVisible();
    }
}