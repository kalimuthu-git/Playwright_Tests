import {test,expect} from "@playwright/test";
// test("alerts",async({page})=>{
//     // await page.goto("https://testautomationpractice.blogspot.com/");
//     page.on("dialog",async(a)=>{
//        console.log(a.type());
//        console.log(a.message());
//        console.log(a.defaultValue());
//        await a.accept("karthick");
//     //    await a.dismiss();
//     });
//      await page.getByRole('button',{name:"Simple Alert"}).scrollIntoViewIfNeeded();
//     await page.getByRole('button',{name:"Simple Alert"}).click();
//     await page.getByRole("button",{name:"Confirmation Alert"}).click();
//     await page.getByRole("button",{name:"Prompt Alert"}).click();
    
// });

test("modern alerts",async({page})=>{
    await page.goto("https://sweetalert2.github.io/"); 
    await page.getByLabel("Show success message")
    .click({force:true});
    await page.getByRole("button",{name:"ok"}).click();

})