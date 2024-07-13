import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb connected');
  })
  .catch((err) => {
    console.log(err);
  });
  
//express config
const app = express();
//middle ware allowing to use json data
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

