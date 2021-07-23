import express from "express";

//import { updatePost } from "../../client/src/service/api.js";
import { createPost,getAllPosts,getPost,updatePost,deletePost, } from "../controller/postController.js";
import {uploadImage,getImage} from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create",createPost);

router.get("/posts",getAllPosts);

router.get("/post/:id",getPost);

router.post("/update/:id",updatePost);

router.delete("/delete/:id",deletePost);

router.post("/file/upload",upload.single("file"),uploadImage); //multer syntax

router.get("/file/:filename",getImage);

export default router;