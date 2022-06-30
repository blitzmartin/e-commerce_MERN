import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose.connect(process.env.DB_SERVER)
.then(() => {
    console.log('Connected to MongoDB Atlas...')
})
.catch(err => {
    console.log(err.message)
});

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}...`)
});