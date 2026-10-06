import {test,expect} from "@playwright/test";
test ("Web table handling", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-table/");
    const columnCount=await page.locator("table#courses_table thead tr th").count();
    console.log(columnCount);
    expect("table#courses_table thead tr th").toBe(6);
    const columnLabel=await page.locator('table#courses_table thead tr th').allInnerTexts();
    console.log(columnLabel);
});

export{}


