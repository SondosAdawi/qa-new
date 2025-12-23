import { defineConfig } from '@playwright/test';
import 'dotenv/config'; // 👈 مهم جدًا لقراءة .env

export default defineConfig({
  workers: 1,

  use: {
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    headless: false,          // يفتح المتصفح
    launchOptions: {
      slowMo: 2000,           // يبطّئ الحركة
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
  {
    name: 'chromium',
    use: { browserName: 'chromium' },
  },
  {
    name: 'firefox',  // 👈 هذا المتصفح الجديد
    use: { browserName: 'firefox' },
  }
],
});
