import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {

    private readonly usernameTextBox: Locator
    private readonly passwordTextBox: Locator
    private readonly loginButton: Locator
    private readonly shoppingCartIcon: Locator
    private readonly errorMessage: Locator

    constructor(private page: Page) {
        this.usernameTextBox = page.getByPlaceholder('Username')
        this.passwordTextBox = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.shoppingCartIcon = page.locator('a.shopping_cart_link')
        this.errorMessage = page.getByRole("heading", { name: 'Epic sadface: Sorry, this user has been locked out.' })
    }

    async fillUsername(username: string) {
        await this.usernameTextBox.fill(username)
    }

    async fillPassword(password: string) {
        await this.passwordTextBox.fill(password)
    }

    async clickOnLogin() {
        await this.loginButton.click()
    }

    async loginWithCredentials(username: string, password: string) {
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async isUserLoggedIn() {
        await expect(this.shoppingCartIcon).toBeVisible()
    }

    async getErrorMessageLogin() {
        return await this.errorMessage.textContent()
    }

}