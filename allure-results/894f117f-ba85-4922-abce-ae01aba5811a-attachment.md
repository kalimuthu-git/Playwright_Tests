# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Add product
- Location: tests\test.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-sauce-labs-backpack"]')

```

# Test source

```ts
  1  | 
  2  | import {Page,test} from "@playwright/test";
  3  | 
  4  | test("Login page", async ({page}) => {
  5  |     console.log("login page");
  6  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  7  |     await page.locator('[data-test="username"]').fill('standard_user');
  8  |     await page.locator('[data-test="login-button"]').click();
  9  |   
  10 | });    
  11 | 
  12 | test("Add product", async ({page}) => {
  13 |     console.log("add product");
> 14 |        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     |                                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 |        await page.locator('[data-test="shopping-cart-link"]').click();
  16 | });
```