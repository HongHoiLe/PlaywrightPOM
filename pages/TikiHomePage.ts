import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TikiHomePage extends BasePage {
  readonly url = 'https://tiki.vn/';
  
  // Locators
  readonly btClosePopupAd: Locator;
  readonly tbxSearch: Locator;
  readonly inputItem: Locator;
  readonly clickFistItem: Locator;
  readonly btDeleteAccount: Locator;
  readonly btPRoduct: Locator;
  readonly lsCategory: Locator;
  readonly womenCategoryAccordion: Locator;
  readonly lnkTops: Locator;
  readonly proDuctCard: Locator;
  readonly btAddtocart: Locator;
  readonly btCart: Locator;
  readonly lnkViewCart: Locator;
  readonly txtSubcription: Locator;
  readonly categoryItem: Locator;
  readonly categoryMotorbike: Locator;
  readonly categoryScooter: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  constructor(page: Page) {
    super(page)
    this.btClosePopupAd = page.locator("//picture[@class='webpimg-container']//img[@alt='close-icon']");
    this.tbxSearch = page.locator("//input[@data-view-id='main_search_form_input']");
    this.inputItem = page.locator("//div[@class='keyword' and text()='iphone 18 promax']");
    this.clickFistItem = page.locator("//i[@class='fa fa-user']//parent::a");
    this.btDeleteAccount = page.locator("//a[@href='/delete_account']");
    this.lsCategory = page.locator("//div[@class='left-sidebar']");
    this.womenCategoryAccordion = page.locator("//a[@href='#Women']")
    this.lnkTops = page.locator("//a[@href='/category_products/2']")
    this.btPRoduct = page.locator("//a[@href='/products']");
    this.proDuctCard = page.locator("//img[@src='/get_product_picture/3']")
    //this.btAddtocart = page.locator("//a[@data-product-id='3' and @class='btn btn-default add-to-cart']");
    this.btAddtocart = page.locator("//div[@class='product-overlay']//a[@data-product-id='3']");
    this.lnkViewCart = page.locator("//div[@id='cartModal']//a[@href='/view_cart']");
    this.btCart = page.locator("//div[@class='shop-menu pull-right']//a[@href='/view_cart']");
    this.txtSubcription = page.locator("//h2[text()='Subscription']")
    this.categoryItem = page.locator("//div[@title='Ô Tô - Xe Máy - Xe Đạp']")
    this.categoryMotorbike = page.locator("//div[@class='sc-da08df93-5 ffoKdM' and text()='Xe máy']");
    this.categoryScooter = page.locator("//div[@class='sc-da08df93-5 ffoKdM' and text()='Xe tay ga']");
    this.productName  = page.locator("//a[@data-view-id='product_list_item']//h3");
    this.productPrice = page.locator("//div[@class='price-discount__price']");
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
  
  async closeAds(): Promise<void> {
    await this.btClosePopupAd.click();
  }
  
  async clickCategoryItem(): Promise<void> {
    await this.categoryItem.click();
  }
  async clickCategoryMotorbike(): Promise<void> {
    await this.categoryMotorbike.click();
  }
  async clickCategoryScooter(): Promise<void> {
    await this.categoryScooter.click();
  }
  async getProduct(): Promise<void> {
    const productNames = await this.productName.allInnerTexts();
    console.log(productNames);
    const productPrice = await this.productPrice.allInnerTexts();
    console.log(productPrice);
    const products : { name: string; price: number } [] = [];

for (let i = 0; i < productNames.length; i++) {
    products.push({
        name: productNames[i],
        price: Number(productPrice[i].replace(/\D/g, ''))
    });
}
products.sort((a, b) => b.price - a.price);
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + " - " + products[i].price);
}
}
}
