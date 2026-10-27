import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

test('API 1: Get All Products List', async ({ request }) => {
  const response = await request.get(
    'https://automationexercise.com/api/productsList'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.responseCode).toBe(200);
  expect(Array.isArray(responseBody.products)).toBe(true);
  expect(responseBody.products.length).toBe(43);
});

test('ReqRes: Create user', async ({ request }) => {
  const basePage = new (class extends BasePage {})(null as any);
  const userName = await basePage.getUserName();
  console.log(userName);
});
