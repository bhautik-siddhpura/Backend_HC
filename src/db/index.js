    import mongoose from "mongoose";
    import { DB_NAME } from "../constants.js";

// simple DB conncection code with standarized approch

const connectDB = async () => {
    try {
        
        const x = await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`MongoDB connection doing sucessfully !!! ${x.connection.host}`);
        //see DB being diff for diff host consider in manner where server , testing and for production have diff DB so for on which this one DB are there this confiramation we get 

    } catch (error) {
        console.log("Error exist " , error);
        process.exit(1)
        
    }
}

export default connectDB    