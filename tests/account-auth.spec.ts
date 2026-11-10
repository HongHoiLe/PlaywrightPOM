import { test } from '@playwright/test';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { DeleteAccountPage } from '../pages/DeleteAccountPage';
import { HomePage } from '../pages/HomePage';
import { RegisterLoginPage } from '../pages/RegisterLoginPage';
import { SignupPage } from '../pages/SignupPage';

test('register, log in, and delete an account', async ({ page }) => {
    const homePage = new HomePage(page);
    const registerLoginPage = new RegisterLoginPage(page);
    const signupPage = new SignupPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const deleteAccountPage = new DeleteAccountPage(page);
    const name = 'Copilot Automation Test';
    const email = `copilot-${Date.now()}@example.invalid`;
    const password = 'TestPass!2026';

    await test.step('Register a new account', async () => {
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
        await signupPage.fillFirstNameField('Copilot');
        await signupPage.fillLastNameField('Automation');
        await signupPage.fillAddress1Field('123 Test Street');
        await signupPage.selectCountry('United States');
        await signupPage.fillStateField('Test State');
        await signupPage.fillCityField('Test City');
        await signupPage.fillZipcodeField('12345');
        await signupPage.fillMobileNumberField('5551234567');
        await signupPage.clickCreateAccountbtn();

        await accountCreatedPage.expectAccountCreatedtextVisible();
        await accountCreatedPage.clickContinueBtn();
        await homePage.expectLoginSuccesstxtVisible(name);
    });

    await test.step('Log out and log back in', async () => {
        await homePage.clickLogoutbtn();
        await registerLoginPage.expectLoginTextVisible();
        await registerLoginPage.fillLoginEmailField(email);
        await registerLoginPage.fillLoginPasswordField(password);
        await registerLoginPage.clickLoginButton();
        await homePage.expectLoginSuccesstxtVisible(name);
    });

    await test.step('Delete the test account', async () => {
        await homePage.clickDeleteAccountbtn();
        await deleteAccountPage.expectAccountDeletedTextVisible();
        await deleteAccountPage.clickContinuebtn();
    });
});
