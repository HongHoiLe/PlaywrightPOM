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
 
test('Test Case 9: Search Product', async ({ page }) => {
  // data  
  const searchKeyWord: string = "Green";

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
    
  await test.step("6. Enter product name in search input and click search button", async () => {
    await productPage.enterSearchProduct(searchKeyWord);
    await productPage.clickBtnSearchSubmit();
  });
  
  await test.step("7. Verify 'SEARCHED PRODUCTS' is visible", async () => {
    await productPage.verifyTextCenter("Searched Products");
  });

  await test.step("8. Verify all the products related to search are visible", async () => {
    await productPage.checkProductSearchResult(searchKeyWord);
  });  
   
  

});



