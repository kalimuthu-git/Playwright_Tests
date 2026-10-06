import {test,expect} from "@playwright/test";

test("create a first test",async({page})=>{
await page.goto ("https://www.hotstar.com/in");
});
// import {test,FirefoxBrowser,Browser,BrowserContext,Page, firefox} from "playwright/test"

// test("create a first test" ,async ({browser})=>{
// //    const browser:Browser=await firefox.launch();
//    const context:BrowserContext =await browser.newContext();
//    const page:Page=await context.newPage();
// // //    page.waitForTimeout(70000);
//    await page.goto("https://www.youtube.com/");
// });
