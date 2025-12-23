import { test, expect } from '@playwright/test';

test.describe('Brand Filter Feature', () => {

  // NOTE: This test verifies a known bug where selecting a brand does not update the products list
  test('Brand filter - known bug (products do not update)', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    const productsBefore = await page.locator('.card').count();
    expect(productsBefore).toBeGreaterThan(0);

    const brandSection = page
      .getByRole('heading', { name: /by brand/i })
      .locator('..');

    const brandCheckbox = brandSection.getByLabel('ForgeFlex Tools');
    await expect(brandCheckbox).toBeVisible();

    await page.waitForTimeout(1000);
    await brandCheckbox.click();
    await page.waitForTimeout(2000);

    const productsAfter = await page.locator('.card').count();
    expect(productsAfter).toBe(productsBefore);
  });

});
