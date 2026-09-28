import { test } from '@playwright/test';
import { HomePage } from '../pages';
import {RegisterPage} from '../pages';
import {AccountCreatedPage} from '../pages';
import {AccountDeletedPage} from '../pages';



let goHomePage: HomePage;
let registerPage: RegisterPage;
let accountCreatedPage: AccountCreatedPage;
let accountDeletedPage: AccountDeletedPage;

test.beforeEach(async ({ page }) => {
    goHomePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountCreatedPage = new AccountCreatedPage(page);
    accountDeletedPage = new AccountDeletedPage(page);
  await goHomePage.goto();
});


test.describe('TC1', () => {
  test('Register user successfully', async () => {
    await test.step('Step 3 - Verify that home page is visible successfully', async () => {
      await goHomePage.expectHomePageVisible();
    });

    await test.step('Step 4 - Click on Signup Login button', async () => {
        await goHomePage.clickSignupLogin();
    });

    await test.step('Step 5 - Verify New User Signup is visible', async () => {
        await registerPage.expectNewUserSignUpVisible();
    });

    await test.step('Step 6 - Enter name and email address', async () => {
        await registerPage.inputNameEMail(
            'Vuong Minh Hieu',
            'vuonghieu1402@gmail.com',
        );
    });

    await test.step('Step 7 - Click Signup button', async () => {
      await registerPage.clickButtonSignup();
    });
    
    await test.step('Step 8 - Verify that ENTER ACCOUNT INFORMATION is visible', async () => {
      await registerPage.expectEnterAccountInformationVisible();
    });

    await test.step('Step 9 - Fill details: Title, Name, Email, Password, Date of birth', async () => {
      await registerPage.clickChkTitle();
      await registerPage.inputPassword('Hieu1402@');
      await registerPage.selectDateOfBirth('14','February','1998');
    });
    
    await test.step('Step 10 - Select checkbox Sign up for our newsletter!', async () => {
      await registerPage.subscribeNewsletter();
    });

    await test.step('Step 11 - Select checkbox Receive special offers from our partners!', async () => {
      await registerPage.subscribeSpecialOffers();
    });

    await test.step('Step 12 - Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', async () => {
      await registerPage.inputAddressInformation('Hieu','Vuong Minh', 'GMS', 'So 9 Pham Van Dong', 'Ha Noi', 'India', 'Cau Giay', 'Ha Noi', '032154', '03214587547' );
    });

    await test.step('Step 13 - Click Create Account button', async () => {
      await registerPage.clickCreatAccountButton();
    });

    await test.step('Step 14 - Verify that ACCOUNT CREATED! is visible', async () => {
      await accountCreatedPage.expecAccountcreatedVisible();
    });

    await test.step('Step 15 - Click Continue button', async () => {
      await accountCreatedPage.clickContinueButton();
    });

    await test.step('Step 16 - Verify that Logged in as username is visible', async () => {
      await goHomePage.expectLoggedisasVisible();
    });

    await test.step('Step 17 - Click Delete Account button', async () => {
      await goHomePage.clickDeleteAccountButton();
    });

    await test.step('Step 18 - Verify that ACCOUNT DELETED! is visible and click Continue button', async () => {
      await accountDeletedPage.expectxtAccountDeletedVisible();
      await accountDeletedPage.clickCoutinueButton();
    });
  });
});

