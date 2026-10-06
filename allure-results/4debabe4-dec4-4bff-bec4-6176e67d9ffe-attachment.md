# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> login page
- Location: tests\login.spec.ts:2:5

# Error details

```
Error: locator.isVisible: Unexpected token ".99" while parsing css selector "#29.99". Did you mean to CSS.escape it?
Call log:
    - checking visibility of #29.99

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [aria-hidden] [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - button [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e17] [cursor=pointer]: Logout
                - button [ref=e18] [cursor=pointer]: Reset App State
              - button [ref=e20] [cursor=pointer]: Close Menu
        - generic [ref=e22]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Backpack" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Backpack
              - generic [ref=e44]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e45]:
              - generic [ref=e46]: $29.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bike Light" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bike Light
              - generic [ref=e56]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e57]:
              - generic [ref=e58]: $9.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Bolt T-Shirt
              - generic [ref=e68]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e69]:
              - generic [ref=e70]: $15.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Fleece Jacket
              - generic [ref=e80]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e81]:
              - generic [ref=e82]: $49.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Sauce Labs Onesie" [ref=e86] [cursor=pointer]:
            - img "Sauce Labs Onesie"
          - generic [ref=e87]:
            - generic [ref=e88]:
              - button "View details for Sauce Labs Onesie" [ref=e89] [cursor=pointer]:
                - generic [ref=e90]: Sauce Labs Onesie
              - generic [ref=e91]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e92]:
              - generic [ref=e93]: $7.99
              - button "Add to cart" [ref=e94] [cursor=pointer]
        - generic [ref=e95]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e97] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)"
          - generic [ref=e98]:
            - generic [ref=e99]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
                - generic [ref=e101]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e103]:
              - generic [ref=e104]: $15.99
              - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "X" [ref=e109] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import {test,expect,Page} from "@playwright/test";
  2  | test("login page",async({page})=>{
  3  |     await page.goto("https://www.saucedemo.com/");
  4  |     // const swags=await expect(page.locator('#root')).toContainText();
  5  |     // const swags=await page.locator("#Swag Labs").isVisible();
  6  |     // console.log(swags);
  7  |     await page.locator('[data-test="username"]').fill('standard_user');
  8  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  9  |     await page.locator('[data-test="login-button"]').click();
  10 | //Product page
  11 |     const heading=await page.getByText('Swag Labs').isVisible();
  12 |     console.log(heading);
  13 |     const title=await page.locator('[data-test="title"]').isVisible();
  14 |     console.log(title);
  15 |     const prodName=await page.locator('[data-test="item-4-title-link"]').isVisible();
  16 |     console.log(prodName);
  17 |     // const details=await page.locator('[data-test="inventory-item-desc"]').isVisible();
  18 |     // console.log(details)
> 19 |     const price=await page.locator('#29.99').isVisible();
     |                                              ^ Error: locator.isVisible: Unexpected token ".99" while parsing css selector "#29.99". Did you mean to CSS.escape it?
  20 |     console.log(price);
  21 |     // const price=await page.locator('[data-test="inventory-item-price"]').isVisible();
  22 |     // console.log(price);
  23 |     const image=await page.locator('[data-test="item-sauce-labs-backpack-img"]').isVisible();
  24 |     console.log(image);
  25 | //next page
  26 |     await page.locator('[data-test="back-to-products"]').click();
  27 | //previous page
  28 |     await page.getByRole('button', { name: 'Open Menu' }).click();
  29 |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  30 |     await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  31 |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  32 |     await page.locator('[data-test="shopping-cart-link"]').click();
  33 | //shopping cart page
  34 |     const title2=await page.locator('[data-test="title"]').isVisible();
  35 |     console.log(title2);
  36 |     await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  37 |     await page.locator('[data-test="continue-shopping"]').click();
  38 | });
  39 | 
```