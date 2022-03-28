import {MainPageSelectors} from "../selectors/main-page-selectors";
import {Action} from "../support/action";

const actions = new Action();

export class MainPage extends MainPageSelectors{
    async openSite(url: string): Promise<void> {
        await browser.url(url);
    }

    async maximizeWindow(): Promise<void> {
        await browser.maximizeWindow();
    }

    async clickOnContinue(): Promise<void> {
        try{
            await actions.waitForElement(await this.continueButton(), 5000);
            await actions.clickOn(await this.continueButton());
        }catch (e: any){
            await console.log(e);
        }
    }

    async clickOnAcceptButton(): Promise<void> {
        try{
            await actions.waitForElement(await this.acceptButton(), 5000);
            await actions.clickOn(await this.acceptButton());
        }catch (e: any){
            await console.log(e);
        }
    }

    async clickOnBestsellerButton(): Promise<void> {
        await actions.clickOn(await this.shopButton());
        await actions.waitForElement(await this.bestSellerButton(), 3000);
        await actions.clickOn(await this.bestSellerButton());

        let cookies: any = await browser.getCookies();
        await actions.deleteAllCookies(browser, cookies);
    }
}