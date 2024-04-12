import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import transactionRoutes from "./routes/transaction.js";
import Product from "./models/Product.js";
import KPI from "./models/KPI.js";
import Transaction from "./models/Transaction.js";
import productRoutes from "./routes/product.js";
import { kpis, products, transactions } from "./data/data.js";
import fs from 'fs';
import dataRoutes from './routes/data.js';

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json({ limit: Infinity }));
app.use(bodyParser.json({ limit: Infinity })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

// function writeJSONToFile(data, filename) {
//   fs.writeFileSync(`./data/${filename}.json`, JSON.stringify(data, null, 2));
//   console.log(`${filename}.json file created successfully!`);
// }

// writeJSONToFile(kpis, 'kpis');
// writeJSONToFile(products, 'products');
// writeJSONToFile(transactions, 'transactions');
// Setting up routes

app.use("/kpi", kpiRoutes);
app.use('/data', dataRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
app.options('*', cors());

app.get("/", (req, res) => {
  res.send("Hello from Finalysis API");
});


const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise; 

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));

console.log("hello");
