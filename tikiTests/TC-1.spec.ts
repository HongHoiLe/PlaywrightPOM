import { test, expect } from '@playwright/test';
import { HomePage } from '../tikiPages/HomePage';
import { ProductPage } from '../tikiPages/ProductPage';
import { ProductDetailPage } from '../tikiPages/ProductDetailPage';

    let homePage: HomePage;
    let productPage: ProductPage;
    let productDetailPage: ProductDetailPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    productDetailPage = new ProductDetailPage(page);

    await homePage.goto();
});

test.describe('Test case 1', () => {
    test.only('Test case 1', async () => {
        const item = "Iphone 18 promax";

        await test.step('Click vao button Close de tat quang cao', async() => {
            await homePage.clickCloseBtn();
        });

        await test.step('Tim san pham', async() => {
            await homePage.fillSearchBox(item);
        });

        await test.step('Click vao san pham dau tien trong ket qua tim kiem', async() => {
            await productPage.clickFirstProduct();
        });

        await test.step('Click 1TB', async() => {
            await productDetailPage.clickStorageFirstOption();
        });

        let priceBefore: number;
        let priceAfter: number;

        await test.step('Verify gia san pham luc dau', async() => {
            priceBefore = await productDetailPage.getPrice1tbOption();
        });

        await test.step('Chon mau do', async() => {
            await productDetailPage.clickColorSecondOption();
        });

        await test.step('Verify gia san pham luc sau', async() => {
            priceAfter = await productDetailPage.getPrice1tbOption();
        });

        await test.step('So sanh gia san pham truoc va sau khi chon mau', async() => {
            expect(priceBefore).toEqual(priceAfter);
        });

        await test.step('Click button them vao gio hang', async() => {
            await productDetailPage.clickAddToCartBtn();
        });

        await test.step('Verify popup', async() => {
            await productDetailPage.expectRegisterPopupVisible();
        });

        await test.step('Click button mua ngay', async() => {
            await productDetailPage.clickBuyNowBtn();
        });

        await test.step('Verify popup', async() => {
            await productDetailPage.expectRegisterPopupVisible();
        });
    });
});