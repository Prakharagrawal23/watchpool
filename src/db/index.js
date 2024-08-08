import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connDB = async () => {
    try {
        // mongosse give the return object 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
        // it is for in which host we are going to connect 
        console.log(`\n mongo db connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error);
        //node.js
        // process - this current aplication is running on some process and this is the reference of that process
        process.exit(1)
    }
}

export default connDB