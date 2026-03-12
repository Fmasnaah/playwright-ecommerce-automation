import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test('User adds product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();

  await inventoryPage.verifyCartCount();

});