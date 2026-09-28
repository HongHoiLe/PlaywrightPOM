import { test } from '@playwright/test';
import { HomePage } from '../pages';
import { ProductPage } from '../pages';
import { DetailProductPage } from '../pages';

let goHomePage: HomePage;
let proDuctPage: ProductPage;
let detailProductPage: DetailProductPage;

test.beforeEach(async ({ page }) => {
    goHomePage = new HomePage(page);
    proDuctPage = new ProductPage(page);
    detailProductPage = new DetailProductPage(page);
  await goHomePage.goto();
});


test.describe('TC8', () => {
  test('Verify All Products and product detail page', async () => {
    await test.step('Step 3 - Verify that home page is visible successfully', async () => {
      await goHomePage.expectHomePageVisible();
    });

    await test.step('Step 4 - Click on Products button', async () => {
        await goHomePage.clickProductButton();
    });

    await test.step('Step 5 - Verify user is navigated to ALL PRODUCTS page successfully', async () => {
        await proDuctPage.expectxtAllProductsVisible();
    });

    await test.step('Step 6 - The products list is visible', async () => {
        await proDuctPage.expectxtProductsListVisible();
    });

    await test.step('Step 7 - Click on View Product of first product', async () => {
      await proDuctPage.clickFirstProductItems();
    });
    
    await test.step('Step 8 - User is landed to product detail page', async () => {
      await detailProductPage.verifyProductDetailPageVisible();
    });

    await test.step('Step 9 - Verify that detail detail is visible: product name, category, price, availability, condition, brand', async () => {
      await detailProductPage.verifyProductInformation();
   
    });
    
   
  });
});

