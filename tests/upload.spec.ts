import { test, expect } from '@playwright/test';
import Cartpage from '../pages/cart.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

test.describe('upload', () => {

  let cartPage :Cartpage;
    test('Should Upload a text file', async ({ page }) => {

      cartPage = new Cartpage(page);
        //open url
        await page.goto('https://practice.sdetunicorns.com/cart/')
        
        //provide file path
        const filepath = path.join(__dirname, '../data/AWSCertificate.pdf');

        //DOM Manipulation
        await page.evaluate(() => {

        const selector = document.querySelector('input#upfile_1')
     if(selector){

        selector.className=''
     }
      
        })

        //upload text file

        await page.setInputFiles('input#upfile_1', filepath)
 
        //click the upload button

        await page.locator('#upload_1').click();

        //Wait command

        //Hardcoded way - wrong way

       // await page.waitForTimeout(5000);

        //wait for condition
        // await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state:'visible' ,timeout:10000})


        //assertion timeout
      //  await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', {timeout:10000})
        
      
      //assertion 
       
     // await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully')
      
      // or
      
      await expect(cartPage.uploadComponent().SuccessTxt).toContainText('uploaded successfully',{timeout:10000})
    })
    
})

