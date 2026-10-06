import {test,expect, chromium} from "@playwright/test";

test("window handling",async()=>{
    const Browser=await chromium.launch();
    const context=await Browser.newContext();
    const mainPage=await context.newPage();
    await mainPage.goto("https://www.amazon.in/");
    await mainPage.getByLabel("Search Amazon.in").fill("mobiles");
    await mainPage.getByLabel("Search Amazon.in").press("Enter");

//When a new tab emits from the perticular page is a page level handling
    // const [newPage]=await Promise.all([
    //     mainPage.waitForEvent("popup"),
    //     mainPage
    //     .getByLabel("Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger")
    //     .click()
    // ]);

//When a new tab emits from the perticular context is a context level handling
    const [newPage]=await Promise.all([
        context.waitForEvent("page"),
        mainPage
        .getByLabel("Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger")
        .click()
    ]);

    await newPage.waitForLoadState();
    const price=await newPage.locator("#tp_price_block_total_price_ww").last().innerText();
    expect(price).toBe("₹11,999.0011,999.00")

    await mainPage.bringToFront();
    await mainPage
    .getByRole("link",{name:/Free Shipping/})
    .click();
    await mainPage.waitForTimeout(2000);

    await newPage.bringToFront();
    await newPage.waitForTimeout(2000);
});

// import {test,expect} from "@playwright/test";
// test("tab and window handling",async()=>{
//     const Browser=await chromium.launch();
//     const context=await Browser.newContext();
//     const mainPage=await context.newPage();
//     await mainPage.goto("https://testautomationpractice.blogspot.com/");

// })