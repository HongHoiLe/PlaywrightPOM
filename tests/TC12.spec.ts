import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { ProductPage } from '../pages';
import { CartPage } from '../pages';
import { ProductPageDetail } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;
let productPage: ProductPage;
let productPageDetail: ProductPageDetail;
let cartPage: CartPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  productPage = new ProductPage(page);
  productPageDetail = new ProductPageDetail(page);
    cartPage = new CartPage(page);

});
 
test('Test Case 12: Add Products in Cart', async ({ page }) => {
  // data  
  const searchKeyWord: string = "Green";
  const emailLogin: string = "khoalnv83@gmail.com";
  const passLogin: string = "123";

  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  await test.step("4. Click on 'Products' button", async () => {
    await homePage.clickBtnProductPage(); 
  });

  await test.step("5. Hover over first product and click 'Add to cart'", async () => {
    await productPage.clickBtnAddFirstProduct(); 
  });

  await test.step("6. Click 'Continue Shopping' button", async () => { 
    await productPage.clickBtnContinueShop();
  });
     
  await test.step("7. Hover over second product and click 'Add to cart'", async () => {
    await productPage.clickBtnAddSecondProduct(); 
  });

  await test.step("8. Click 'View Cart' button", async () => {
    await productPage.clickBtnViewCart();
  });  
   
  await test.step("9. Verify both products are added to Cart", async () => { 
    await cartPage.getProductListCartInfo();
  }); 

  // await test.step("10. Verify their prices, quantity and total price", async () => { 
  // }); 
 
});



