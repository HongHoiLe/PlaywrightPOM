import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';
import { ProductPage } from '../pages';
import { CartPage } from '../pages';
import { ProductPageDetail } from '../pages';

let homePage: HomePage;
let registerPage: RegisterPage;
let productPage: ProductPage;
let productPageDetail: ProductPageDetail;
let cartPage: CartPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  productPage = new ProductPage(page);
  productPageDetail = new ProductPageDetail(page);
    cartPage = new CartPage(page);

});
 
test('Test Case 20: Search Products and Verify Cart After Login', async ({ page }) => {
  // data  
  const searchKeyWord: string = "Green";
  const emailLogin: string = "khoalnv83@gmail.com";
  const passLogin: string = "123";

  await test.step("Launch browser", async () => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  await test.step("3. Click on 'Products' button", async () => {
    await homePage.clickBtnProductPage(); 
  });

  await test.step("4. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
    await homePage.clickBtnProductPage();
    await productPage.checkURL();
  });

  await test.step("5. Enter product name in search input and click search button", async () => {
    await productPage.enterSearchProduct(searchKeyWord);
    await productPage.clickBtnSearchSubmit();
  });
    
  await test.step("6. Verify 'SEARCHED PRODUCTS' is visible", async () => { 
    await productPage.verifyTextCenter("Searched Products");
  });
  
  await test.step("7. Verify all the products related to search are visible", async () => {
    await productPage.checkProductSearchResult(searchKeyWord);
  });

  await test.step("8. Add those products to cart", async () => {
    await productPage.addAllCurrentProductToCart();
  });  
   
  await test.step("9. Click 'Cart' button and verify that products are visible in cart", async () => {
    await homePage.clickbBtnCartPage(); 
    await cartPage.verifyCartDisplay("Shopping Cart");
  }); 

  await test.step("10. Click 'Signup / Login' button and submit login details", async () => {
    await homePage.clickLoginSignUpBtn();  
    await registerPage.enterLoginInfo(emailLogin, passLogin);
    await registerPage.clickSubmitLoginBtn();
  }); 

  
  await test.step("11. Again, go to Cart page", async () => {
    await homePage.clickbBtnCartPage();  
  }); 

  await test.step("12. Verify that those products are visible in cart after login as well", async () => {
    await cartPage.checkProductListCart(searchKeyWord);
  }); 
});



