import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Test case 7', () => {
    test('Verify Test Cases page', async ({ page }) => {
        const homePage = new HomePage(page);

        await test.step('Verify the home page is visible', async () => {
            await homePage.goto();
            await homePage.expectLogoHomePageVisible();
        });

        await test.step('Navigate to the Test Cases page', async () => {
            await homePage.clickTestCasesPagebtn();
            await expect(page).toHaveURL(/\/test_cases$/);
        });

        await test.step('Verify the Test Cases page and Test Case 7 are displayed', async () => {
            await expect(page.locator("//h2[normalize-space()='Test Cases']")).toBeVisible();
            await expect(page.locator(
                "//h4/child::a[@href='#collapse7' and normalize-space()='Test Case 7: Verify Test Cases Page']",
            )).toBeVisible();
        });
    });
});
