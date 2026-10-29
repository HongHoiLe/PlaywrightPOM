import { test } from '@playwright/test';
import { TikiHomePage } from '../pages';

let tikiPage: TikiHomePage;


test.beforeEach(async ({ page }) => {
    tikiPage = new TikiHomePage(page);
  await tikiPage.goto();
});


test.describe('TC2', () => {
  test('Thuc hien test case 2', async () => {
    await test.step('Step 2 - Click vào menu ô tô - xe máy - xe đạp', async () => {
      await tikiPage.closeAds();
      await tikiPage.clickCategoryItem();
    });

    await test.step('Step 3 - Click chọn xe máy', async () => {
        await tikiPage.clickCategoryMotorbike();
    });

    await test.step('Step 4 - Click chọn xe tay ga', async () => {
        await tikiPage.clickCategoryScooter();
    });

    await test.step('Step 5 -Get text tên mẫu xe và giá của tất cả các sản phẩm sau đó in ra màn hình', async () => {
        await tikiPage.getProduct();
    })
    });
  });
