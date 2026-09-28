import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterLoginPage } from '../pages/RegisterLoginPage';
import { SignupPage } from '../pages/SignupPage';
import { DeleteAccountPage } from '../pages/DeleteAccountPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';

    let homePage: HomePage;
    let registerLoginPage: RegisterLoginPage;
    let signupPage: SignupPage;
    let deleteAccountPage: DeleteAccountPage;
    let accountCreatedPage: AccountCreatedPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registerLoginPage = new RegisterLoginPage(page);
    signupPage = new SignupPage(page);
    deleteAccountPage = new DeleteAccountPage(page);
    accountCreatedPage = new AccountCreatedPage(page);

    await homePage.goto();
});

test.describe('Test case 1', () => {
    test('Test case 1: Register User', async () => {

        //Signup Detail
        const name = 'Vu Duc Dang';
        const email = 'vddang2222@gmail.com';
        const password = '11111111';
        const day = '16';
        const month = '9';
        const year = '2003';
        const firstName = 'Vũ';
        const lastName = 'Đăng';
        const company = 'SmartOSC';
        const address1 = 'abc';
        const address2 = 'xyz';
        const country = 'United States';
        const state = 'Floria';
        const city = 'Miami';
        const zipcode = '111111';
        const mobileNumber= '0123456789';

        //Step 3
        await test.step('Home page is visible', async() => {
            await homePage.expectLogoHomePageVisible();
        });

        //Step 4
        await test.step('Click Signup / Login button', async() => {
            await homePage.clickSignupLoginbtn();
        });

        //Step 5
        await test.step('Verify New User Signup is visible', async() => {
            await registerLoginPage.expectNewUserTextVisible();
        });

        //Step 6
        await test.step('Enter Name and Email address', async() => {
            await registerLoginPage.fillNameField(name);
            await registerLoginPage.fillEmailAddressField(email);
        });

        //Step 7
        await test.step('Click Signup button', async() => {
            await registerLoginPage.clickSignUpbtn();
        });

        //Step 8
        await test.step('Verify Enter Account Infor is visible', async() => {
            await signupPage.expectAccountInforTextVisible();
        });

        //Step 9
        await test.step('Fill title, name, email, password, DOB', async() => {
            await signupPage.clickGenderRadiobtn();
            await signupPage.fillPasswordField(password);
            await signupPage.selectDay(day);
            await signupPage.selectMonth(month);
            await signupPage.selectYear(year);
        });

        // Step 10 + 11
        await test.step('Select Checkbox', async() => {
            await signupPage.clickNewsletterCheckbox();
            await signupPage.clickSpecialOffersCheckbox();
        });

        //Step 12
        await test.step('Fill all details', async() => {
            await signupPage.fillFirstNameField(firstName);
            await signupPage.fillLastNameField(lastName);
            await signupPage.fillCompanyField(company);
            await signupPage.fillAddress1Field(address1);
            await signupPage.fillAddress2Field(address2);
            await signupPage.selectCountry(country);
            await signupPage.fillStateField(state);
            await signupPage.fillCityField(city);
            await signupPage.fillZipcodeField(zipcode);
            await signupPage.fillMobileNumberField(mobileNumber);
        });

        //Step 13
        await test.step('Click Create Account button', async() => {
            await signupPage.clickCreateAccountbtn();
        });

        //Step 14 + 15
        await test.step('Verify Account Created and click Continue', async() => {
            await accountCreatedPage.expectAccountCreatedtextVisible();
            await accountCreatedPage.clickContinueBtn();
        });

        //Step 16
        await test.step('Verify Logged in as ussername', async() => {
            await homePage.expectLoginSuccesstxtVisible(name);
        });

        //Step 17
        await test.step('Click Delete account', async() => {
            await homePage.clickDeleteAccountbtn();
        });

        //Step 18
        await test.step('Verify aacount deleted and click Continue', async() => {
            await deleteAccountPage.expectAccountDeletedTextVisible();
            await deleteAccountPage.clickContinuebtn();
        });
    });
});
