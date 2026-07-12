import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ssupdates123.blogspot.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Bigg Boss 5 Telugu' }).click();
  await page.goto('https://ssupdates123.blogspot.com/');
  await page.getByText('More…').click();
  await page.getByRole('link', { name: 'Earning ways' }).click();
  await page.locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search this blog' }).fill('ssnk');
  await page.getByRole('textbox', { name: 'Search this blog' }).press('Enter');
  await page.locator('#BlogSearch1').getByRole('img').click();
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(``);
  await expect(page.getByRole('heading', { name: 'Gold Investment Ideas - Beat' })).toBeVisible();
});