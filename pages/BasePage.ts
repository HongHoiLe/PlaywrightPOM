import { expect, Page, request } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getUserName(): Promise<string> {
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.post("https://reqres.in/api/users",{
      data:{
        name: "Paul",
        job: "musician"
      },
      headers:{
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    return responseBody.name;
  }
}
