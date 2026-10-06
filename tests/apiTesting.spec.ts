import {test,expect} from "@playwright/test";

test ("api testing",async({request})=>{
    const getResponse=await request.get("https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts");
    console.log(getResponse);
    const responseBody=await getResponse.json();
    console.log(responseBody);
})