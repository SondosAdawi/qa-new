import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly firstProductCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProductCard = page.locator('.card').first();
  }

  async gotoHome() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.page.waitForLoadState('networkidle');
  }

  async openFirstProduct() {
    await expect(this.firstProductCard).toBeVisible();
    await this.firstProductCard.click();
  }

  async addToCart() {
    const addToCartButton = this.page.getByRole('button', { name: /add to cart/i });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
  }

  async openCart() {
    const cartIcon = this.page.locator('[data-test="nav-cart"]');
    await expect(cartIcon).toBeVisible();
    await cartIcon.click();
  }

  async removeProductFromCart() {
    // زر X الحقيقي (آخر زر بالصف)
    const removeButton = this.page.locator('button.btn-danger').first();
    await expect(removeButton).toBeVisible();
    await removeButton.click();
  }
}
