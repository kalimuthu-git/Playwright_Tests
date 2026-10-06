import {test,expect, chromium} from "@playwright/test";

test("tab and window handling",async()=>{
    const Browser= await chromium.launch();
    const context= await Browser.newContext();
    const mainPage= await context.newPage();
    await mainPage.goto("https://testautomationpractice.blogspot.com/");
    //watch mode

//Go to New page using page level window handling
    const [newPage]=await Promise.all([
        mainPage.waitForEvent("popup"),
        mainPage.getByRole("button",{name:"New Tab"}).click()
    ]);
    await newPage.getByRole("link",{name:"Online Training"}).click();
    // await newPage.waitForTimeout(2000);
    await expect(newPage).toHaveURL("https://www.pavanonlinetrainings.com/");

//Back to main page 
    await mainPage.bringToFront();
//Go to New page1 using context level window handling     
    const [newPage1]=await Promise.all([
        context.waitForEvent("page"),
        mainPage.getByRole("button",{name:"Popup Windows"}).click(),
        // await mainPage.waitForLoadState()
    ]);
    
//Access a newPage1      
    await newPage1.getByRole("button",{name:"Toggle navigation"}).click();
    await newPage1.waitForTimeout(2000);
    await newPage1.getByRole("link",{name:"Downloads"}).click();
    // await newPage1.waitForTimeout(2000);
//Back to main page
    await mainPage.bringToFront();
    await mainPage.getByPlaceholder("Enter Name").type("Karthick");
    // await mainPage.waitForTimeout(2000);
});  
        // await mainPage.getByRole("button",{name:"Popup Windows"}).click();
    // await mainPage.waitForTimeout(2000);  
    // await mainPage.getByRole("button",{name:"New Tab"}).click();
    // await mainPage.
    // await mainPage.getByRole("button",{name:"Popup Windows0"}).click();
    
    // const [newPage] = await Promise.all([
    //     mainPage.waitForEvent("popup"),
    //     mainPage.getByLabel("ISTQB").click()
    // ]);
