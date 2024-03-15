import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    
    //Navigate to the URL
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {

    
  await page.goto('https://playwright.dev/');

  // Create a locator --Interactions
  // Click the get started link.
  //In most cases, it'll be written in one line:
   await page.getByRole('link', { name: 'Get started' }).click();

              //OR 
// const getStarted = page.getByRole('link', { name: 'Get started' });

// // Click it.
// await getStarted.click();

        //Assertions
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});