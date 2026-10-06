# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RSA_POM.spec.ts >> loginMethods
- Location: tests\RSA_POM.spec.ts:9:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "https://www.saucedemo.com/"
Received: "Swag Labs"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "Swag Labs"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": userName
    - textbox "Password": password
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect,Locator, Page} from "@playwright/test";
  2  | 
  3  | export class logInPage{
  4  |     swagLabs: Locator;
  5  |     userName: Locator;
  6  |     password: Locator;
  7  |     loginButton: Locator;
  8  |     page:Page;
  9  | //Constructor
  10 |     constructor(Page: Page) {
  11 |         this.page= Page;
  12 |         this.swagLabs=this.page.locator(".login_logo");   
  13 |         this.userName=Page.getByPlaceholder("Username");
  14 |         this.password=Page.getByPlaceholder("Password");
  15 |         this.loginButton=Page.locator("#login-button");   
  16 |     }
  17 | //Reusable methods
  18 |     async navigate(url:string){
  19 |         await this.page.goto(url);
  20 |     }
  21 |     async loginMethod(name:string,password:string) {
  22 |         const swagLabs= await this.swagLabs.isVisible();
  23 |         console.log(swagLabs);
  24 |         await this.userName.fill("userName");
  25 |         await this.password.fill("password");
  26 |         await this.loginButton.click();
  27 |     }
  28 |     async assertLogin(title:string){
> 29 |         await expect(this.page).toHaveTitle(title);
     |                                 ^ Error: expect(page).toHaveTitle(expected) failed
  30 |     }
  31 | }
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | /*import {test,expect,Locator, Page} from "@playwright/test";
  42 | export class LoginPage{
  43 |     // swagLabs: Locator;
  44 |     userName: Locator;
  45 |     password: Locator;
  46 |     // usernameField: Locator;//vissible
  47 |     // passwordField: Locator;//vissible
  48 |     loginButton: Locator;//click
  49 |     // loginBox: Locator;//editable
  50 |     page:Page;
  51 | 
  52 |     //Constructor
  53 |     constructor(Page: Page) {
  54 |         this.page= Page;
  55 |         
  56 |         this.userName=Page.getByPlaceholder("Username");
  57 |         this.password=Page.getByPlaceholder("Password");
  58 |         this.loginButton=Page.locator("#login-button")  //.click();
  59 |         // this.usernameField=Page.locator(".form_group").first(); //.isEnabled
  60 |         // this.passwordField=Page.locator(".form_group").nth(1);  //.isEnabled
  61 |         // this.swagLabs=this.page.locator(".login_logo");   //.isVissible()
  62 |         
  63 |         // this.loginBox=Page.locator("#login-button")     //.isEnabled()
  64 |     }
  65 |     //Reusable methods
  66 |     async navigate(url:string){
  67 |         await this.page.goto(url);
  68 |     }
  69 |     async loginMethod(name:string,password:string) {
  70 | 
  71 |         await this.userName.fill("userName");
  72 |         await this.password.fill("password");
  73 |         await this.loginButton.click();
  74 |         //  const enable=await this.usernameField.isEnabled();
  75 |         // console.log(enable);
  76 |         // const pass=await this.passwordField.isEnabled();
  77 |         // console.log(pass)
  78 |         // const enable1=await this.loginBox.isEnabled();
  79 |         // console.log(enable1);
  80 |         // const visible= await this.swagLabs.isVisible();
  81 |         // console.log(visible);
  82 | 
  83 |     }
  84 |     // async assertLogin(name:string) {
  85 |     //     await expect(this.page).toHaveURL("Swag Labs");
  86 |     // }
  87 | 
  88 | }*/
```