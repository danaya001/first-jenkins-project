import { test } from '@playwright/test';

test.describe('Test Group', () => {
    //create before each
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
        await page.waitForTimeout(3000);
    });

  test('Test A', async ({ page }) => {

  });

  test('Test B', async ({ page }) => {

  });

  test('Test C', async ({ page }) => {

  });
});