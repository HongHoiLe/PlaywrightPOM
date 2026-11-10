import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Test case 6', () => {
    test('Test case 6: Contact Us Form', async ({ page }) => {
        const homePage = new HomePage(page);

        const contactUsLink = page.locator("//a[@href='/contact_us']");
        const getInTouchTitle = page.locator("//h2[normalize-space()='Get In Touch']");
        const nameInput = page.locator('input[name="name"][data-qa="name"]');
        const emailInput = page.locator('input[name="email"][data-qa="email"]');
        const subjectInput = page.locator('input[name="subject"][data-qa="subject"]');
        const messageInput = page.locator('textarea[name="message"][data-qa="message"]');
        const uploadInput = page.locator('input[name="upload_file"]');
        const submitButton = page.locator('input[data-qa="submit-button"][name="submit"]');
        const successAlert = page.locator('.status.alert.alert-success');
        const homeButton = page.locator('#form-section a.btn.btn-success');

        await test.step('Home page is visible', async () => {
            await homePage.goto();
            await homePage.expectLogoHomePageVisible();
        });

        await test.step('Navigate to Contact Us page', async () => {
            await contactUsLink.click();
            await expect(page).toHaveURL(/\/contact_us$/);
        });

        await test.step('Verify Contact Us form is visible', async () => {
            await expect(getInTouchTitle).toBeVisible();
        });

        await test.step('Fill and submit the contact form', async () => {
            const uploadFile = {
                name: 'test-file.txt',
                mimeType: 'text/plain',
                buffer: Buffer.from('This is a sample upload file for Contact Us form test.')
            };

            await nameInput.fill('Automation Tester');
            await emailInput.fill(`automation-${Date.now()}@example.com`);
            await subjectInput.fill('Test automation feedback');
            await messageInput.fill('This is a test message for the Contact Us form.');

            await uploadInput.setInputFiles(uploadFile);
            await expect.poll(async () => {
                return await uploadInput.evaluate((element: HTMLInputElement) => element.files?.length ?? 0);
            }).toBe(1);

            await submitButton.click();
        });

        await test.step('Verify success message and return to home page', async () => {
            await expect(successAlert).toBeVisible();
            await expect(successAlert).toContainText('Success! Your details have been submitted successfully.');
            await homeButton.click();
            await expect(page).toHaveURL(/automationexercise\.com\/?$/);
        });
    });
});
