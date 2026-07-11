import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
});