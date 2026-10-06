// import {test, expect} from "@playwright/test";
//    test("Web table handling",async({page})=>{
//      await page.goto("https://testautomationpractice.blogspot.com/");

//      //columns
//      const columns= page.locator("table#taskTable thead tr th");
//      const columnCount=await columns.count();
//      console.log('Column Count:',columnCount);

//      //Row
//      const row=page.locator("table#taskTable tbody tr");
//      const rowCount=await row.count();
//      console.log("Row count:", rowCount);

//     //Assertions
//      expect(columnCount).toBeGreaterThan(1);
//      expect(columnCount).toBe(5);
     
//      const columnLabel=await page.locator("table#taskTable thead tr th").allInnerTexts();
//      console.log('column Values:',columnLabel);

//      //To Retrive perticular cell value
//      const cellValue=await page.locator("table#taskTable tbody tr:nth-child(2) td:nth-child(3)").innerText();
//      console.log('Perticular cell value:',cellValue);

//      //To Retrive perticular row
//      const RowValue2=await page.locator("table#taskTable tbody tr:nth-child(2)").innerText();
//      console.log('Perticular Row Value:',RowValue2);

//      const RowValue=await page.locator("table#taskTable tbody tr:nth-child(2) td").allInnerTexts();
//      console.log('Perticular Row Value:',RowValue);

//     //using playwright inbuild methods
//     const targetRow= page.getByRole("row").filter({hasText:"System"});
//     const rowValueofJFT=await targetRow.innerText();
//     console.log('targetRow:',rowValueofJFT);

//     const targetRow2= page.getByRole("row").filter({hasText:"Firefox"});
//     const rowValueofJFT2=await targetRow2.innerText();
//     console.log('targetRow2:',rowValueofJFT2);

//     const targetRow3= page.getByRole("row").filter({hasText:"chrome"});
//     const rowValueofJFT3=await targetRow3.innerText();
//     console.log('targetRow3:',rowValueofJFT3);

//     const targetRow4= page.getByRole("row").filter({hasText:"Internet Explorer"});
//     const rowValueofJFT4=await targetRow4.innerText();
//     console.log('targetRow4:',rowValueofJFT4);

//     const table=page.getByRole("table");
//     // await expect(table).toBeVisible();

//     const datas=await table.getByRole("cell").allInnerTexts();
//     console.log(datas);

//     const dadas2=await page.locator("table#taskTable tbody tr td").allInnerTexts();
//     console.log(dadas2);
// });  

import {test,expect} from "@playwright/test";
test ("dynamic web table",async({page})=>{
  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const column=await page.getByRole("columnheader").allInnerTexts();
  console.log(column);

  const potionOfDisk=column.indexOf("Disk")
  const targetRow=page.getByRole("row")
  .filter({hasText:"chrome"});
  const diskValue=await targetRow.getByRole("cell")
  .nth(potionOfDisk)
  .innerText();
  console.log("Disk Value:",diskValue)

  const potionOfCPU=column.indexOf("CPU")
  const targetRow1=page.getByRole("row").filter({hasText:"chrome"});
  const cpuValue=await targetRow1.getByRole("cell")
  .nth(potionOfCPU)
  .innerText();
  console.log("Chrome CPU Value:",cpuValue)

  // const yellowBox = await page.getByText("Chrome CPU:").innerText();
  // console.log("Yellow Box:", yellowBox);
  // expect(yellowBox).toContain(cpuValue)
  expect(await page.getByText("Chrome CPU:").innerText()).toContain(cpuValue); 
});