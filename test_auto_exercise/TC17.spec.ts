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
 
test('Test Case 17: Remove Products From Cart', async ({ page }) => {
  // data  
  const searchKeyWord: string = "Green";
  const emailLogin: string = "khoalnv83@gmail.com";
  const passLogin: string = "123";

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
    await cartPage.verifyCartDisplay();
  });
     
  await test.step("7. Click 'X' button corresponding to particular product", async () => { 
    await cartPage.deleteFirstProduct();
  });

  await test.step("8. Verify that product is removed from the cart", async () => { 
    await cartPage.verifyCartEmpty();
  });   

  // await test.step("10. Verify their prices, quantity and total price", async () => { 
  // }); 
  // test
 
});



