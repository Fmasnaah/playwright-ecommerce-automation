import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';

test('User completes checkout successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();

  await cartPage.openCart();

  await cartPage.clickCheckout();

  await cartPage.fillCheckoutDetails();

  await cartPage.continueCheckout();

  await cartPage.finishOrder();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});