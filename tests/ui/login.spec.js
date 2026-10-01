import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { users } from '../../utils/testData.js';

test.describe('Login', () => {
  test('@smoke valid user can login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.valid.username, users.valid.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('@regression locked user receives an error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.locked.username, users.locked.password);
    

    await expect(login.errorMessage).toContainText('locked out');
  });
});
