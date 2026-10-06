import {test} from "@playwright/test";
import { LoginPage } from "../pages/LogInPage";
import data from '../testData/tData.json';
import { myTest } from "../fixtures/loginFixtures";
import { products } from "../pages/products";
import { cartPage } from "../pages/cartPage";
import { title } from "node:process";

test("loginMethods",async({page})=>{
    await page.pause();
    const logObj=new LoginPage(page);
    await logObj.navigate(data.url);
    await logObj.loginMethod(data.userName,data.password);
    
});
// test ("select products",async({page})=>{
//        const logObj=new LoginPage(page);
//        await logObj.navigate(data.url);
//        await logObj.loginMethod(data.userName,data.password);
//        const selectPro=new products(page);
//        await selectPro.navigate(data.assertLogin);
//     // await selectPro.navigate("https://www.saucedemo.com/inventory.html");
//        await selectPro.selectProduct();
// });
// test("cart Page", async ({ page }) => {
//     const logObj = new logInPage(page);
//     await logObj.navigate(data.url);
//     await logObj.loginMethod(data.userName, data.password);
//     await logObj.assertLogin(data.assertLogin);
//     const cart = new cartPage(page);
//     await cart.checkout();
//     await cart.cartPage("Swag Labs");
// });


/*//Login-Using Custom Fixture
myTest ("home page",async({loggedInPage})=>{
    console.log("custom fixture");
    const productObj=new LoginPage(loggedInPage);
    await productObj.loginMethod(data.userName,data.password)*/