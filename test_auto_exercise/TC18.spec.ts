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
 
test('Test Case 18: View Category Products', async ({ page }) => {
  const randomSubCategoryWomen = Math.floor(Math.random() * 3) + 1;
  const randomSubCategoryMen = Math.floor(Math.random() * 2) + 1;
  
  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("3. Verify that categories are visible on left side bar", async () => {
    await categoryPage.checkCategoryVisible();
  });

  await test.step("4. Click on 'Women' category", async () => {
    await categoryPage.clickBtnCategoryWomen();
  });

  await test.step("5. Click on any category link under 'Women' category, for example: Dress", async () => {
    console.log("5.randomSubCategoryWomen:", randomSubCategoryWomen);
    await categoryPage.clickBtnSubCategoryWomen(randomSubCategoryWomen);
  });

  await test.step("6. Verify that category page is displayed and confirm text 'WOMEN - _ PRODUCTS'", async () => {
    console.log("6.randomSubCategoryWomen:", randomSubCategoryWomen);
    await categoryPage.verifyTitleCategoryWomen(randomSubCategoryWomen);
  });

  await test.step("7. On left side bar, click on any sub-category link of 'Men' category", async () => {
    await categoryPage.clickBtnCategoryMen();
    await categoryPage.clickBtnSubCategoryMen(randomSubCategoryMen);
  });

  await test.step("8. Verify that user is navigated to that category page", async () => {
    await categoryPage.verifyTitleCategoryMen(randomSubCategoryMen);
  });


}); 