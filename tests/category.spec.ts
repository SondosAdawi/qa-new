import { test, expect } from '@playwright/test';

test.describe('Category Filter Feature', () => {

  test('user can select a category filter', async ({ page }) => {

    await page.goto('/');

    // اختيار أول category (فلتر موجود بالواجهة)
    const categoryCheckbox = page
      .locator('[data-test^="category-"]')
      .first();

    await expect(categoryCheckbox).toBeVisible();

    // المستخدم يختار التصنيف
    await categoryCheckbox.check();

    // التأكد إن الاختيار تم
    await expect(categoryCheckbox).toBeChecked();
  });

});
