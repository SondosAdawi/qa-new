import { test, expect } from '@playwright/test';

test.describe('Sort Feature', () => {

  
  test('sort dropdown is visible', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('[data-test="sort"]')
    ).toBeVisible();
  });

  test('user can select sort option', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');
    await sortDropdown.selectOption({ index: 1 });

    
    await expect(page).toHaveTitle(/Practice Software Testing/i);
  });

  
  test('user can sort products by price high to low', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');

    
    
    await sortDropdown.selectOption({ index: 2 });

    await expect(
      page.locator('.card').first()
    ).toBeVisible();
  });

  
  
  test('user can sort products by price low to high', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');

    
    await sortDropdown.selectOption({ index: 3 });

    await expect(
      page.locator('.card').first()
    ).toBeVisible();
  });

});
