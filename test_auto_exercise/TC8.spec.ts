import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { ProductPage } from '../pages';
import { ProductPageDetail } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;
let productPage: ProductPage;
let productPageDetail: ProductPageDetail;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  productPage = new ProductPage(page);
  productPageDetail = new ProductPageDetail(page);

});
 
test('TC8: Verify All Products and product detail page', async ({ page }) => {
     
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  await test.step("4. Click on Products button", async () => {
    await homePage.clickBtnProductPage();
  });

  await test.step("5. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
    await productPage.checkURL();
  });
    
  await test.step("6. The products list is visible", async () => {
    await productPage.checkTitleVisible();
  });
  
  await test.step("7. Click on 'View Product' of first product", async () => {
    await productPage.clickbtnViewFirstProduct();
  });

  await test.step("9. Verify that detail detail is visible", async () => {
    await productPageDetail.verifyProductDetail();
  });  
   
  

});



