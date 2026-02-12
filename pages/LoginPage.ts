import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginBtn: Locator;
  private readonly error: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.error = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveURL(/saucedemo\.com/);
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async expectErrorContains(text: string) {
    await expect(this.error).toBeVisible();
    await expect(this.error).toContainText(text);
  }
}
