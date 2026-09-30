import { test } from '@playwright/test';
import { HomePage } from '../pages';
import { ProductPage } from '../pages';

let goHomePage: HomePage;
let proDuctPage: ProductPage;

test.beforeEach(async ({ page }) => {
    goHomePage = new HomePage(page);
    proDuctPage = new ProductPage(page);
  await goHomePage.goto();
});
test.describe('TC18', () => {
    test('View Category Products', async () => {
      
      await test.step('Step 3 - Verify that categories are visible on left side bar', async () => {
          await goHomePage.txtCategoryisVisible();
      });
  
      await test.step('Step 4 - Click on Women category', async () => {
          await goHomePage.clickWomenCategoryAccordion();
      });
  
      await test.step('Step 5 - Click on any category link under Women category', async () => {
          await goHomePage.clickTopsLink();
      });
  
      await test.step('Step 6 - Verify that category page is displayed and confirm text WOMEN - TOPS PRODUCTS', async () => {
        await proDuctPage.verifyCategoryPageVisible();
        await proDuctPage.expectxtWomenTopsProductVisible();
      });
      
      await test.step('Step 7 -  On left side bar, click on any sub-category link of Men category', async () => {
        await proDuctPage.clickmenCategoryAccordion();
        await proDuctPage.clickTshirtsLink();
      });
      
      await test.step('Step 8 - Verify that user is navigated to that category page', async () => {
        await proDuctPage.expectxtMenTshirtsProduct();
      });
    });
})

