import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);

  await page.goto('https://automationexercise.com/');
});
 
test('Test Case 5: Register User with existing email', async ({ page }) => {  
  const emailLogin: string = "khoalnv83@gmail.com";
  const passLogin: string = "123";

  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
  
  await test.step("4. Click 'Register / Login' button", async () => {
    await homePage.clickLoginSignUpBtn();
  });

  await test.step("5. Verify 'New User Signup!' is visible", async () => {
    await homePage.clickLoginSignUpBtn();
  });

  await test.step("6. Enter name and already registered email address", async () => { 
    await registerPage.enterLoginInfo(emailLogin, passLogin); 
  });   

  await test.step("7. Click 'Signup' button", async () => {  
    await registerPage.clickSubmitLoginBtn(); 
  });   

  await test.step("8. Verify error 'Email Address already exist!' is visible", async () => {   
    await homePage.verifyLoginAsUserName("Logged in as", "khoa");
  });   
 
});



// la 1 TC
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/'); // open 1 web

//   // Click the get started link. - locator
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   // java (assert) - playwright (expect)
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
