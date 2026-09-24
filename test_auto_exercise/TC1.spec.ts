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
 
test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/);

  await homePage.clickLoginSignUpBtn();
  await homePage.expectText("New User Signup!");


  // register page
  await registerPage.enterUserId("abc");
  await registerPage.enterEmail("abcd@auto.com");

  await registerPage.clickSubmitBtn();

  await registerPage.clickRdoGenderMale();
  await registerPage.enterPassword("password");
  await registerPage.selectValueDay("10","12","2005");
  await registerPage.clickRdoGenderMale();

  await registerPage.enterAddressInformation(
    "Khoa", "Nguyen", "ABC Company", "123 Street", "Apartment 2",
    "Canada", "Ontario", "Toronto", "12345", "0123456789");

  await registerPage.clickCreateAccountBtn();

  await registerPage.clickContinueBtn();


  await homePage.clickDelBtn();
  await homePage.clickContinueDeleteBtn();

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
