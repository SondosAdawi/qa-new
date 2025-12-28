import { defineConfig } from '@playwright/test';
import 'dotenv/config'; 

export default defineConfig({
  workers: 1,
 reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    headless: false,         
    launchOptions: {
      slowMo: 2000,           
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
    name: 'firefox',  
    use: { browserName: 'firefox' },
  }
],
});
