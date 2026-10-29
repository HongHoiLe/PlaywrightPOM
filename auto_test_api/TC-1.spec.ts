import { test, expect } from '@playwright/test';

test('API: create, update, delete', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'Đăng',
            job: 'Tester',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody.name).toBe('Đăng');
    expect(responseBody.job).toBe('Tester');
    expect(responseBody.id).toBeTruthy();

    const employeeID = responseBody.id;

    const updateReponse = await request.put('https://reqres.in/api/users/${employeeID}', {
        data: {
            name: 'Đăng',
            job: 'Test Lead',
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    expect(updateReponse.status()).toBe(200);

    const updateReponseBody = await updateReponse.json();
    expect(updateReponseBody.name).toBe('Đăng');
    expect(updateReponseBody.job).toBe('Test Lead');

    const deleteResponse = await request.delete(`https://reqres.in/api/users/${employeeID}`);

    expect(deleteResponse.status()).toBe(204);
});