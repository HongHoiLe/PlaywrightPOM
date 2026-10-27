import { test, expect } from '@playwright/test';
import { BasePage, HomePage } from '../pages';
import { RegisterPage } from '../pages';
 


// test.beforeEach(async ({ page }) => {  
//   // await page.goto('https://automationexercise.com/');
// });

// https://reqres.in/
 
test('API ReqRes: create user', async ({ request }) => { 
  let basePage = new (class extends BasePage {})(null as any);
  let userId1 = await basePage.createUser("Paul McCartney", "musician");
  console.log("1. Add new user:"); 
  console.log("User added - userId1: "+userId1);

  let userName = await basePage.getUserName(userId1); 
  console.log("2. Get userName of user "+userId1)
  console.log("userName: "+userName);

  // await basePage.deleteUser('2');

  await basePage.getUserNameAPI();
  // console.log(responseBody);
  // expect(responseBody.name).toBe("Paul");
  // expect(responseBody.job).toBe("musician");
  // expect(responseBody.id).toBeTruthy();
  // expect(responseBody.createdAt).toBeTruthy();
 
});
 

// test('API TC', async ({ request }) => { 
//   const response = await request.get(
//     "https://automationexercise.com/api/productsList"
//   );

//   expect(response.status()).toBe(200);

//   const responseBody = await response.json();
//   console.log(responseBody);
//   // expect(responseBody.responseCode).toBe(200);
 
// });