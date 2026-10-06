import {test} from "@playwright/test";
import { LoginPage } from "../pages/LogInPage";
import data from '../testData/tData.json';
import dd from '../testData/dd.json';

for (let d of dd) {
    test (`data driven testing ${d.userName} and ${d.password}`, async({page})=>{
        const loginObj=new LoginPage(page);
        await loginObj.navigate(data.url);
        await loginObj.loginMethod(d.userName,d.password);
        // await loginObj.assertLogin("https://www.saucedemo.com/inventory.html");
        // await page.waitForTimeout(2000);
    });
};