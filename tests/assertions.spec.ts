// import { test, expect } from "@playwright/test";
//     //Login
// test("Assertions or validation", async ({ page }) => {
//     await page.goto("https://letcode.in/dropdowns");
//     // Verify dropdown is visible
//     await expect(page.locator('select#fruits')).toBeVisible();
//     // Locate the dropdown
//     const fruitsDropdown = page.getByLabel(
//         "Select the apple using visible text"
//     );
//     // Select using visible text
//     await fruitsDropdown.selectOption({ label: "Apple" });
//     // Select using value
//     await fruitsDropdown.selectOption({ value: "2" });
//     // Select using index
//     await fruitsDropdown.selectOption({ index: 4 });
//     // Count all options
//     const fruit = await fruitsDropdown.locator("option").count();
//     console.log("Total fruits:", fruit);
//     // Get all option texts
//     const fruits = await fruitsDropdown
//         .locator("option")
//         .allInnerTexts();
//     console.log("All fruits:", fruits);
// });


import {test} from "@playwright/test";
test("Multi select dd",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder('Search Amazon.in').fill('samsung s26 ultra');
    await page.locator("#All");
    const multidd = page.locator("All");
    const allcount=await multidd.locator("option").count();
    await multidd.locator("option").first();    //.waitFor();
    const allOptions=await multidd.locator("option").allTextContents();
    console.log(allcount,allOptions);

    await multidd.selectOption([
        {value:"bt"},
        {label: "All Categories"},
        {index: 8}
    ])
    // page.waitForTimeout(3000);
    // const samsungDropdown = page.getByPlaceholder("Search Amazon.in").fill("samsung")
     // Select using value
    // await samsungDropdown.selectOption({value:"2"});
     // Select using index
    // await samsungDropdown.selectOption({index:4});
})