# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RSA_POM.spec.ts >> loginMethods
- Location: tests\RSA_POM.spec.ts:8:5

# Error details

```
TypeError: _loginpage.LoginPage is not a constructor
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
> 10 |     const logObj=new LoginPage(page)
     |                  ^ TypeError: _loginpage.LoginPage is not a constructor
  11 |     await logObj.swagLabs("Swag Labs");
  12 |     await logObj.navigate(data.url);
  13 |     await logObj.loginMethod(data.userName,data.password);
  14 |     await logObj.assertLogin("Swag Labs");
  15 | });
  16 | /*test("select product",async({page})=>{
  17 |     const [newPage]=await Promise.all([
  18 |         page.waitForEvent("popup"),
  19 |         page.getByRole("button",{name:"New Tab"}).click()
  20 |     ]);
  21 |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  22 |     await page.locator('[data-test="shopping-cart-link"]').click();
  23 |     
  24 | });
  25 | test ("select products",async({page})=>{
  26 |     const selectPro=new products(page);
  27 |     await selectPro.selectProduct();
  28 |     // await selectPro.addToCartButton;
  29 |     // await selectPro.checkoutButton;
  30 | });*/
  31 | 
  32 | 
  33 | /*//Login-Using Custom Fixture
  34 | myTest ("home page",async({loggedInPage})=>{
  35 |     console.log("custom fixture");
  36 |     const productObj=new LoginPage(loggedInPage);
  37 |     await productObj.loginMethod(data.userName,data.password)*/
```