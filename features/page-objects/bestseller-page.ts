import {BestsellerPageSelector} from "../selectors/bestseller-page-selector";
import {Assertion} from "../support/assertion";
import {Action} from "../support/action";
import {Manager} from "../database/manager";

const assert = new Assertion();
const actions = new Action();
const db = new Manager();
const path: string  = "C:/Users/Admin/WebstormProjects/lego-test/features/database/lego.db";

export class BestsellerPage extends BestsellerPageSelector{
    async bannerDisplayed(): Promise<void> {
        await actions.waitForElement(await this.banner(), 5000);
        await assert.toBeEq(await this.banner().isDisplayed(), true);
    }

    async addToDb(): Promise<void> {
        await db.createBestsellerTable(path);

        for (let i: number = 2; i < 5; i++){
            for (let j: number = 0; j < await this.itemPrices().length; j++){
                let price = await  this.itemPrices()[j].getText();
                price = price.replace("Price", '');
                price = price.replace("$", '');

                await db.inertIntoBestseller(path, await this.itemNames()[j].getText(), +price);
            }
            await actions.clickOn(await this.switchPage(i));
            await browser.pause(5000);
            if (i == 4) {
                let price = await this.itemPrice().getText();
                price = price.replace("Price", '');
                price = price.replace("$", '');

                await db.inertIntoBestseller(path, await this.itemName().getText(), +price);
            }
        }

        await actions.clickOn(await this.switchPage(1));
    }

    async checkWithDB(option) {
        let priceList: number[] = []

        if (option == "low-high"){
            await actions.selectWithText(await this.filterDropDown(), "Price: Low to High");
            for (let i: number = 2; i < 5; i++){
                await actions.waitForElement(await this.wishListText(), 5000);
                for (let j: number = 0; j < await this.itemPrices().length; j++){
                    let price = await  this.itemPrices()[j].getText();
                    price = price.replace("Price", '');
                    price = price.replace("$", '');

                    await priceList.push(+price);
                }
                await actions.clickOn(await this.switchPage(i));
                await browser.pause(5000);
                if (i == 4) {
                    let price = await this.itemPrice().getText();
                    price = price.replace("Price", '');
                    price = price.replace("$", '');

                    await priceList.push(+price);
                }
            }
            await console.log(priceList);
            await db.orderAndCheck(path, "ASC", priceList);
        }else {
            await actions.selectWithText(await this.filterDropDown(), "Price: High to Low");

            for (let i: number = 2; i < 5; i++){
                await actions.waitForElement(await this.wishListText(), 5000);
                for (let j: number = 0; j < await this.itemPrices().length; j++){
                    let price = await  this.itemPrices()[j].getText();
                    price = price.replace("Price", '');
                    price = price.replace("$", '');

                    await priceList.push(+price);
                }
                await actions.clickOn(await this.switchPage(i));
                await browser.pause(5000);
                if (i == 4) {
                    let price = await this.itemPrice().getText();
                    price = price.replace("Price", '');
                    price = price.replace("$", '');

                    await priceList.push(+price);
                }
            }

            await console.log(priceList);
            await db.orderAndCheck(path, "DESC", priceList);
        }


        let cookies: any = await browser.getCookies();
        await actions.deleteAllCookies(browser, cookies);
        await db.dropTable(path);
    }
}