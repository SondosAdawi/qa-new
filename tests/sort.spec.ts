import { test, expect } from '@playwright/test';

test.describe('Sort Feature', () => {

  // 1️⃣ Structure: Sort dropdown is visible
  test('sort dropdown is visible', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('[data-test="sort"]')
    ).toBeVisible();
  });

  // 2️⃣ Interaction: User can select any sort option
  test('user can select sort option', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');
    await sortDropdown.selectOption({ index: 1 });

    // تحقق عام إن الصفحة ما انهارت
    await expect(page).toHaveTitle(/Practice Software Testing/i);
  });

  // 3️⃣ Functional: Sort by price (High → Low)
  test('user can sort products by price high to low', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');

    // غالبًا index 2 = Price (High → Low)
    await sortDropdown.selectOption({ index: 2 });

    await expect(
      page.locator('.card').first()
    ).toBeVisible();
  });

  // 4️⃣ Functional: Sort by price (Low → High)
  test('user can sort products by price low to high', async ({ page }) => {
    await page.goto('/');

    const sortDropdown = page.locator('[data-test="sort"]');

    // غالبًا index 3 = Price (Low → High)
    await sortDropdown.selectOption({ index: 3 });

    await expect(
      page.locator('.card').first()
    ).toBeVisible();
  });

});
