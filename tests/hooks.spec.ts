import { test, expect ,Page } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Running once before all tests");
});
test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto("https://www.saucedemo.com/");
});
test.afterEach(async ({page}) => {
    console.log("Running after each test");
    await page.close()
});
test.afterAll(async () => {
    console.log("Running once after all tests");
});
test("Login page and select product", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
});




// import { test, expect, chromium, Page } from "@playwright/test";

// test.beforeAll(async () => {
//     console.log("Running once before all test");
// });
// test.beforeEach(async ({page}) => {
//     await page.goto("https://www.saucedemo.com/");
//     // const browser = await chromium.launch();
//     // const context = await browser.newContext();
//     // const page = await context.newPage();
//     // await page.goto("https://www.saucedemo.com/");
// });
// test.afterEach(async ({page}) => {
//     console.log("Running after each test");
// });
// test.afterAll(async ({page}) => {
//     console.log("Running once after all the test");
// });
// test("Login page", async ({page}) => {
//     await page.locator('[data-test="username"]').fill("standard_user");
//     await page.locator('[data-test="password"]').fill("secret_sauce");
//     await page.locator('[data-test="login-button"]').click();
//     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="shopping-cart-link"]').click();

// });


/*import {test, Page , Locator, expect,chromium} from "@playwright/test";
test.beforeAll(async()=>{
    console.log("Running once before all test");
});
test.beforeEach(async () => {
    //Launch browser
    const browser = await chromium.launch();
    //Create browser context
    const context = await browser.newContext();
    // 3. Create page
    const pageA = await context.newPage();
    // 4. Use the page
    await pageA.goto("https://www.saucedemo.com/");
});
test.afterEach(async({page})=>{
    // await page.close();
    console.log("Running after each test");
});
test.afterAll(async({page})=>{
    console.log("Running once after all the test");
});
test("Login page", async () => {
    await pageA.locator('[data-test="username"]').fill('standard_user');
    await pageA.locator('[data-test="password"]').fill('secret_sauce');
    await pageA.locator('[data-test="login-button"]').click();
    // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    // await page.locator('[data-test="shopping-cart-link"]').click();
});    

// test("Add product", async ({page}) => {
//     console.log("add product");
//        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//        await page.locator('[data-test="shopping-cart-link"]').click();
// });




/*test.beforeAll(async()=>{
    console.log("running once before all the test");
});
test.beforeEach(async()=>{
    console.log("running before each test");
});
test.afterEach(async()=>{
    console.log("running after each test");
});
test.afterAll(async()=>{
    console.log("running once after all the test");
});

test ("test1",async({page})=>{
    console.log("test1");
});
test ("test2",async({page})=>{
    console.log("test2");
});
test ("test3",async({page})=>{
    console.log("test3");
});
test ("test4",async({page})=>{
    console.log("test4");
});*/