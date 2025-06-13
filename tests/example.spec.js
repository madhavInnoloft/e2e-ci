import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText('Playwright Test App')).toBeVisible()
})

test('button click test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const button = page.getByTestId('test-button')
  await expect(button).toBeVisible()
  await button.click()
})