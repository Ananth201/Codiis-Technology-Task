import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config() 


import UserSignupSignin from "./routes/signupsignin.routes.js";


//Middlewares
const app = express()
app.use(express.json())
app.use(cors())

//Routes
app.use('/signup',UserSignupSignin)
app.use('/signin',UserSignupSignin)


//DataBase Connection
mongoose.connect('mongodb://localhost/Hotstar_Clone')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


//Server Running Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));