import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { users } from '../../utils/testData.js';

test('@regression API response can be used as a test data source', async ({ request, page }) => {
  const apiResponse = await request.get('https://jsonplaceholder.typicode.com/users/1');

  expect(apiResponse.ok()).toBeTruthy();

  const user = await apiResponse.json();
  expect(user.id).toBe(1);

  // UI validation is intentionally kept independent from the public API.
  // This demonstrates separating API setup/verification from UI assertions.
  const login = new LoginPage(page);
  await login.goto();

  await expect(login.username).toBeVisible();
});
