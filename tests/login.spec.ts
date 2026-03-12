import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User should login successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

});