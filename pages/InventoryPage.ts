import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  private readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/inventory\.html$/);
    await expect(this.title).toHaveText('Products');
  }
}
