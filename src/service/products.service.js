import config from '../config/index.js';

export async function getProducts() {
    console.log('Fetching data\n')
    const url = config.DUMMY_JSON_URl;

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error('Error fetching products')
    }
}