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
 
test('Test Case 22: Add to cart from Recommended items', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("3. Scroll to bottom of page", async () => { 
    await homePage.scrollToSubcription();
  });

  await test.step("4. Verify 'RECOMMENDED ITEMS' are visible", async () => {
    await homePage.verifyTextRecommend("recommended items");
  });  

  await test.step("5. Click on 'Add To Cart' on Recommended product", async () => {   
    await homePage.addRecommnedProduct(); 
  });  
  
  await test.step("6. Click on 'View Cart' button", async () => {  
    await homePage.clickBtnViewCart();
  });  
    
  await test.step("7. Verify that product is displayed in cart page", async () => {  
    
  });  

});



