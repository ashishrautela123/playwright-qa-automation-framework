import { test, expect } from '@playwright/test';

const API_BASE = 'https://jsonplaceholder.typicode.com';

test.describe('REST API validation', () => {
  test('@smoke GET users returns successful response', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users/1`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('name');
  });

  test('@regression POST creates a resource', async ({ request }) => {
    const payload = {
      title: 'Playwright API Test',
      body: 'Created during automated API validation',
      userId: 1
    };

    const response = await request.post(`${API_BASE}/posts`, {
      data: payload
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
    expect(body.userId).toBe(payload.userId);
  });

  test('@regression invalid resource returns 404', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users/999999`);

    expect(response.status()).toBe(404);
  });
});
