import {test,expect,Locator, Page} from "@playwright/test";

export class products{
        page: Page;
        heading:Locator;
        title:Locator;
        prodName:Locator;
        // menuButton:Locator;
        backpack:Locator
        removeButton:Locator;
        addToCartButton:Locator;
        checkoutButton:Locator;
        youCart:Locator;
        
//Custructor
    constructor (page: Page) {
        this.page= page;
        this.heading=page.getByText('Swag Labs');
        this.title=page.locator('[data-test="title"]');
        this.prodName=page.locator('[data-test="item-4-title-link"]');
        // this.menuButton=page.getByRole('button', { name: 'Open Menu' });
        this.backpack=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton=page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.addToCartButton=page.locator('#add-to-cart-sauce-labs-backpack');
        this.checkoutButton=page.locator('[data-test="shopping-cart-link"]');
        this.youCart=page.getByText('Your Cart');
       
    }
    //Reusable methods
    async navigate(url:string){
        await this.page.goto(url);
    }
    async selectProduct() {
        const heading=await this.heading.isVisible();
        console.log(heading);
        const title=await this.title.isVisible();
         console.log(title);
        const prodName=await this.prodName.isVisible();
         console.log(prodName);
        // await this.menuButton.click();
        await this.addToCartButton.click();
        await this.removeButton.click();
        await this.addToCartButton.click();
        await this.checkoutButton.click();
        const youCart=this.youCart.isVisible();
        console.log(youCart);
        
        
    }
}
