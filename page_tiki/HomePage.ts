import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com/';
  
  // Locators
  // readonly loginSignUpBtn: Locator; 

  readonly btnDelAd: Locator; 
  readonly txtSearchProduct: Locator; 
  readonly btnSearch: Locator; 
  
  readonly btnFirstProduct: Locator; 
  readonly btnFirstProductPrice: Locator; 
  
  readonly productList: Locator; 
  readonly productPriceList: Locator; 
  //////////////////////////////////////
  readonly vehicleTab: Locator; 
  xemayTab: Locator;
  xemaygaTab: Locator;
  xemaygaList: Locator;
  xemaygaListName: Locator;
  xemaygaListPrice: Locator;
  sorter: Locator;
  sortByPriceMinMax: Locator;
  
  constructor(page: Page) {
    super(page);
    this.btnDelAd = page.locator("//img[@alt='close-icon']"); 
    this.txtSearchProduct = page.locator("//input[@data-view-id='main_search_form_input']"); 
    this.btnSearch = page.locator("//button[@data-view-id='main_search_form_button']"); 

    // Product 
    this.btnFirstProduct = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']/div)[1]"); 
    this.btnFirstProductPrice = page.locator("(//div[@class='sc-2d0320b9-0 gHqeOl']//div[@class='price-discount__price'])[1]"); 

    this.productList = page.locator("//div[@class='sc-2d0320b9-0 gHqeOl']/div"); 
    this.productPriceList = page.locator("//div[@class='sc-2d0320b9-0 gHqeOl']//div[@class='price-discount__price']");

    this.vehicleTab = page.locator("//a[@title='Ô Tô - Xe Máy - Xe Đạp']");
    this.xemayTab = page.locator("//div[@class='sc-da08df93-3 gbXRzy']//div[text()='Xe máy']");
    this.xemaygaTab = page.locator("//div[@class='sc-da08df93-3 gbXRzy']//div[text()='Xe tay ga']");
    
    this.xemaygaList = page.locator("//a[@data-view-id='product_list_item']");
    this.xemaygaListName = page.locator("//a[@data-view-id='product_list_item']//h3");
    this.xemaygaListPrice = page.locator("//a[@data-view-id='product_list_item']//div[@class='price-discount__price']");
    
    
    this.sorter = page.locator("//div[@class='sc-169acb76-2 keUrBT']");
    this.sortByPriceMinMax = page.locator("//div[text()='Giá thấp đến cao']");
   
  } 
 
  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
 
  // Button
  
  async clickVehicleTab(): Promise<void> { 
    await this.vehicleTab.waitFor({state:'visible', timeout:3000});
    await this.vehicleTab.click();
  }

  async clickXeMayTab(): Promise<void> { 
    await this.xemayTab.waitFor({state:'visible', timeout:3000});
    await this.xemayTab.click();
  }

  async clickXeMayGaTab(): Promise<void> { 
    await this.xemaygaTab.waitFor({state:'visible', timeout:3000});
    await this.xemaygaTab.click();
  }

  async showXeMayGaList(): Promise<void> { 
    const productCount = await this.xemaygaListName.count();
    console.log("getProductListCartInfo | Total: "+productCount)
    for (let i=1; i<productCount; i++){  
      console.log(i + ". Price: " + await this.xemaygaListPrice.nth(i).innerText() + " |Name: "+ await this.xemaygaListName.nth(i).innerText());   
    }
  }

  async showXeMayGaListAllInfo(): Promise<void> { 
    // const productCount = await this.xemaygaList.count();
    // console.log("getProductListCartInfo: ")
    // for (let i=1; i<productCount; i++){  
    //   console.log(i + ". " + await this.xemaygaList.nth(i).allInnerTexts());   
    // }
    console.log("Count:", await this.xemaygaList.count());  
    console.log(
        "Texts:",
        await this.xemaygaList.allInnerTexts()
    );
  }



  async sortByPrice(): Promise<void> { 
    await this.sorter.click();
    await this.sortByPriceMinMax.click();
  }




  

  async clickBtnDelAd(): Promise<void> { 
    await this.btnDelAd.click();
  }
 
  async enterSearchProduct(keyword: string): Promise<void> { 
    await this.txtSearchProduct.fill(keyword);
    await this.btnSearch.click();
  }

  

  async clickBtnFirstProduct(): Promise<void> { 
    await this.btnFirstProduct.click();
  }

  async getProductPrice(): Promise<string> { 
    const price = await this.btnFirstProductPrice.innerText();
    return price;
  }
  
  async clickNthProduct(index: number): Promise<void> { 
    await this.btnFirstProduct.nth(index).click();
  }

  async getNthProductPrice(index: number): Promise<string> { 
    const price = await this.productPriceList.nth(index).innerText();
    return price;
  }
}
 