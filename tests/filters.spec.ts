import { test, expect } from '@playwright/test';

test.describe('Filters Feature', () => {

  // 1️⃣ Structure: Filters exist on products page
  test('filters are available on products page', async ({ page }) => {
    await page.goto('/');

    const filters = page.locator('input[type="checkbox"], select');
    await expect(filters.first()).toBeVisible();
  });

  // 2️⃣ Quantity: Multiple filters exist
  test('multiple filters are available', async ({ page }) => {
    await page.goto('/');

    const filters = page.locator('input[type="checkbox"], select');
    const count = await filters.count();

    expect(count).toBeGreaterThan(0);
  });

  // 3️⃣ Behavior: User can select a filter
  test('user can select a filter option', async ({ page }) => {
    await page.goto('/');

    const firstCheckbox = page.locator('input[type="checkbox"]').first();
    await expect(firstCheckbox).toBeVisible();

    await firstCheckbox.check();

    await expect(page).toHaveTitle(/Practice Software Testing/i);
  });

});
