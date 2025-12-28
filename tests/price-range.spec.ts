import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {

  test('price range section is visible to the user', async ({ page }) => {
    await page.goto('/');

    
    await expect(
      page.getByRole('heading', { name: /filters/i })
    ).toBeVisible();

    
    
    await expect(
      page.getByRole('heading', { name: /price range/i })
    ).toBeVisible();
  });

});
