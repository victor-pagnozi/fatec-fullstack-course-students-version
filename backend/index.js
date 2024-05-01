import express from 'express';
import { initializeDatabase } from './config/database.js';
import cors from 'cors';
import { productController } from './controller/product.controller.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use(cors());

await initializeDatabase();

productController(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})