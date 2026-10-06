import{test as base,Page} from "@playwright/test";
import { LoginPage } from "../pages/LogInPage";
import data from "../testData/tData.json";
type myFixture={loggedInPage:Page};

export const myTest=base.extend<myFixture>({
    loggedInPage:async({page},use)=>{
        const loginObj=new LoginPage(page);
        await loginObj.navigate(data.url);
        await loginObj.loginMethod(data.userName,data.password);
        await use(page);
    }
});
