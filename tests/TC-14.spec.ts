import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { RegisterLoginPage } from '../pages/RegisterLoginPage';
import { SignupPage } from '../pages/SignupPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { PaymentDonePage } from '../pages/PaymentDonePage';
import { DeleteAccountPage } from '../pages/DeleteAccountPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';

    let homePage: HomePage;
    let cartPage: CartPage;
    let registerLoginPage: RegisterLoginPage;
    let signupPage: SignupPage;
    let checkoutPage: CheckoutPage;
    let paymentPage: PaymentPage;
    let paymentDonePage: PaymentDonePage;
    let deleteAccountPage: DeleteAccountPage;
    let accountCreatedPage: AccountCreatedPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    registerLoginPage = new RegisterLoginPage(page);
    signupPage = new SignupPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);
    paymentDonePage = new PaymentDonePage(page);
    deleteAccountPage = new DeleteAccountPage(page);
    accountCreatedPage = new AccountCreatedPage(page);

    await homePage.goto();
});

test.describe('Test case 14', () => {
    test.only('Test case 14: Place Order: Register while Checkout', async () => {
        
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
        const country = 'United State';
        const state = 'Floria';
        const city = 'Miami';
        const zipcode = '111111';
        const mobileNumber= '0123456789';
        
        //Item Name
        const itemcart = await homePage.getTextFirstProduct();

        //Payment Detail
        const nameOnCard = 'Vu Duc Dang';
        const cardNumber = '123456789';
        const cvc = '123';
        const expirationMonth = '12';
        const expirationYear = '2030';


        //Step 3
        await test.step('Home page is visible', async() => {
            await homePage.expectLogoHomePageVisible();
        });

        //Step 4
        await test.step('Add products to cart', async() => {
            await homePage.clickAddFirstProductToCartbtn();
            await homePage.clickContinueShoppingbtn();
        });

        //Step 5
        await test.step('Click Cart Button', async() => {
            await homePage.clickCartbtn();
        });

        //Step 6
        await test.step('Cart page is displayed', async() => {
            await cartPage.expectCartPageTitleVisible();
        });

        //Step 7
        await test.step('Click Proceed to Checkout', async() => {
            await cartPage.clickProceedCheckoutbtn();
        });

        //Step 8
        await test.step('Click Register/Login button', async() => {
            await cartPage.clickRegisterLoginbtn();
        });

        //Step 9
        await test.step('Fill all details in Signup and create account', async() => {
            await registerLoginPage.fillNameField(name);
            await registerLoginPage.fillEmailAddressField(email);
            await registerLoginPage.clickSignUpbtn();

            await signupPage.clickGenderRadiobtn();
            await signupPage.fillPasswordField(password);
            await signupPage.selectDay(day);
            await signupPage.selectMonth(month);
            await signupPage.selectYear(year);
            await signupPage.clickNewsletterCheckbox();
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
            await signupPage.clickCreateAccountbtn();
        });

        //Step 10
        await test.step('Verify Account Created and click Continue', async() => {
            await accountCreatedPage.expectAccountCreatedtextVisible();
            await accountCreatedPage.clickContinueBtn();
        });

        //Step 11
        await test.step('Verify Logged in as ussername', async() => {
            await homePage.expectLoginSuccesstxtVisible(name);
        });

        //Step 12
        await test.step('Click Cart Button', async() => {
            await homePage.clickCartbtn();
        });

        //Step 13
        await test.step('Click Proceed to Checkout', async() => {
            await cartPage.clickProceedCheckoutbtn();
        });

        //Step 14
        await test.step('Verify address detail and Review order', async() => {
            await checkoutPage.expectFullNamecontain(firstName, lastName);
            await checkoutPage.expectCompanycontain(company);
            await checkoutPage.expectAddresscontain(address1);
            await checkoutPage.expectCityStatePostcodecontain(city, state, zipcode);
            await checkoutPage.expectCountrycontain(country);
            await checkoutPage.expectMobileNumbercontain(mobileNumber);
            await checkoutPage.expectItemInCartCorrect(itemcart);
        });

        //Step 15
        await test.step('Enter description and click Place Order', async() => {
            await checkoutPage.fillComment();
            await checkoutPage.clickPlaceOrderbtn();
        });

        //Step 16
        await test.step('Enter payment details', async() => {
            await paymentPage.fillNameOnCard(nameOnCard);
            await paymentPage.fillCardNumber(cardNumber);
            await paymentPage.fillCVC(cvc);
            await paymentPage.fillExpirationMonth(expirationMonth);
            await paymentPage.fillExpirationYear(expirationYear);
        });

        //Step 17
        await test.step('Click Pay and Confirm button', async() => {
            await paymentPage.clickPayConfirmbtn();
        });

        //Step 18
        await test.step('Verify success message', async() => {
            await paymentDonePage.expectPlaceSuccessfulltextVisible();
        });

        //Step 19
        await test.step('Click delete account', async() => {
            await paymentDonePage.clickDeleteAccountbtn();
        });

        //Step 20
        await test.step('Verify aacount deleted and click Continue', async() => {
            await deleteAccountPage.expectAccountDeletedTextVisible();
            await deleteAccountPage.clickContinuebtn();
        });
    });
});