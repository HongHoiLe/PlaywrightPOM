import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/);
});



// la 1 TC
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/'); // open 1 web

//   // Click the get started link. - locator
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   // java (assert) - playwright (expect)
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
