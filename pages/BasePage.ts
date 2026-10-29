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
    await this.page.waitForLoadState('networkidle');
    await this.page.locator("//button[@id='login']").waitFor({ state: 'visible', timeout: 5000 });
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
  
  async getUserList(): Promise<void> {
    const API_url = "https://reqres.in/api/users?page=2";
    console.log("API_url: "+API_url);
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.get(API_url);
    console.log("Status:", response.status());

    const responseBody = await response.json(); 
    console.log(responseBody);
    // console.log(responseBody.data.first_name);

    expect(response.status()).toBe(200);
    // return responseBody.data.first_name;
  }

  async getUserName(userId: string): Promise<string> {
    const API_url = "https://reqres.in/api/users/"+userId;
    console.log("API_url: "+API_url);
    const apiRequest = await request.newContext(); 
    const response = await apiRequest.get(API_url);
    console.log("Status:", response.status());

    const responseBody = await response.json(); 
    // console.log(responseBody);
    // console.log(responseBody.data.first_name);

    expect(response.status()).toBe(200);
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

///////////////////////////////////////////////////////////////////////////////////


  async getUserNameAPI(): Promise<void> {
    const API_url = "https://reqres.in/api/collections/users/records/ae9889c6-32f8-4c7e-b757-4356f92c6bc5?project_id=55268";
    console.log("API_url: "+API_url);
    const apiRequest = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres_074c5f7b77a94320a74f8fc4283dc0cd'
        }
    });
    const response = await apiRequest.get(API_url);
    console.log("Status:", response.status());

    const responseBody = await response.json(); 
    console.log(responseBody); 

    //expect(response.status()).toBe(200);
    // return responseBody.data.first_name;
  }

  async createUserAPI(userName: string, userJob: string): Promise<string> {
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

}






  // api key: reqres_074c5f7b77a94320a74f8fc4283dc0cd
// curl -H "x-api-key: pro_dc38dba98d2cc83e52da9099f62e8f2f66475b9025e44fd5" \
//   https://reqres.in/api/collections/users/records

//https://reqres.in/api/collections/users/records