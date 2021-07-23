import React from "react";
import {makeStyles,Box, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    image:{
        backgroundImage:`url(${`https://cdn.pixabay.com/photo/2017/08/07/07/06/coffeehouse-2600877__340.jpg`})`,
        width:"100%",
        height:"50vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
        '& :first-child':{
            fontSize:70,
            color:"#fff",
            lineHeight:1
        },
        '& :last-child':{
            fontSize:30,
            color:"white"
        },
    },
});

function Banner(){
    
    const classes = useStyles();

    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>By Gouse Mohiddin</Typography>
        </Box>
    )

};

export default Banner;