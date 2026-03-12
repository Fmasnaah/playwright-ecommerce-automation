import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async verifyCartCount() {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  }
}