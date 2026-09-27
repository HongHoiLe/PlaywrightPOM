import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

  let homePage: HomePage;
  let productPage: ProductPage;
  let productDetailPage: ProductDetailPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    productDetailPage = new ProductDetailPage(page);

    await homePage.goto();
});

test.describe('Test case 8', () => {
    test.only('Test case 8: Verify all producr and product detail page', async () => {
        // Step 3
        await test.step('Home page visible', async () => {
            await homePage.expectLogoHomePageVisible();
        });

        // Step 4
        await test.step('Click product button', async () => {
            await homePage.clickProductPagebtn();
        });

        // Step 5
        await test.step('All Product page is visible', async () => {
            await productPage.expectAllProducttxtVisible();
        });

        // Step 6
        await test.step('Product list is visible', async () => {
            await productPage.expectProductsListVisible();
        });

        // Step 7
        await test.step('View first product', async () => {
            await productPage.clickViewProductFirstItem();
        });

        // Step 9
        await test.step('Product detail is visible', async () => {
            await productDetailPage.expectProductNameDetailVisible();
            await productDetailPage.expectCategoryDetailVisible();
            await productDetailPage.expectAvailabilityDetailVisible();
            await productDetailPage.expectConditionDetailVisible();
            await productDetailPage.expectBrandDetailVisible();
        });
    });
});