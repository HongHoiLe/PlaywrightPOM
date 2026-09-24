import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PlaywrightHomePage extends BasePage {
  readonly url = 'https://playwright.dev/';
  
  // Locators
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
    // await this.page.locator("//input [@name = 'Login']").fill('abc');
  }

  async expectTitleToContainPlaywright(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async expectInstallationHeadingVisible(): Promise<void> {
    await expect(this.installationHeading).toBeVisible();
  }
}
