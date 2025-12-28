import { test, expect } from '@playwright/test';

test.describe('Category Filter Feature', () => {

  test('user can select a category filter', async ({ page }) => {

    await page.goto('/');

    
    const categoryCheckbox = page
      .locator('[data-test^="category-"]')
      .first();

    await expect(categoryCheckbox).toBeVisible();

    
    await categoryCheckbox.check();

  
    await expect(categoryCheckbox).toBeChecked();
  });

});
