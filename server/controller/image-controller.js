import mongoose from "mongoose";
import grid from "gridfs-stream";
const url ="http://localhost:8000"

const conn = mongoose.connection;

let gfs;
conn.once("open",()=>{
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection("fs");
})

export const uploadImage = (req,res)=>{
   try {
    if(!req.file){
        return res.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${req.file.filename}`

    res.status(200).json(imageUrl);
   } catch (error) {
       res.status(500).json(error);
   }
}

export const getImage = async (req,res)=>{
    try {
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json("Failed to fetch the image");
    }
}