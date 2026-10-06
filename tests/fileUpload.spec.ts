import{test,expect} from "@playwright/test";

test ("file Upload",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html");
    const isHidden=await page.getByText("Browse …").isHidden();
    console.log(isHidden);

    await page.locator('input[type="file"]')
    .setInputFiles('testData/Project Name.txt')
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Upload"}).click();

    // await expect(await page.locator('input[type="file"]')
    // .setInputFiles('testData/Project Name.txt'))
    // .toContain('Project Name.txt');

    // // await page.getByRole("button",{name:"Remove"}).click();
    
});



































































