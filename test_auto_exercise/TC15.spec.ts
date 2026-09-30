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
 
test('TC15: Place Order: Register before Checkout', async ({ page }) => {
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
  const txtReviewComment: string = "comment";
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Click 'Register / Login' button", async () => {
    await homePage.clickLoginSignUpBtn();
  });

  await test.step("5. Fill all details in Signup and create account", async () => {
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

  await test.step("6. Verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {  
    await registerPage.clickContinueBtn();
  });  
  
  await test.step("7. Verify ' Logged in as username' at top", async () => {  
    await homePage.verifyLoginAsText("Logged in as");
  });  
   
  await test.step("8. Add products to cart", async () => {
    await homePage.clickBtnAddFirstProduct();
    await homePage.clickBtnContinueShop();
  });
 
  await test.step("9. Click 'Cart' button", async () => {
    await homePage.clickbBtnCartPage();
  }); 

  await test.step("10. Verify that cart page is displayed", async () => {
    await cartPage.verifyCartDisplay("Shopping Cart");
  });

  await test.step("11. Click Proceed To Checkout", async () => {
    await cartPage.clickProceedCheckOutBtn();
  });
  
  await test.step("12. Verify Address Details and Review Your Order", async () => {
    const fullName = firstName.concat(" ", lastName);
    await checkoutPage.verifyDeliveryAddress(fullName, address1, country, phoneNumber);
  });
  
  await test.step("13. Enter description in comment text area and click 'Place Order'", async () => {
    await checkoutPage.enterTxtDescriptionComment(txtReviewComment);
    await checkoutPage.clickBtnPlaceOrder();
  });


  await test.step("14. Enter payment details", async () => {  
    await checkoutPage.fillInPaymentDetail(txtNameCard, txtCardNumber, txtTxtCVC, txtExMonth, txtExYear);
  });
        
  await test.step("15. Click 'Pay and Confirm Order' button", async () => {
    checkoutPage.clickBtnPaySubmit();
  });        
 
  await test.step("16. Verify success message 'Your order has been placed successfully!'", async () => {
    await checkoutPage.verifyOrderSuccess("Your order has been confirmed!");
  });    
 
  await test.step("17. Click 'Delete Account' button", async () => {
    await homePage.clickDelBtn();
  });        
  
  await test.step("18. Verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {
    await homePage.verifyDeleteText("Account Deleted");
    await homePage.clickContinueDeleteBtn(); 
  });
  
});



