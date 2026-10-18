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
 
test('Test Case 13: Verify Product quantity in Cart', async ({ page }) => { 
   
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
    
  await test.step("4. Click on 'View Product' button", async () => {   
    await productPage.clickBtnViewFirstProduct(); 
  });  
  
  await test.step("5. Verify product detail is opened", async () => {  
    
  });  
    
  await test.step("6. Increase quantity to 4", async () => {   
    await productPageDetail.enterProductQuantity("4");
  });  

  await test.step("7. Click 'Add to cart' button", async () => {  
    await productPageDetail.clickBtnAddProduct();
  });  
  
  await test.step("8. Click 'View Cart' button", async () => {  
    await productPageDetail.clickBtnViewCart();
  });  

  await test.step("9. Verify that product is displayed in cart page with exact quantity", async () => {  
    await cartPage.verifyProductQuantity("4");
  });  
});

 