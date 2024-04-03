// routes/data.js
import express from 'express';
import KPI from '../models/KPI.js';
import Product from '../models/Product.js';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { kpi, products, transaction } = req.body;

    // Drop existing data from the database
    await KPI.deleteMany({});
    await Product.deleteMany({});
    await Transaction.deleteMany({});

    // Insert new data into the database
    await KPI.insertMany(kpi);
    await Product.insertMany(products);
    await Transaction.insertMany(transaction);

    res.status(200).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading data:', error);
    res.status(500).json({ message: 'Error uploading data' });
  }
});

export default router;