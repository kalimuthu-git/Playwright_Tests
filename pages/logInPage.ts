import {test,expect,Locator, Page} from "@playwright/test";

export class LoginPage{
    swagLabs: Locator;
    userName: Locator;
    password: Locator;
    loginButton: Locator;
    page:Page;
//Constructor
    constructor(Page: Page) {
        this.page= Page;
        this.swagLabs=this.page.locator(".login_logo");   
        this.userName=Page.getByPlaceholder("Username");
        this.password=Page.getByPlaceholder("Password");
        this.loginButton=Page.locator("#login-button");   
    }
//Reusable methods
    async navigate(url:string){
        await this.page.goto(url);
    }
    async loginMethod(name:string,password:string) {
        const swagLabs= await this.swagLabs.isVisible();
        console.log(swagLabs);
        await this.userName.fill("userName");
        await this.password.fill("password");
        await this.loginButton.click();
    }
    async assertLogin(title:string){
        await expect(this.page).toHaveTitle(title);
    }
}









/*import {test,expect,Locator, Page} from "@playwright/test";
export class LoginPage{
    // swagLabs: Locator;
    userName: Locator;
    password: Locator;
    // usernameField: Locator;//vissible
    // passwordField: Locator;//vissible
    loginButton: Locator;//click
    // loginBox: Locator;//editable
    page:Page;

    //Constructor
    constructor(Page: Page) {
        this.page= Page;
        
        this.userName=Page.getByPlaceholder("Username");
        this.password=Page.getByPlaceholder("Password");
        this.loginButton=Page.locator("#login-button")  //.click();
        // this.usernameField=Page.locator(".form_group").first(); //.isEnabled
        // this.passwordField=Page.locator(".form_group").nth(1);  //.isEnabled
        // this.swagLabs=this.page.locator(".login_logo");   //.isVissible()
        
        // this.loginBox=Page.locator("#login-button")     //.isEnabled()
    }
    //Reusable methods
    async navigate(url:string){
        await this.page.goto(url);
    }
    async loginMethod(name:string,password:string) {

        await this.userName.fill("userName");
        await this.password.fill("password");
        await this.loginButton.click();
        //  const enable=await this.usernameField.isEnabled();
        // console.log(enable);
        // const pass=await this.passwordField.isEnabled();
        // console.log(pass)
        // const enable1=await this.loginBox.isEnabled();
        // console.log(enable1);
        // const visible= await this.swagLabs.isVisible();
        // console.log(visible);

    }
    // async assertLogin(name:string) {
    //     await expect(this.page).toHaveURL("Swag Labs");
    // }

}*/