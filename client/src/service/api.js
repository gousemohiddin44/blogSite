import axios from "axios";

const url = "http://localhost:8000";

export async function createPost(post){
    try {
        return await axios.post(`${url}/create`,post)  
    } catch (error) {
        console.log("Error while calling createPost API ",error);
    }
    
};

export const getAllPosts = async (param)=>{
    try {
        let res  = await axios.get(`${url}/posts${param}`);
        return res.data;
    } catch (error) {
        console.log("Error while calling getAllPosts API ",error);
    }
};

export const getPost = async (id)=>{
    try {
        let res = await axios.get(`${url}/post/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error while calling getPost API",error);
    }
};

export const updatePost = async (id,post) =>{
    try {
        await axios.post(`${url}/update/${id}`,post);
    } catch (error) {
        console.log("Error while calling updatePost API ",error);
    }
};

export const deletePost = async (id) =>{
    try {
        await axios.delete(`${url}/delete/${id}`);

    } catch (error) {
        console.log("Error while calling deletePost API ",error);
    }
};

export const uploadFile = async (data)=>{
    try {
        return await axios.post(`${url}/file/upload`,data);
        
    } catch (error) {
        console.log("Error while uploading the image",error);
    }
};