import { test } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { CartPage } from '../pages';
import {AccountCreatedPage} from '../pages';
import {AccountDeletedPage} from '../pages';
import {PaymentPage} from '../pages';
import {CheckoutPage} from '../pages';
import { registerData } from '../test-data/registerData';
let goHomePage: HomePage;
let registerPage: RegisterPage;
let cartPage: CartPage;
let accountCreatedPage: AccountCreatedPage;
let accountDeletedPage: AccountDeletedPage;
let paymentPage : PaymentPage;
let checkoutPage: CheckoutPage
test.beforeEach(async ({ page }) => {
    goHomePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    cartPage = new CartPage(page);
    accountCreatedPage = new AccountCreatedPage(page);
    accountDeletedPage = new AccountDeletedPage(page);
    paymentPage = new PaymentPage(page);
    checkoutPage = new CheckoutPage(page);
  await goHomePage.goto();
});


test.describe('TC15', () => {
  test('Place Order: Register before Checkout', async () => {
    await test.step('Step 3 - Verify that home page is visible successfully', async () => {
      await goHomePage.expectHomePageVisible();
    });

    await test.step('Step 4 - Click Register / Login button', async () => {
        await goHomePage.clickSignupLogin();
    });

    await test.step('Step 5 - Fill all details in Signup and create account', async () => {
        await registerPage.registerAccount();
        
    });

    await test.step('Step 6 - Verify that ACCOUNT CREATED! is visible', async () => {
        await accountCreatedPage.expecAccountcreatedVisible();
        await accountCreatedPage.clickContinueButton();
      });

      await test.step('Step 7 - Verify that Logged in as username is visible', async () => {
        await goHomePage.expectLoggedisasVisible();
      });
    
    await test.step('Step 8 - Add products to cart', async () => {
      await goHomePage.clickAddToCartButton();
    });

    await test.step('Step 9 - Click View Cart link', async () => {
        await goHomePage.clickLinkViewCart();
    });
    
    await test.step('Step 10 - Verify that cart page is displayed', async () => {
        await cartPage.verifyCartPageVisible();
    });

    await test.step('Step 11 - Click Proceed To Checkout button', async () =>{
        await cartPage.clickProceedToCheckoutbutton();
    });

    await test.step('Step 12 - Verify Address Details and Review Your Order', async () =>{
        
        await checkoutPage.verifyAddressDetailVidible();
        await checkoutPage.verifyReviewYourOrderVidible();
    });
    await test.step('Step 13 - Enter description in comment text area and click Place Order', async () =>{
        await checkoutPage.inputYourComment('Water scarcity is also a pressing issue, with many regions of the world facing severe shortages of clean, accessible water. Climate change, population growth, and inefficient water management practices are exacerbating the problem');
        await checkoutPage.clickPlaceOrderButton();
    });

    await test.step('Step 14 - Enter payment details: Name on Card, Card Number, CVC, Expiration date', async () =>{
        await paymentPage.inputPaymentInformations('Hieu', '09813229991101', '113', '12', '2050');
    });

    await test.step('Step 15 - Click Pay and Confirm Order button', async () =>{
        await paymentPage.clickPayAndConfirmOrder();
  });

  await test.step('Step 16 - verify payment done', async () =>{
    await paymentPage.verifyPaymentdone();
});
await test.step('Step 17 - Click Delete Account button', async () => {
    await goHomePage.clickDeleteAccountButton();
  });

  await test.step('Step 18 - Verify that ACCOUNT DELETED! is visible and click Continue button', async () => {
    await accountDeletedPage.expectxtAccountDeletedVisible();
    await accountDeletedPage.clickCoutinueButton();
  });

});
})