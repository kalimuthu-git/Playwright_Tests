# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RSA_POM.spec.ts >> select product
- Location: tests\RSA_POM.spec.ts:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Test source

```ts
  1  | import {test} from "@playwright/test";
  2  | import { LoginPage } from "../pages/loginpage";
  3  | import data from '../testData/tData.json';
  4  | import { myTest } from "../fixtures/loginFixtures";
  5  | import { products } from "../pages/products";
  6  | import { url } from "node:inspector";
  7  | 
  8  | test("loginMethods",async({page})=>{
  9  |     // await page.pause();
  10 |     const logObj=new LoginPage(page)
  11 |     await logObj.navigate(data.url);
  12 |     await logObj.loginMethod(data.userName,data.password);
  13 |     // await logObj.assertLogin("Swag Labs");
  14 | });
  15 | 
  16 | myTest ("home page",async({loggedInPage})=>{
  17 |     const productObj=new LoginPage(loggedInPage);
  18 |     await productObj.loginMethod(data.userName,data.password);
  19 | });
  20 | test("select product",async({page})=>{
  21 |     const [newPage]=await Promise.all([
> 22 |         page.waitForEvent("popup"),
     |              ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  23 |         page.getByRole("button",{name:"New Tab"}).click()
  24 |     ]);
  25 |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  26 |     await page.locator('[data-test="shopping-cart-link"]').click();
  27 |     
  28 | });
  29 | /*test ("select products",async({page})=>{
  30 |     const selectPro=new products(page);
  31 |     await selectPro.selectProduct();
  32 |     // await selectPro.addToCartButton;
  33 |     // await selectPro.checkoutButton;
  34 | });*/
```