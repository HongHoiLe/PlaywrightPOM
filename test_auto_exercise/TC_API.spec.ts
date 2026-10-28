import { test, expect } from '@playwright/test';
import { BasePage, HomePage } from '../pages';
import { RegisterPage } from '../pages'; 

// https://reqres.in/

// test.beforeEach(async ({ page }) => {  
//   // await page.goto('https://automationexercise.com/');
// });
 
test('API ReqRes: create user', async ({ request }) => { 
  let basePage = new (class extends BasePage {})(null as any);

  await basePage.getUserList();
  console.log("================================================");
  let userId1 = "7";
  let userName1 = await basePage.getUserName(userId1); 
  console.log("Get userName of user "+userId1)
  console.log("userName: "+userName1);

  // await basePage.deleteUser(userId1);


  console.log("================================================");
  // let userId2 = await basePage.createUser("Paul McCartney", "musician"); 
  // console.log("1. Add user - id: "+userId2);

  // let userName2 = await basePage.getUserName(userId2); 
  // console.log("2. Get userName of user "+userId2)
  // console.log("userName2: "+userName2);

  
  
 
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