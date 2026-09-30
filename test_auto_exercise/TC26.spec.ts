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
 
test('Test Case 26: Verify Scroll Up without "Arrow" button and Scroll Down functionality', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Scroll down page to bottom", async () => {
    // await homePage.scrollToBottom();
    await homePage.scrollToSubcription();
  });

  await test.step("5. Verify 'SUBSCRIPTION' is visible", async () => {
    await homePage.expectTextSubcription("Subscription");
  });  

  await test.step("6. Scroll up page to top", async () => {  
    // await homePage.scrollToTop();
    await homePage.scrollToLogo();
  });  
  
  await test.step("7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen", async () => {  
    await homePage.expectTextTitleAuto("Full-Fledged practice website for Automation Engineers");
  });  
    

});



