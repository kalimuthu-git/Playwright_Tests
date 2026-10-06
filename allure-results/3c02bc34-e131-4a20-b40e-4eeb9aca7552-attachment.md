# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Add product
- Location: tests\test.spec.ts:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-sauce-labs-backpack"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | import {Page,test} from "@playwright/test";
  3  | 
  4  | test("Login page", async ({page}) => {
  5  |     await page.goto("https://www.saucedemo.com/");
  6  |     // console.log("login page");
  7  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  8  |     await page.locator('[data-test="username"]').fill('standard_user');
  9  |     await page.locator('[data-test="login-button"]').click();
  10 |     await page.waitForTimeout(2000);
  11 |     // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  12 |     // await page.locator('[data-test="shopping-cart-link"]').click();
  13 |   
  14 | });    
  15 | 
  16 | test("Add product", async ({page}) => {
  17 |        await page.goto("https://www.saucedemo.com/");
  18 |     // console.log("add product");
> 19 |        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
     |                                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |        await page.locator('[data-test="shopping-cart-link"]').click();
  21 | });
```