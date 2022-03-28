import {Given} from "@wdio/cucumber-framework";
import {MainPage} from "../page-objects/main-page";

const page = new MainPage();

Given(/^I Open Lego Web Site$/, async function () {
    await page.openSite("/")
    await page.maximizeWindow();
});
