import React,{useEffect, useState} from "react";
import Post from "./Post";
import {Grid} from "@material-ui/core";
import {Link , useLocation} from "react-router-dom";
import {getAllPosts} from "../../service/api";

function Posts() {

    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
    //let posts =[1,2,3,4,5,6,7,8,9];

    useEffect(()=>{
        const fetchData = async ()=>{
            let data = await getAllPosts(search);
            setPosts(data);
        }
        fetchData();
    },[search])

 return (
 posts.map(post=>{
     return (
    <Grid item lg={3} xs={12}>
        <Link to={`/details/${post._id}`} style={{textDecoration:"none",color:"inherit"}} >
            <Post post={post} />
        </Link>
    </Grid>
     )
 })
 
 )
};

export default Posts;