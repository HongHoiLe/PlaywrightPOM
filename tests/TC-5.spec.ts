import { test } from '@playwright/test';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { DeleteAccountPage } from '../pages/DeleteAccountPage';
import { HomePage } from '../pages/HomePage';
import { RegisterLoginPage } from '../pages/RegisterLoginPage';
import { SignupPage } from '../pages/SignupPage';

test.describe('Test case 5', () => {
    test('Register User with existing email', async ({ page }) => {
        const homePage = new HomePage(page);
        const registerLoginPage = new RegisterLoginPage(page);
        const signupPage = new SignupPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);
        const deleteAccountPage = new DeleteAccountPage(page);
        const name = 'Test Case 5 disposable user';
        const email = `tc5-${Date.now()}@example.invalid`;
        const password = 'TestPass!2026';
        let accountCreated = false;

        try {
            await test.step('Create a disposable account as the duplicate-email precondition', async () => {
                await homePage.goto();
                await homePage.expectLogoHomePageVisible();
                await homePage.clickSignupLoginbtn();
                await registerLoginPage.expectNewUserTextVisible();
                await registerLoginPage.fillNameField(name);
                await registerLoginPage.fillEmailAddressField(email);
                await registerLoginPage.clickSignUpbtn();

                await signupPage.expectAccountInforTextVisible();
                await signupPage.clickGenderRadiobtn();
                await signupPage.fillPasswordField(password);
                await signupPage.selectDay('10');
                await signupPage.selectMonth('November');
                await signupPage.selectYear('1990');
                await signupPage.fillFirstNameField('Test');
                await signupPage.fillLastNameField('User');
                await signupPage.fillAddress1Field('123 Test Street');
                await signupPage.selectCountry('United States');
                await signupPage.fillStateField('Test State');
                await signupPage.fillCityField('Test City');
                await signupPage.fillZipcodeField('12345');
                await signupPage.fillMobileNumberField('5551234567');
                await signupPage.clickCreateAccountbtn();

                await accountCreatedPage.expectAccountCreatedtextVisible();
                accountCreated = true;
                await accountCreatedPage.clickContinueBtn();
                await homePage.expectLoginSuccesstxtVisible(name);
                await homePage.clickLogoutbtn();
            });

            await test.step('Verify signup rejects the registered email', async () => {
                await registerLoginPage.expectNewUserTextVisible();
                await registerLoginPage.fillNameField(name);
                await registerLoginPage.fillEmailAddressField(email);
                await registerLoginPage.clickSignUpbtn();
                await registerLoginPage.expectExistingEmailErrorVisible();
            });
        } finally {
            if (accountCreated) {
                await homePage.goto();
                if (await homePage.loginSuccesstxt.isVisible()) {
                    await homePage.clickLogoutbtn();
                } else {
                    await homePage.clickSignupLoginbtn();
                }
                await registerLoginPage.fillLoginEmailField(email);
                await registerLoginPage.fillLoginPasswordField(password);
                await registerLoginPage.clickLoginButton();
                await homePage.expectLoginSuccesstxtVisible(name);
                await homePage.clickDeleteAccountbtn();
                await deleteAccountPage.expectAccountDeletedTextVisible();
            }
        }
    });
});
