import express from 'express'
import { getProducts } from '../service/products.service.js';

const router = express.Router();

router.get('/products', handleGetProducts.bind(this));

function handleGetProducts(_req, res) {
    getProducts()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }))
}

export default router