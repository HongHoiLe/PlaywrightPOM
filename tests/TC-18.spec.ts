import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

  let homePage: HomePage;
  let productPage: ProductPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);

    await homePage.goto();
});

test.describe('Test case 18', () => {
    test('Test Case 18: View Category Products', async () => {
        
        const categoryWomen = 'Dress';
        const categoryMen = 'Tshirts';
        
        // Step 3
        await test.step('Verify that categories are visible on left side bar', async () => {
            await homePage.expectCategorySideBarVisible();
        });

        // Step 4
        await test.step('Click on Women category', async () => {
            await homePage.clickCategoryWomen();
        });

        // Step 5
        await test.step('Click on any category link under Women category', async () => {
            await homePage.clickSubCategoryWomen(categoryWomen);
        });

        // Step 6
        await test.step('Verify that category page is displayed and confirm text', async() => {
            await productPage.expectWomenCategoryNamePagecontain(categoryWomen);
        });

        //Step 7
        await test.step('click on any sub-category link of Men category', async () => {
            await productPage.clickCategoryMen();
            await productPage.clickSubCategoryMen(categoryMen);
        });

        // Step 8
        await test.step('Verify that user is navigated to that category page', async () => {
            await productPage.expectMenCategoryNamePagecontain(categoryMen);
        });
    });
});