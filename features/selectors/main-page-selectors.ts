import '@wdio/utils';
import 'webdriverio';


export class MainPageSelectors {
    continueButton(): any {
        return browser.$("[class*='AgeGatestyles__GrownUps'] > div > button");
    }

    acceptButton(): any {
        return browser.$("[class*='CookieModalstyles__CookieActions'] > [class*='Button__Base']:nth-child(2)");
    }

    shopButton(): any {
        return browser.$("div:nth-child(3) > nav > ul > li:nth-child(1) > button");
    }

    bestSellerButton(): any {
        return browser.$$("ul > li:nth-child(9) > div > a")[0];
    }
}