import { test, expect, Locator, Page } from "@playwright/test";
export class cartPage {
    page: Page;
    menuButton: Locator;
    closeButton: Locator;
    title: Locator;
    content: Locator;
    prodTitle: Locator;
    price: Locator;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.menuButton = page.getByRole("button", { name: "Open Menu" });
        this.closeButton = page.getByRole("button", { name: "Close Menu" });
        this.title = page.locator(".app_logo");
        this.content = page.getByText("carry.allTheThings() with the sleek");
        this.prodTitle = page.getByText("Sauce Labs Backpack");
        this.price = page.getByText("$29.99");
        this.checkoutButton = page.getByRole("button",{name:"Checkout"});
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async checkout() {
        await this.menuButton.click();
        await this.closeButton.click();
        await this.checkoutButton.click();
    }

    async cartPage(title: string) {
        await expect(this.title).toHaveText("Swag Labs");
        await expect(this.content).toBeVisible();
        await expect(this.prodTitle).toHaveText(title);
        await expect(this.price).toBeVisible();
    }
}

// import {test,expect,Locator, Page} from "@playwright/test";

// export class cartPage{
//     page:Locator;
//     menuButton:Locator;
//     closeButton:Locator;
//     title:Locator;
//     content:Locator;
//     prodTitle:Locator;
//     price:Locator;
//     checkoutButton:Locator;
// //constructor    
//   constructor(page:Page){
//     this.page=page;
//     this.menuButton=page.getByRole("button",{name:"Open Menu"});
//     this.closeButton=page.getByRole("button",{name:"Close Menu"});
//     this.title=page.locator(".app_logo");
//     this.content=page.locator("#carry.allTheThings() with the sleek");
//     this.prodTitle=page.getByLabel("Sauce Labs Backpack");
//     const vissible=this.price=page.locator("#29.99");
//     this.checkoutButton=page.getByRole("button",{name:"Checkout"});
//   }  
// //Reusable methods  
//     async navigate(url:string){
//         await this.Page.goto(url);
//     } 
//     async checkout{
//         await page.menuButton.click();
//         await page.closeButton.click();
//         await page.checkoutButton.click();
//     }
//     async cartPage(tittle:string) {
//         await expect(this.title).toHaveText("Swag Labs");
//         await expect(this.content).toHaveText("carry.allTheThings() with the sleek");
//         await expect(this.prodTitle).toHaveText(tittle);
//         await expect(this.price).toBeVisible();
//         console.log(vissible);
//     }



// }        