import { test, expect } from '@playwright/test';
import { HomePage } from '../page_tiki';
import { ProductPage } from '../page_tiki';

let homePage: HomePage;
let productPage: ProductPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
 
});
 
// npx playwright test TC_Tiki.spec.ts --headed
test('mua hang tiki', async ({ page }) => {
  let productPrice: string = "";

  await test.step("1. Truy cap https://tiki.vn/", async () => {
    await page.goto('https://tiki.vn/'); 
  }); 

  await test.step("2. Click vao button Close de tat quang cao", async () => {
    await homePage.clickBtnDelAd();
  }); 
  
  await test.step("3. Tim kiem san pham Iphone 18 promax", async () => {
    await homePage.enterSearchProduct("Apple iPhone 18 Pro Max");
  }); 

  await test.step("4. Click vao san pham dau tien trong ket qua tim kiem", async () => {
    await homePage.clickBtnFirstProduct();
  }); 
 
  
  await test.step("5. Verify gia san pham (256GB)", async () => {
    await productPage.verifyProductPrice();
    console.log("5.Price at 256GB: ");
    productPrice = await productPage.getProductPrice();
  }); 

  await test.step("6. Click chon dung luong 1 TB", async () => {
    await productPage.clickBtnProductSize();
  }); 

  // await test.step("7. chon mau do", async () => {
  //   await productPage.clickBtnProductColorRed();
  // }); 

  await test.step("8 so sanh gia san pham so voi gia o buoc 6", async () => {
    //await page.pause();
    await productPage.copareProductPrice(productPrice);
  }); 

  await test.step("9. Click button them vao gio hang", async () => {
    await productPage.clickBtnAddToCart();
  }); 

  await test.step("10. Verify popup dang nhap hoac dang ky xuat hien", async () => {
    await productPage.verifyPopupVisible("Đăng nhập hoặc Tạo tài khoản");
  }); 

  await test.step("11. Click button Mua ngay", async () => { 
    await productPage.clickCloseSignInPopup();
    await productPage.clickBtnBuyProductNow(); 
  }); 

  await test.step("12 Verify pop up dang nhap hoac dang ky xuat hien", async () => {
    await productPage.verifyPopupVisible("Đăng nhập hoặc Tạo tài khoản");
  }); 
});

 // 