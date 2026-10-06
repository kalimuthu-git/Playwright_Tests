
import {Page,test} from "@playwright/test";

test("Login page", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    // console.log("login page");
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
  
});    

test("Add product", async ({page}) => {
       await page.goto("https://www.saucedemo.com/");
    // console.log("add product");
       await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
       await page.locator('[data-test="shopping-cart-link"]').click();
});