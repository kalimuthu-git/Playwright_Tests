# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTesting.spec.ts >> api testing
- Location: tests\apiTesting.spec.ts:3:5

# Error details

```
SyntaxError: Unexpected token '<', "



<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1 | import {test,expect} from "@playwright/test";
  2 | 
  3 | test ("api testing",async({request})=>{
  4 |     const getResponse=await request.get("https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts");
  5 |     console.log(getResponse);
> 6 |     const getResponseBody= await getResponse.json();
    |                            ^ SyntaxError: Unexpected token '<', "
  7 |     console.log(getResponseBody);
  8 | })
```