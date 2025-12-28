import { test, expect } from '@playwright/test';

test.describe('Search Feature', () => {

  
  test('search input is visible', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('[data-test="search-query"]')
    ).toBeVisible();
  });

 
  test('search with empty input', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Enter');


    await expect(page).toHaveTitle(/Practice Software Testing/i);
  });

  test('search with valid keyword', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="search-query"]').fill('hammer');
    await page.keyboard.press('Enter');

   
    const results = page.locator('.card');
    await expect(results.first()).toBeVisible();
  });

});
