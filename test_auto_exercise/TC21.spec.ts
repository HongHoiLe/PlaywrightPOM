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
 
test('Test Case 21: Add review on product', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("3. Click on 'Products' button", async () => { 
    await homePage.scrollToSubcription();
  });

  await test.step("4. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
    await homePage.verifyTextRecommend("recommended items");
  });  

  await test.step("5. Click on 'View Product' button", async () => {   
    await homePage.addRecommnedProduct(); 
  });  
  
  await test.step("6. Verify 'Write Your Review' is visible", async () => {  
    await homePage.clickBtnViewCart();
  });  
    
  await test.step("7. Enter name, email and review", async () => {  
    
  });  

  await test.step("8. Click 'Submit' button", async () => {  
    
  });  
  await test.step("9. Verify success message 'Thank you for your review.'", async () => {  
    
  });  
});



