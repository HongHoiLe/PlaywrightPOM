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

  async createUser(userName: string, userJob: string): Promise<string> {
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.post("https://reqres.in/api/users",{
      data:{
        name: userName,
        job: userJob
      },
      headers:{
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json(); 
    return responseBody.id;
  }
  
  async getUserName(userId: string): Promise<string> {
    const API_url = "https://reqres.in/api/users/"+userId;
    console.log("API_url: "+API_url);
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.get(API_url);
    console.log("getUserName status:", response.status());

    const responseBody = await response.json(); 
    console.log(responseBody);
    console.log(responseBody.data.first_name);

    //expect(response.status()).toBe(200);
    return responseBody.data.first_name;
  }
  
  async deleteUser(userId: string): Promise<void> {
    const API_url = "https://reqres.in/api/users/"+userId;
    console.log("API_url: "+API_url);
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.delete(API_url);
 
    console.log("Delete status:", response.status()); 

    // expect(response.status()).toBe(201);
    // console.log(responseBody.data.first_name);
    // return responseBody.data.first_name;
  }
}
