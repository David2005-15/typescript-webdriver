import {Then} from "@wdio/cucumber-framework";
import {BestsellerPage} from "../page-objects/bestseller-page";

const bestsellerPage = new BestsellerPage();

Then(/^I Check That Bestseller Page Is Opened$/, async function () {
    await bestsellerPage.bannerDisplayed();
});

Then(/^I Check DB Items With "(.*)" Items$/, async function (option: any) {
   await bestsellerPage.checkWithDB(option);
});