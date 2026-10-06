import {test} from '@playwright/test';

test("practice" ,async({page})=>{
    await page.goto("https://www.youtube.com/");
});