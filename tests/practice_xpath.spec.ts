import {test,Locator} from "@playwright/test";
test ("xpath",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //using basic xpath
    await page.locator('//input[@id="name"]').fill("karthick");

    //using text()
    const heading=await page
    .locator('//span[text()="For Selenium, Cypress & Playwright"]')
    .textContent();
    console.log(heading);
    var udemy=await page
    .locator('//a[text()="Udemy Courses"]').innerText();
    //.click();
    // console.log(udemy);
    const hi=await page.locator("//h1[normalize-space(text())='Automation Testing Practice']").innerText();
    console.log(hi);

    // page.goto("https://selectorshub.com/xpath-practice-page/");
    // //Xpath using Contains //tagName[contains(@Attributename,AttributePartialValue)]
    // await page.locator('//input[contains(@id,"shub")]').fill("karthick");   

    //xpath using contains and text methods
    const hello=await page.locator('//a[contains(text(),Data Entry Form)]').isVisible();
    console.log(hello);
    //client asking howmany samsung and iphones are there in amazon one page ? so using xpath with contains and text method
    //(   //span[contains(text(),"iphone") or contains(text(),"samsung")]     )
});