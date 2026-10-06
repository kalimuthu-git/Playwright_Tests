import {test} from "@playwright/test";

// test("Learn in build methods", async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

// //getByPlaceholder() Locators
// await page.getByPlaceholder("Enter your full name").fill("Karthick");
// await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("222-555-8987");
// await page.getByPlaceholder("Type your message here...").fill("As an automation tester, your core job is to replace repetitive manual checks with automated test scripts, integrate them into CI/CD pipelines, and report bugs.");
// await page.getByPlaceholder("Search products...").fill("Electronics");

// //getByAltText() Locators
// const picture=await page.getByAltText("logo image").isVisible();
// console.log(picture);

// //getByLabel() Locators
// await page.getByLabel("email").fill("karthickannadurai45@gmail.com");
// await page.getByLabel(/Password:/).fill("Kart@12345");
// await page.getByLabel("Your Age:").fill('26');
// await page.getByLabel("standard").click()
// });

test ("inbuild methods", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    await page.getByPlaceholder("Enter your full name").fill("Karthick");
    await page.getByPlaceholder("Enter Rediffmail ID").fill("karthick@gmail.com");
    await page.getByPlaceholder("Enter password").fill("kar@12345");
    await page.getByPlaceholder("Retype password").fill("kar@12345");
    await page.locator('.day').selectOption("11");
    await page.locator('.month').selectOption("NOV");
    await page.locator('.year').selectOption('1999');
    // await page.locator("#Male").check();
    // await page.locator("#country").selectOption("india");
    // await page.locator("#City").selectOption("chennai");
    await page.getByPlaceholder("Enter recovery email").fill("124@gmail.com");
    await page.locator("#mobno").fill("9047327608");
    await page.getByPlaceholder('Enter Captcha').fill("CDQR");
    await page.getByRole('button', { name: "Create my account" }).click();
});