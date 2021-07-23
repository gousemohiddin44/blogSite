import mongoose from "mongoose";

const connection = async ()=>{
    try {
        const url = "mongodb+srv://Gouse:ReactBlog@blogweb.yw9it.mongodb.net/REACTBLOG?retryWrites=true&w=majority"
    
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
        console.log("MongoDB connected...");

    } catch (error) {
        console.log("Error while connecting to MongoDB ",error);
    }
   
};

export default connection;