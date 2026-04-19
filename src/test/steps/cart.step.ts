import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { users, products } from '../utils/testData';
import { expect } from '@playwright/test';

let productsPage: ProductsPage;
let cartPage: CartPage;
let loginPage: LoginPage;

Given('the user is logged in', async function () {
    loginPage = new LoginPage(this.page);

    await this.page.goto('https://www.saucedemo.com/');

    await loginPage.loginWithCredentials(
        users.standard.username,
        users.standard.password
    );
});

When('the user adds a product to the cart', async function () {
    productsPage = new ProductsPage(this.page);
    this.selectedProduct = products.jacket;
    await productsPage.addProductByName(this.selectedProduct.name);
});

When('the user navigates to the shopping cart', async function () {
    await productsPage.goToCart();

    cartPage = new CartPage(this.page);
});

Then('the cart icon should show {int} items', async function (count: number) {
    const actualCount = await productsPage.getCartItemCount();
    expect(actualCount).toBe(count);
});

Then('the selected product should be displayed in the shopping cart', async function () {
    await cartPage.isProductVisible(products.jacket.name);
});