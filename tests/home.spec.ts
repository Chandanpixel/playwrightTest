import { test, expect } from '@playwright/test';
import Homepage from '../pages/home.page';


test.describe('Home', () => {

    let homepage : Homepage;
    test('Open Home page and verify title', async ({ page }) => {
        homepage = new Homepage(page);
        // Open url 

       // await page.goto('https://practicetestautomation.com/');
                     //OR
       await homepage.navigate()

        //verify title
        await expect(page).toHaveTitle('Practice Test Automation | Learn Selenium WebDriver');
        
    })
    test('Open Practice page and verify title', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice/');

      
        //verify title
        await expect(page).toHaveTitle('Practice | Practice Test Automation');

    })
        test('Click Test LoginPage link', async ({ page }) => {
            homepage = new Homepage(page);


            await page.goto('https://practicetestautomation.com/practice/');

            //click the link
          // await page.locator('[href*="test-login/"]').click();

         await homepage.TestLoginlink.click();
    
            //verify title
            await expect(page).toHaveTitle('Test Login | Practice Test Automation');
        
    })

    
    test('Verify the heading text is visible', async ({ page }) => {
        homepage = new Homepage(page);


        await page.goto('https://practicetestautomation.com/practice/');

        //click the link
       //await page.locator('[href*="test-login/"]').click();
     await homepage.TestLoginlink.click();

        //verify the heading text
     // const headingtext=  await page.locator('text=Test login')
     const headingtext= homepage.HeadingText

      await expect(headingtext).toBeVisible();
    
    
})
test('Verify the footer link is visible', async ({ page }) => {
    homepage = new Homepage(page);


    const expectedLink= ["Sitemap ","Shipping & Returns","Privacy Notice",
    "Conditions of Use","About us","Contact us"]

    // land on website
    await page.goto('https://demowebshop.tricentis.com/');

    // Find the footer link
   const footlink = page.locator('/html/body/div[4]/div[2]/div[1]/div[1]/ul')
  // const footlink =homepage.FooterLInk
  

    //Verify footer 

    expect(await footlink.allTextContents()).toEqual(expectedLink);


})
 
})
