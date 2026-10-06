import {test,expect,Page} from "@playwright/test";
test("login page",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const swagLabs=await page.locator(".login_logo").isVisible();
    console.log(swagLabs);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
//Product page
    const heading=await page.getByText('Swag Labs').isVisible();
    console.log(heading);
    const title=await page.locator('[data-test="title"]').isVisible();
    console.log(title);
    const prodName=await page.locator('[data-test="item-4-title-link"]').isVisible();
    console.log(prodName);
    // const details=await page.locator('[data-test="inventory-item-desc"]').isVisible();
    // console.log(details)
    // const price=await page.locator('#29.99').isVisible();
    // console.log(price);
    // const price=await page.locator('[data-test="inventory-item-price"]').isVisible();
    // console.log(price);
    // const image=await page.locator('[data-test="item-sauce-labs-backpack-img"]').isVisible();
    // console.log(image);
//next page
    // await page.locator('[data-test="back-to-products"]').click();
//previous page
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
//shopping cart page
    const title2=await page.locator('[data-test="title"]').isVisible();
    console.log(title2);
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
});
