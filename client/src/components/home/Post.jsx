import { Box, Typography ,makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    container:{
        height:350,
        margin:10,
        border:"1px solid #d3cede",
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        "& > *":{
            padding:"0 5px 5px 5px"
        }
    },
    image:{
        height:150,
        width:"100%",
        objectFit:"cover",
        borderRadius:"10px 1px 0 0"
    },
    text:{
        color:"#878787",
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        textAlign:"center"
    },
    detail:{
        wordBreak:"break-word",
        fontWeight:600,
        fontFamily: '"Otomanopee One", sans-serif'
    }
});

function Posts({post}) {

    const classes = useStyles();
    const url = post.picture || "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__480.jpg";

 return (
     <Box className={classes.container}>
          <img className={classes.image} src={url} alt="coffee" />
          <Typography className={classes.text}>{post.categories}</Typography>
          <Typography className={classes.heading}>{post.title}</Typography>
          <Typography className={classes.text}>Author : {post.username}</Typography>
          <Typography className={classes.detail}>{post.description}</Typography>
     </Box>
 )
};

export default Posts;