import config from '../../config/index.js';
import { getProducts } from '../../service/products.service.js';
import { jest } from '@jest/globals';

global.fetch = jest.fn();

describe('getProducts', () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it('debería retornar datos correctamente', async () => {
    const mockData = { products: [{ id: 1, name: 'Test Product' }] };
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const data = await getProducts();

    expect(fetch).toHaveBeenCalledWith(config.DUMMY_JSON_URL);
    expect(data).toEqual(mockData);
  });

  it('debería lanzar error si fetch falla', async () => {
    fetch.mockRejectedValue(new Error('fail'));

    await expect(getProducts()).rejects.toThrow('Error fetching products');
  });
});
