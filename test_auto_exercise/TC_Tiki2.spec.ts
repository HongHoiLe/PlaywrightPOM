import { test, expect } from '@playwright/test';
import { HomePage } from '../page_tiki';
import { ProductPage } from '../page_tiki';

let homePage: HomePage;
let productPage: ProductPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  // a
});
 
// npx playwright test TC_Tiki.spec.ts --headed
test('mua hang tiki 2', async ({ page }) => {
  let productPrice: string = "";

  await test.step("1. Truy cap https://tiki.vn/", async () => {
    await page.goto('https://tiki.vn/'); 
  }); 

  // await test.step("2. Click vao button Close de tat quang cao", async () => {
  //   await homePage.clickBtnDelAd();
  // }); 

  await test.step("2. Click vào menu ô tô - xe máy - xe đạp", async () => {
    await homePage.clickVehicleTab();
  }); 
  
  await test.step("3. Click chọn xe máy", async () => {
    await homePage.clickXeMayTab();
  }); 

  await test.step("4. Click chọn xe tay ga", async () => {
    await homePage.clickXeMayGaTab();
  }); 
 
  
  await test.step("5. Get text tên mẫu xe và giá của tất cả các sản phẩm sau đó in ra màn hình", async () => {
    //allInnerTexts()
  }); 

});

 // 