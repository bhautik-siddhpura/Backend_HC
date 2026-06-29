// require("dotenv").config({path: "./.env"})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
 
dotenv.config( {
    path : "./.env"
})


connectDB()

// execute if connectDB() process work successfully
.then( () => {
    const PORT = process.env.PORT
    app.listen( PORT|| 8000 , () => {
        console.log(`start express server on port ${PORT}`);
        
    })
})

// execute if connectDB() process NOT work successfully
.catch( (err) => {
    console.log( "not server connected" , err);
    
} )





/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// Not prefer this method where port abd DB boht at once place contain info about them
import express from 'express'

const app = express() 

( async() => {
    try {

       await mongoose.connect(`${process.env.MONGODB_URI} , ${DB_NAME}`)

       app.on( "error" , (error) => {
            console.log("Error..." , error);
            throw error
       })

       app.listen( process.env.PORT , () => {
            console.log(`process listening ${process.env.PORT}`);
       })
        
    } catch (error) {
        console.log("Error : " , error);
        throw error
    }
} )()

*/