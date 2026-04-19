import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
    private readonly cartIcon: Locator;
    private readonly cartBadge: Locator;

    constructor(private page: Page) {
        this.cartIcon = page.locator('a.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addProductByName(productName: string) {
        const product = this.page
            .locator('#inventory_container .inventory_item')
            .filter({ hasText: productName });

        await expect(product).toBeVisible();

        await product.getByRole('button', { name: 'Add to cart' }).click();

    }

    async getCartItemCount(): Promise<number> {
        const text = await this.cartBadge.textContent();
        return Number(text ?? 0);
    }

    async goToCart() {
        await this.cartIcon.click();
    }

}