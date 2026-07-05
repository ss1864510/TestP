import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
   await page.screenshot({ path: 'homepage.png', fullPage: true }); 
  await expect(page).toHaveScreenshot('homepage.png',{fullPage:true});
  await expect(page.getByText('Docs')).toBeVisible();

});