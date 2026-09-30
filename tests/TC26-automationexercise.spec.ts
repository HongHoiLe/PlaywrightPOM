import { test } from '@playwright/test';
import { HomePage } from '../pages';

let goHomePage: HomePage;


test.beforeEach(async ({ page }) => {
    goHomePage = new HomePage(page);
  await goHomePage.goto();
});
test.describe('TC26', () => {
    test('Verify Scroll Up without Arrow button and Scroll Down functionality', async () => {
      await test.step('Step 3 - Verify that home page is visible successfully', async () => {
        await goHomePage.expectHomePageVisible();
      });
  
      await test.step('Step 4 + 5 - Scroll down page to bottom and Verify SUBSCRIPTION is visible', async () => {
          await goHomePage.scrollToBottomAndVerifytxtSubscriptionisVisible();
      });
  
      await test.step('Step 6 + 7 -Scroll up page to top and Verify that page is scrolled up and Full-Fledged practice website for Automation Engineers text is visible on screen ', async () => {
          await goHomePage.scrollToTopAndVerifytxtFullFledgedpracticewebsiteforAutomationEngineersVisible();
    
      });
    });
})
      