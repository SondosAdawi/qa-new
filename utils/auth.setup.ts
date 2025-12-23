import { chromium } from '@playwright/test';
import 'dotenv/config';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.fill('#email', 'customer@practicesoftwaretesting.com');
  await page.fill('#password', 'welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL(/account/);

  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
