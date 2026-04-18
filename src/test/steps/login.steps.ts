import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';
import {expect} from '@playwright/test';

let loginPage: LoginPage;

Given('the user is on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await this.page.goto('https://www.saucedemo.com/');
});

When('the user logs in with valid credentials', async function () {
    await loginPage.loginWithCredentials(users.standard.username, users.standard.password);
});

When('the user attempts to log in with a locked out user', async function () {
    await loginPage.loginWithCredentials(users.locked.username, users.locked.password);
});

Then('the user should be redirected to the products page', async function () {
    await loginPage.isUserLoggedIn();
});

Then('an error message should be displayed', async function () {
    await expect(await loginPage.getErrorMessageLogin()).toBe('Epic sadface: Sorry, this user has been locked out.');
});