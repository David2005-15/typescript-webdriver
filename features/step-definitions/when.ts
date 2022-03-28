import {When} from "@wdio/cucumber-framework";
import {MainPage} from "../page-objects/main-page";
import {BestsellerPage} from "../page-objects/bestseller-page";

const mainPage = new MainPage();
const bestsellerPage = new BestsellerPage();

When(/^I Open Bestseller Page$/, async function () {
    await mainPage.clickOnContinue();
    await mainPage.clickOnAcceptButton();
    await mainPage.clickOnBestsellerButton();
});

When(/^I Add All Items Into DB$/, async function () {
    await bestsellerPage.addToDb();
});