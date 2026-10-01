import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.goto();
});
test.describe('Test case 26', () => {
    test.only('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', async() => {

        //Step 3
        await test.step('Home page is visible', async() => {
            await homePage.expectLogoHomePageVisible();
        });

        //Step 4
        await test.step('Scroll down page to bottom', async() => {
            await homePage.scrollToBottom();
        });

        //Step 5
        await test.step('Verify SUBSCRIPTION is visible', async() => {
            await homePage.expectSubcriptionTxtcontains();
        });

        //Step 6
        await test.step('Scroll up page to top', async() => {
            await homePage.scrollToTop();
        });

        //Step 7
        await test.step('Verify that page is scrolled up and Full-Fledged practice website for Automation Engineers text is visible on screen', async() => {
            await homePage.expectTopTextVisible();
        });
    });
});