import mongoose from "mongoose";
const connectDB = (url)=>{
// this is use when we are working with Search functionality    
 mongoose.set('strictQuery',true );
 mongoose.connect(url).then(()=>{   
    console.log("Mongoodb is Connected");
 }).catch((err)=>{console.log(err);})
}



export default connectDB;