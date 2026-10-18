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
 
test('Test Case 11: Verify Subscription in Cart page', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Click 'Cart' button", async () => {
    // await homePage.scrollToBottom();
    await homePage.scrollToSubcription();
  });

  await test.step("5. Scroll down to footer", async () => {
    await homePage.expectTextSubcription("Subscription");
  });  

  await test.step("6. Verify text 'SUBSCRIPTION'", async () => {   
    await homePage.clickBtnScrollUpArrow(); 
  });  
  
  await test.step("7. Enter email address in input and click arrow button", async () => {   

  });  
    
  await test.step("8. Verify success message 'You have been successfully subscribed!' is visible", async () => {  
     
  });  

});



