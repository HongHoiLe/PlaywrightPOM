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
 
test('Test Case 10: Verify Subscription in home page', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
    
  await test.step("4. Scroll down to footer", async () => {
    await homePage.scrollToBottom(); 
  });  

  await test.step("5. Verify text 'SUBSCRIPTION'", async () => {   
    await homePage.expectTextSubcription("Subscription"); 
  });  
  
  await test.step("6. Enter email address in input and click arrow button", async () => {   
    await homePage.addSubEmail("sub@gmail.com"); 
  });  
    
  await test.step("7. Verify success message 'You have been successfully subscribed!' is visible", async () => {  
    await homePage.verifySucessSubEmailMsg();
  });  

});



