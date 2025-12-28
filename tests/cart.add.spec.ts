import { test, expect } from '@playwright/test';

test.describe('Add to Cart Feature', () => {

  test('user selects a specific product from home and adds it to cart', async ({ page }) => {

    
    await page.goto('/');

    
    const productCard = page
      .locator('.card')
      .filter({ hasText: 'Combination Pliers' })
      .first();

    await expect(productCard).toBeVisible();
    await productCard.click();

   
    await expect(page).toHaveURL(/product/);

   
    const addToCartButton = page.getByRole('button', { name: /add to cart/i });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    
    await page.waitForTimeout(1000);

   
    const cartIcon = page.locator('[data-test="nav-cart"]');
    await expect(cartIcon).toBeVisible();
    await cartIcon.click();

    
    await expect(
      page.locator('[data-test="product-title"]')
    ).toBeVisible();

  });

});
