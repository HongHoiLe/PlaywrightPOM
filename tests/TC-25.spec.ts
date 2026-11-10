import { expect, test } from '@playwright/test';

test.describe('Test case 25', () => {
  test('Verify Scroll Up using Arrow button and Scroll Down functionality', async ({ page }) => {
    await page.goto('https://www.automationexercise.com');

    const heroHeading = page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers',
    });
    const subscriptionHeading = page.getByRole('heading', {
      name: 'Subscription',
      exact: true,
    });

    await test.step('Verify that the home page is visible', async () => {
      await expect(heroHeading).toBeVisible();
    });

    await test.step('Scroll down to the bottom and verify Subscription is visible', async () => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await expect(subscriptionHeading).toBeInViewport();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
    });

    await test.step('Click the arrow to scroll up and verify the home page heading', async () => {
      const scrollToTopLink = page.locator('a[href="#top"]');
      await expect(scrollToTopLink).toBeVisible();
      await scrollToTopLink.click();
      await expect(heroHeading).toBeInViewport();
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    });
  });
});