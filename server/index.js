import express, { Router } from "express";
import connection from "./database/db.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app =express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

connection();

app.listen(PORT , ()=>{
    console.log("Server running on port "+PORT+"...");
});



