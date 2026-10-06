# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login page
- Location: tests\login.spec.ts:2:5

# Error details

```
Error: locator.isEditable: Target page, context or browser has been closed
Call log:
  - waiting for locator('#Swag Labs')

```

# Test source

```ts
  1  | import {test,expect,Page} from "@playwright/test";
  2  | test("login page",async({page})=>{
  3  |     await page.goto("https://www.saucedemo.com/");
  4  |     // const swags=await expect(page.locator('#root')).toContainText();
> 5  |     const swags=await page.locator("#Swag Labs").isEditable();
     |                                                  ^ Error: locator.isEditable: Target page, context or browser has been closed
  6  |     console.log(swags);
  7  |     await page.locator('[data-test="username"]').fill('standard_user');
  8  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  9  |     await page.locator('[data-test="login-button"]').click();
  10 | });
```