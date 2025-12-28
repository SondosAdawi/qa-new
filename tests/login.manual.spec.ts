import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

  test('login page fields are visible (valid structure)', async ({ page }) => {
    await page.goto('/auth/login');

    await expect(page.locator('[data-test="email"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
  });

  test('login with empty email and password', async ({ page }) => {
    await page.goto('/auth/login');

    await page.getByRole('button', { name: /login/i }).click();

   
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test('login with email filled and password empty', async ({ page }) => {
    await page.goto('/auth/login');

    await page.locator('[data-test="email"]').fill('test@test.com');
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/\/auth\/login/);
  });

 
test('login with valid credentials (successful login)', async ({ page }) => {
  await page.goto('/auth/login');

  await page.locator('[data-test="email"]').fill(process.env.USER_EMAIL!);
  await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD!);

  await page.getByRole('button', { name: /login/i }).click();

  await page.waitForLoadState('networkidle');

  
  await expect(page.locator('[data-test="email"]')).toHaveCount(0);
  await expect(page.locator('[data-test="password"]')).toHaveCount(0);
});

});
