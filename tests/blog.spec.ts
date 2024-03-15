import { test, expect } from '@playwright/test';
import Blogpage from '../pages/blog.page';

test.describe('Blog', () => {
    let blogPage :Blogpage;

    test('Verify the recent post count and verify the list of each item  ', async ({ page }) => {
      blogPage = new Blogpage(page)

      //open URL 
        await page.goto('https://practice.sdetunicorns.com/blog/')
        // OR

    await blogPage.navigate();

        // get the recent post list item
       // const  recentPostList = await page.locator('#recent-posts-3 ul li')
       // try 
       // OR 
        const recentPostList=blogPage.recentPostLink

       //Loop through the list and assert the char length
       for (const el of await recentPostList.elementHandles()) {
        console.log((await el.textContent()).length);
        expect((await el.textContent()).length).toBeGreaterThan(10)

       }



       //aseert the total length
       expect(await recentPostList.count()).toEqual(5)
    
        
    })
    
    
})

