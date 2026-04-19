import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  private readonly cartItems: Locator;

  constructor(private page: Page) {
    this.cartItems = page.locator('.cart_item');
  }

  async isProductVisible(productName: string) {
    await expect(
      this.page.locator('.inventory_item_name', { hasText: productName })
    ).toBeVisible();
  }

  async getItemsCount(): Promise<number> {
    return await this.cartItems.count();
  }
}