// import and configure the dotenv in the main file
// require('dotenv').config({path:'./env'})   // problem is that here is a require statement and further we have import statement
// improve version
import dotenv from "dotenv"
import connDB from "./db/index.js";

// config dotenv
// use this as a exparimental feature (go to the package.json file) and load all the environmental variable
dotenv.config({
    path:'./env'
})

connDB()












/*
import express from "express";
const app = express()
// use IIFE - a function that is called immediately after it is defined
// ; - for cleaness
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        //database is connected but our express app did not responce then we use the liseners 
        app.on("error", (error)=>{
            console.log("application is not able to talk to database");
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ",ERROR)
        throw error
    }
})()
    */