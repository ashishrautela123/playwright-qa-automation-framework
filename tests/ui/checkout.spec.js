import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';
import { users, customer } from '../../utils/testData.js';

test('@smoke complete checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(users.valid.username, users.valid.password);

  await expect(inventory.inventoryContainer).toBeVisible();

  await inventory.addBackpackToCart();
  await inventory.openCart();

  await expect(cart.cartItems).toHaveCount(1);

  await cart.checkout();
  await checkout.enterCustomerDetails(
    customer.firstName,
    customer.lastName,
    customer.postalCode
  );

  await checkout.continueToOverview();
  await checkout.finishOrder();

  await expect(checkout.completeHeader).toBeVisible();
});
