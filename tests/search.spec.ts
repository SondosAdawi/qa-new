import { test, expect } from '@playwright/test';

test.describe('Search Feature', () => {

  // 1️⃣ Structure: Search input is visible
  test('search input is visible', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('[data-test="search-query"]')
    ).toBeVisible();
  });

  // 2️⃣ Validation: Search with empty input
  test('search with empty input', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Enter');

    // الموقع يبقى بنفس الصفحة
    await expect(page).toHaveTitle(/Practice Software Testing/i);
  });

  // 3️⃣ Functional: Search with valid keyword
  test('search with valid keyword', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="search-query"]').fill('hammer');
    await page.keyboard.press('Enter');

    // ✅ تحقق إن في نتائج
    const results = page.locator('.card');
    await expect(results.first()).toBeVisible();
  });

});
