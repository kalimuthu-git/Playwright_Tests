import {test,expect} from "@playwright/test";

// test("assertions or validations",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     //Page level Assertions
//     await expect.soft(page).toHaveTitle("Automation Testing Practice");
//     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

//     //Locator level Assertions
//     await expect(page.getByRole("heading",{name:/Automation Testing Practice/})).toBeVisible();
//     await expect(page.getByRole("heading",{name:/Automation Testing Practice/})).not.toBeHidden();
    
// });

    //Dropdowns
// import { test, expect } from "@playwright/test";

test("Dropdowns", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const countryDropdown = page.getByLabel("Country");

    

    await countryDropdown.scrollIntoViewIfNeeded();

    await countryDropdown.selectOption("india");

    // await countryDropdown.selectOption({ value: "Australia" });

    // await countryDropdown.selectOption({ label: "Germany" });

    // const value = "Australia".trim();

    // await countryDropdown.selectOption({ value });


    const comboDropdown=page.getByRole("combobox",{name:"Country:"});
    await expect (comboDropdown).toBeVisible();
    const countryOptionCount=await comboDropdown.locator('option').count();
    console.log(countryOptionCount);

    //toHaveCount()---locator Assertions
    await expect (comboDropdown.locator('option')).toHaveCount(10);
    expect (countryOptionCount).toBe(10);
    //How to print all the options (allInnerTexts-it returns array of all the elements)
    const countryNames=await comboDropdown.locator("option").allInnerTexts();
    console.log(countryNames);
}); 