import { test, expect } from '@playwright/test';

test('Remove item from cart - No Login', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/#/');
  await expect(page.locator('.card-img-top')).toHaveCount(9, { timeout: 20000 });
  console.log('✅ الصفحة الرئيسية تحملت كامل');

  await page.locator('.card').first().click();
  await expect(page.getByRole('heading', { name: 'Combination Pliers' })).toBeVisible({ timeout: 10000 });
  

 
  await page.getByRole('button', { name: 'Add to cart' }).click();
  

  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.url()).toContain('/checkout');
 

  await page.locator('.btn.btn-danger').click();

 
  await expect(page.getByText('Your cart is empty')).toBeVisible({ timeout: 10000 });
  
});