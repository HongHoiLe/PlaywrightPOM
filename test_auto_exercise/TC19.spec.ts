import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { ProductPage } from '../pages';
import { ProductPageDetail } from '../pages';
import { CartPage } from '../pages';
import { CheckoutPage } from '../pages';
import { CategoryPage } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;
let productPage: ProductPage;
let productPageDetail: ProductPageDetail;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let categoryPage: CategoryPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  productPage = new ProductPage(page);
  productPageDetail = new ProductPageDetail(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  categoryPage = new CategoryPage(page);
});
 
test('Test Case 19: View & Cart Brand Products', async ({ page }) => {
  const randomSubCategoryWomen = Math.floor(Math.random() * 3) + 1;
  const randomSubCategoryMen = Math.floor(Math.random() * 2) + 1;
  
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("3. Click on 'Products' button", async () => {
    await homePage.clickBtnProductPage();
  });

  await test.step("4. Verify that Brands are visible on left side bar", async () => {
    await categoryPage.verifyTextBrand();
  });

  await test.step("5. Click on any brand name", async () => { 
  });

  await test.step("6. Verify that user is navigated to brand page and brand products are displayed", async () => { 
  });

  await test.step("7. On left side bar, click on any other brand link", async () => { 
  });

  await test.step("8. Verify that user is navigated to that brand page and can see products", async () => { 
  });


}); 