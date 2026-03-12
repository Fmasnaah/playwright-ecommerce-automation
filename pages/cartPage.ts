import { Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async clickCheckout() {
    await this.page.click('#checkout');
  }

  async fillCheckoutDetails() {
    await this.page.fill('#first-name', 'Test');
    await this.page.fill('#last-name', 'User');
    await this.page.fill('#postal-code', '12345');
  }

  async continueCheckout() {
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }
}