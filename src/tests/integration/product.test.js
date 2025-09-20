import request from 'supertest';
import express from 'express';
import router from '../../route/index.route.js';
import { jest } from '@jest/globals';


const app = express();
app.use(express.json());
app.use(router);

global.fetch = jest.fn();

describe('GET /products', () => {
    it('responde con código 200 y productos', async () => {
        const mockData = { products: [{ id: 1, name: 'Test Product' }] };
        fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });

        const res = await request(app).get('/products');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(mockData);
    });

    it('responde con código 500 si fetch falla', async () => {
        fetch.mockRejectedValue(new Error('fail'));

        const res = await request(app).get('/products');

        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty('message', 'Error fetching products');
    });
});
