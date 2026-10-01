import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { users } from '../../utils/testData.js';

test('@regression products can be sorted by price', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(users.valid.username, users.valid.password);
  await inventory.sortLowToHigh();

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(price => Number(price.replace('$', '')));

  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
});
