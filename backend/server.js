import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import products from "./data/products.js";
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
const port = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.use('/api/products',productRoutes)
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{console.log(`server listening on port:${port}`) })