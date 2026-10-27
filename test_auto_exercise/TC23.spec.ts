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
 
test('Test Case 23: Verify address details in checkout page', async ({ page }) => {
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
  
  let fullName = firstName.concat(" ", lastName);
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Click 'Signup / Login' button", async () => {
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
    await homePage.verifyLoginAsUserName("Logged in as", firstName);
  });
 
  await test.step("8. Add products to cart", async () => { 
    await homePage.clickBtnAddFirstProduct();
    await homePage.clickBtnContinueShop();
  });

  await test.step("9. Click 'Cart' button", async () => { 
    await homePage.clickbBtnCartPage();
  });  
   
  await test.step("10. Verify that cart page is displayed", async () => {  
    await cartPage.verifyCartDisplay();
  });  

  await test.step("11. Click Proceed To Checkout", async () => {  
    await cartPage.clickProceedCheckOutBtn();
  });  

  await test.step("12. Verify that the delivery address is same address filled at the time registration of account", async () => {
    await checkoutPage.verifyDeliveryAddress(fullName, address1, country, phoneNumber);
  });
 
  await test.step("13. Verify that the billing address is same address filled at the time registration of account", async () => {
    await checkoutPage.verifyDeliveryAddressBilling(fullName, address1, country, phoneNumber); 
  });
  
  await test.step("14. Click 'Delete Account' button", async () => { 
    await homePage.clickDelBtn();
  });
 
  await test.step("15. Verify 'ACCOUNT DELETED!' and click 'Continue' button", async () => {  
    await homePage.verifyDeleteText("Account Deleted");
    await homePage.clickContinueDeleteBtn(); 
  }); 
  
});



