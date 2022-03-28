import '@wdio/utils';
import 'webdriverio';

export class Action{
    async clickOn(element: any): Promise<void> {
        await element.click();
    }

    async waitForElement(element: any, delay: number): Promise<void> {
        await element.waitForExist({timeout: delay});
    }

    async deleteCookie(browser: any, cookieName: string[]): Promise<void> {
        await browser.deleteCookies(cookieName);
    }

    async deleteAllCookies(browser: any, cookies: any): Promise<void> {
        let arr: string[] = [];

        for (let i: number = 0; i < cookies.length; i++){
            arr.push(cookies[i].name);
        }

        await this.deleteCookie(browser, arr);
    }

    async selectWithText(element: any, text: string) {
        await element.selectByVisibleText(text);
    }
}