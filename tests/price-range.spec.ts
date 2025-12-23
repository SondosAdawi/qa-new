import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {

  test('price range section is visible to the user', async ({ page }) => {
    await page.goto('/');

    // التأكد إن قسم Filters موجود
    await expect(
      page.getByRole('heading', { name: /filters/i })
    ).toBeVisible();

    // ✅ التأكد إن عنوان Price Range موجود (محدد بدون strict mode)
    await expect(
      page.getByRole('heading', { name: /price range/i })
    ).toBeVisible();
  });

});
