import { test, expect } from '@playwright/test';

test('open home page', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveTitle(/Practice Software Testing/i);
});
