import { test, expect } from '@playwright/test';
import exp from 'constants';
import Contactpage from '../pages/contact.page';

test.describe('Contact', () => {
    let contactPage :Contactpage

    test('Open Home page and verify title', async ({ page }) => {
        contactPage = new Contactpage(page);
        // Open url 

        await page.goto('https://practice.sdetunicorns.com/');

        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        
    })

    test('Fill contact form and verify success message', async ({ page }) => {
        contactPage = new Contactpage(page);

        // go to the url

      //  await page.goto('https://practice.sdetunicorns.com/contact/');

    // OR 
    await contactPage.navigate();

// Fill out the details
    //    await page.locator('.contact-name input').fill('Chandan')
    //    await page.locator('.contact-email input').fill('Chandan123@gmail.com')
    //    await page.locator('.contact-phone input').fill('6371890198')
    //    await page.locator('.contact-message textarea').fill('Hello Chandan')

    // OR 

    // await contactPage.nameInput.fill('Chandan Sahu')
    // await contactPage.emailInput.fill('sahuchandan678@gmail.com')
    // await contactPage.phoneInput.fill('7787905932')
    // await contactPage.messageInput.fill('Hello i am ready to test')
     
    //OR

    await contactPage.SubmitForm('Chandan','sahuchandan678@gmail.com','7787906875','Heelooo');

       //Click Submit Button

     //   await page.locator('button[type=submit]').click();

     //OR 
    // await contactPage.SubmitBtn.click();


       //Verify the Success message

    //   const SuccessAlert = await page.locator('div[role="alert"]')

    //Or 
    const SuccessAlert =contactPage.SuccessAlertTest;

       await expect(SuccessAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')



})

})