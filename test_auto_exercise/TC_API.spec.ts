import { test, expect } from '@playwright/test';
import { BasePage, HomePage } from '../pages';
import { RegisterPage } from '../pages';
 


// test.beforeEach(async ({ page }) => {  
//   // await page.goto('https://automationexercise.com/');
// });

// https://reqres.in/
 
test('API ReqRes: create user', async ({ request }) => { 
  let basePage = new (class extends BasePage {})(null as any);
  let userId = await basePage.createUser("Paul McCartney", "musician"); 
  console.log("userId: "+userId);

  let userName = await basePage.getUserName('12'); 
  console.log("- userName: "+userName);

  // await basePage.deleteUser('2');

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