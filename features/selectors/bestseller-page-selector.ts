import '@wdio/utils';
import 'webdriverio';


export class BestsellerPageSelector {
    banner(): any {
        return browser.$("[class*='LayoutSectionstyles'] > section > [class*='InPageNavstyles']");
    }

    switchPage(count: number): any {
        return browser.$(`[data-test="pagination-page-${count}"]`);
    }

    itemPrices(): any {
        return browser.$$("[data-test='product-price']");
    }

    itemPrice(): any {
        return browser.$("[data-test='product-price']")
    }

    itemNames(): any {
        return browser.$$("h2 > span");
    }

    itemName(): any {
        return browser.$("h2 > span");
    }

    filterDropDown(): any {
        return browser.$("#sortBy");
    }
}