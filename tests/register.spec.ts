import { test, expect } from '@playwright/test';

test.describe('Register Feature', () => {

  test('register page fields are visible', async ({ page }) => {
    await page.goto('/auth/register');

    await expect(page.locator('[data-test="first-name"]')).toBeVisible();
    await expect(page.locator('[data-test="last-name"]')).toBeVisible();
    await expect(page.locator('[data-test="email"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(
      page.getByRole('button', { name: /register/i })
    ).toBeVisible();
  });

  test('register with empty fields', async ({ page }) => {
    await page.goto('/auth/register');

    await page.getByRole('button', { name: /register/i }).click();

    await expect(page).toHaveURL(/\/auth\/register/);
  });

  test('user fills register form and submits', async ({ page }) => {
    await page.goto('/auth/register');

    await page.locator('[data-test="first-name"]').fill('Test');
    await page.locator('[data-test="last-name"]').fill('User');
    await page.locator('[data-test="email"]').fill(
      `test${Date.now()}@example.com`
    );
    await page.locator('[data-test="password"]').fill('Test@12345');

    await page.getByRole('button', { name: /register/i }).click();

    
    await expect(page).toHaveURL(/register|login/);
  });

});
