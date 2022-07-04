import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

mongoose.connect(process.env.DB_SERVER)
.then(() => {
    console.log('Connected to MongoDB Atlas...')
})
.catch(err => {
    console.log(err.message)
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}...`)
});