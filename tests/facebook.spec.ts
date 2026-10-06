import {test,expect} from "@playwright/test";

test ("facebook login",async({page})=>{
    await page.goto("https://www.facebook.com/reg/?entry_point=login");
    await page.getByLabel("First name").fill("karthick");
    await page.getByText("Surname").fill("Annadurai");
    // await page.getByText("Day").selectOption({index:1});
    // await page.getByLabel("Select your gender").selectOption("Male");
    // await page.getByTestId('Gender').selectOption("male");
    await page.getByLabel("Mobile number or email address").fill("9047327608");
    await page.getByLabel("Password").fill("karthick@45");
    await page.getByRole("button",{name:"Submit"}).click();
});