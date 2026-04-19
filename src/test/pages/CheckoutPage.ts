import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) { }

    async clickCheckout() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(postalCode);
    }

    async continueCheckout() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async validateOverview(product: {
        name: string;
        description: string;
        price: string;
    }) {
        await expect(this.page.locator('.inventory_item_name', { hasText: product.name })).toBeVisible();

        await expect(this.page.locator('.inventory_item_desc', { hasText: product.description })).toBeVisible();

        await expect(this.page.locator('.inventory_item_price', { hasText: product.price })).toBeVisible();
    }

    async finishPurchase() {
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }

    async validateConfirmation() {
        await expect(this.page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
    }
}