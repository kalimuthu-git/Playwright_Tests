import { test, expect } from "@playwright/test";

test("create a first test", async ({ page }) => {
    await page.goto("https://letcode.in/edit/");
// Enter the name
    await page.locator('[placeholder="Enter first & last name"]').fill("karthick")
//Append a text and press keyboard tab
    await page.locator('input[value="I am good"]').press('Tab');
  

    await page.locator('input[value="I am good"]')
     .pressSequentially("man", { delay: 100 });
// What is inside the text box
    const insideThetextBox=await page
    .locator('//input[@value="ortonikc"]').inputValue();
    console.log(insideThetextBox);
//Clear the text
    await page.locator('input[value="Koushik Chatterjee"]').clear()
//Confirm edit field is disabled
    const one =await page.locator("Confirm edit field is disabled").isHidden()
     console.log(one);
});

// // import {test} from '@playwright/test';
// // test("for login",async({page})=>{
// //    await page.goto("https://testautomationpractice.blogspot.com/");
// //    await page.locator('#name').fill("karthick");
// //    await page.locator('.form-control').nth(1).fill("kalimuthu@gmail.com");
// //    await page.locator('.form-control').nth(2).fill("9047327608");
// //    await page.locator('.form-control').nth(3).fill("Chennai -98");
// //    await page.locator('#male').check();
// //    await page.locator('#sunday').check();
// //    await page.locator('#country').selectOption("india");
// //    await page.locator('#colors').selectOption("red");
// //    await page.locator('#animals').selectOption("cat");
// //    await page.locator('#datepicker').fill("09/05/2026");
// //    await page.locator('#datepicker2').fill("09/14/2026");
// //    await page.locator('#datepicker3').fill("10/05/2026");
// //    await page.locator('#submit-btn').click();
// // });



// import {test,Locator} from '@playwright/test';
// test("for login",async({page})=>{
//    await page.goto("https://testautomationpractice.blogspot.com/");
//    const headingText=await page
//    .locator('//span[text()="For Selenium, Cypress & Playwright"]')
//    .textContent()
//    console.log(headingText);
//    // await page
//    // .locator('//a[text()="Online Trainings"]')
//    // .click();
//    // console.log(online);
//    const seek=await page
//    .locator('//a[normalize-space(text())="Automation Testing Practice"]')
//    .isHidden()
//    console.log(seek);

// });































// import { test ,expect } from '@playwright/test';

// test("for login", async ({ page }) => {

//   await page.goto("https://testautomationpractice.blogspot.com/");

//   await page.locator("#name").fill("Karthick");

//   await page.locator('#email').fill("kalimuthuannadurai45@gmail.com");

//   await page.locator('#phone').fill("9047327608");

//   await page.locator('#textarea').fill("Chennai -98");

//   await page.locator('#male').check();

//   await page.locator('#sunday').check();

//   await page.locator('#country').selectOption("india");

//   await page.locator('#colors').selectOption("red");

//   await page.locator('#animals').selectOption("cat");

//   await page.locator('#datepicker').fill("09/05/2026");

//   await page.locator('#submit-btn').click();
// });