import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { ProductPage } from '../pages';
import { ProductPageDetail } from '../pages';
import { CartPage } from '../pages';
import { CheckoutPage } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;
let productPage: ProductPage;
let productPageDetail: ProductPageDetail;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  productPage = new ProductPage(page);
  productPageDetail = new ProductPageDetail(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);


});
 
test('TC14: Place Order: Register while Checkout', async ({ page }) => {
  // data  
  const firstName: string = "Khoa";
  const lastName: string = "Test";
  const dayDOB: string = "21";
  const monthDOB: string = "9";
  const yearDOB: string = "2002";
  const passWord: string = "khoa123";
  const company: string = "Async";
  const address1: string = "12 ABC";
  const address2: string = "12 DEF";
  const country: string = "United States";
  const state: string = "Wisconsin";
  const city: string = "Oshkosh";
  const zipCode: string = "10000";
  const phoneNumber: string = "1231231231";

  const txtNameCard: string = "Visa";
  const txtCardNumber: string = "123456";
  const txtTxtCVC: string = "123";
  const txtExMonth: string = "12";
  const txtExYear: string = "2030";
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Add products to cart", async () => {
    await homePage.clickBtnAddFirstProduct();
    await homePage.clickBtnContinueShop();
  });
 
  await test.step("5. Click 'Cart' button", async () => {
    await homePage.clickbBtnCartPage();
  }); 

  await test.step("6. Verify that cart page is displayed", async () => {
    await cartPage.verifyCartDisplay("Shopping Cart");
  });

  await test.step("7. Click Proceed To Checkout", async () => {
    await cartPage.clickProceedCheckOutBtn();
  });
 
  await test.step("8. Click 'Register / Login' butto", async () => {
    await cartPage.clickRegisterLoginBtn();
  });

  await test.step("9. Fill all details in Signup and create account", async () => {
    // register page
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;

    await registerPage.enterUserId(firstName);
    await registerPage.enterEmail(randomEmail); // create random string 
    await registerPage.clickSubmitBtn();

    // Fill in account info
    await registerPage.clickRdoGenderMale();
    await registerPage.enterPassword(passWord);
    await registerPage.selectValueDay(dayDOB, monthDOB, yearDOB);
    await registerPage.clickRdoGenderMale();

    await registerPage.enterAddressInformation(firstName, lastName, company, address1, address2,
                                              country, state, city, zipCode, phoneNumber);

    await registerPage.clickCreateAccountBtn();  
  });  
   
  await test.step("10. Verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {  
    await registerPage.clickContinueBtn();
  });  

  await test.step("12.Click 'Cart' button", async () => {  
    await homePage.clickbBtnCartPage();
  });  

  await test.step("13. Click 'Proceed To Checkout' button", async () => {
    await cartPage.clickProceedCheckOutBtn();
  });


  await test.step("14. Verify Address Details and Review Your Order", async () => {
    const fullName = firstName.concat(" ", lastName);
    await checkoutPage.verifyDeliveryAddress(fullName, address1, country, phoneNumber);
  });
 

  await test.step("15. Enter description in comment text area and click 'Place Order'", async () => {
    await checkoutPage.enterTxtDescriptionComment("abcdefgh");
    await checkoutPage.clickBtnPlaceOrder();
  });


  await test.step("16. Enter payment details", async () => { 
    await checkoutPage.enterTxtNameCard(txtNameCard);
    await checkoutPage.enterTxtCardNumber(txtCardNumber);
    await checkoutPage.enterTxtCVC(txtTxtCVC);
    await checkoutPage.enterTxtExMonth(txtExMonth);
    await checkoutPage.enterTxtExYear(txtExYear); 
  });
        
  await test.step("17. Click 'Pay and Confirm Order' button", async () => {
    checkoutPage.clickBtnPaySubmit();
  });        
 
  await test.step("19. Click 'Delete Account' button", async () => {
    await homePage.clickDelBtn();
  });        
  
  await test.step("20. Verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {
    await homePage.clickContinueDeleteBtn();
  });
  
});



