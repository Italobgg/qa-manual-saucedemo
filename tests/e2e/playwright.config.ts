import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Auth', () => {
  test('TC-001 — Login válido', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await inventory.expectLoaded();
  });
});
