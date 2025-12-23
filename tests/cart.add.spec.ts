import { test, expect } from '@playwright/test';

test.describe('Add to Cart Feature', () => {

  test('user selects a specific product from home and adds it to cart', async ({ page }) => {

    // 1️⃣ الصفحة الرئيسية
    await page.goto('/');

    // 2️⃣ اختيار كارد معيّن بالاسم
    const productCard = page
      .locator('.card')
      .filter({ hasText: 'Combination Pliers' })
      .first();

    await expect(productCard).toBeVisible();
    await productCard.click();

    // 3️⃣ صفحة المنتج
    await expect(page).toHaveURL(/product/);

    // 4️⃣ Add to cart
    const addToCartButton = page.getByRole('button', { name: /add to cart/i });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // 5️⃣ انتظار بسيط لتحديث السلة
    await page.waitForTimeout(1000);

    // 6️⃣ الضغط على أيقونة الكارت
    const cartIcon = page.locator('[data-test="nav-cart"]');
    await expect(cartIcon).toBeVisible();
    await cartIcon.click();

    // 7️⃣ التحقق إن المنتج موجود بالسلة
    await expect(
      page.locator('[data-test="product-title"]')
    ).toBeVisible();

  });

});
