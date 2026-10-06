// import {test, expect} from "@playwright/test";
// test("Web table handling",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     // await .scrollDownIfNeeded();
//     const columnCount=await page.locator ('table[name="BookTable"] tbody tr th').count();
//     console.log(columnCount);
//     // await expect("table[name=\"BookTable\"] tbody tr th").toBe(4);
//     const columnLabel=await page.locator('table[name="BookTable"] tbody tr th').allInnerTexts();
//     console.log(columnLabel);
//     // const columnLabels=await page.locator('table[name="BookTable"] tbody tr').innerText();
//     // console.log(columnLabels);
//     //to retrive perticular cell value
//     const cellValue=await page.locator('table[name="BookTable"] tbody tr:nth-child(4) td:nth-child(3)').innerText();
//     console.log(cellValue);
//     //To retrive particular row
//     const rowValue=await page.locator('table[name="BookTable"] tbody tr:nth-child(4)').innerText();
//     console.log(rowValue);

//     const rowValues=await page.locator('table[name="BookTable"] tbody tr:nth-child(4) td').allInnerTexts();
//     console.log(rowValues);

//     //playwright inbuild method
//     const targetRow=await page.getByRole('row').filter({hasText:"Master In Selenium"});
//     const rowValueOfJFT=await targetRow.innerText();
//     const cellValue1=await targetRow.getByRole("cell",{name:"Mukesh"}).innerText();

//     console.log('${cellValue}is present in rowValues ${rowValueOfJFT}');


// });

import {test, expect} from "@playwright/test";
   test("Web table handling",async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const columnCount=await page
     .locator('table#taskTable thead tr th')
     .count();
     console.log(columnCount);

    const columnLabel=await page
    .locator('table#taskTable thead tr th')
    .allInnerTexts();
     console.log(columnLabel);

     //Retrieve particular cell value
    const cellValue = await page
    .locator('table#taskTable tbody tr:nth-child(4) td:nth-child(3)')
    .innerText();
    console.log( cellValue);

     //Retrive particular row
    const rowValue = await page
    .locator('table#taskTable tbody tr:nth-child(4)')
    .innerText()
     console.log(rowValue);

    //playwright inbuild method
     const targetRow=await page
     .getByRole('row')
     .filter({hasText:'Internet Explorer'});
     const rowValueOfJFT=await targetRow
     .allInnerTexts();
     console.log(targetRow);
});

export{}
