import React,{useState,useEffect} from "react";
import {Box,makeStyles, Typography} from "@material-ui/core";
import {Edit,Delete} from '@material-ui/icons';
import {Link} from "react-router-dom";
import { getPost,deletePost} from "../../service/api";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    image:{
        width:"100%",
        height:"50vh",
        objectFit:"cover"
    },
    container:{
        padding:"0 100px",
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    icons:{
        float:"right"
    },
    icon:{
        margin:5,
        border:"1px solid #878787",
        borderRadius:5,
        padding:5
    },
    heading:{
        fontSize:36,
        fontWeight:600,
        textAlign:"center",
        margin:"15px 0 10px 0"
    },
    subheading:{
        color:"#878787",
        display:"flex",
        [theme.breakpoints.down('sm')]:{
            display:"block"
        },
        margin:"20px 0"
    },
    link:{
        textDecoration:"none",
        color:"inherit"
    }
}));

function DetailView({match}) {

    const url="https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    const classes = useStyles();
    const history = useHistory();

    const [post,setPost] = useState({});

    useEffect(()=>{
        const fetchData = async (id)=>{
            let data = await getPost(match.params.id);
            setPost(data);
            console.log(data);
        };
        fetchData();
    },[]);

    const deleteBlog = async ()=>{
        await deletePost(post._id);
        history.push("/");
    }

    return (<Box className={classes.container}>
        <img src={post.picture || url} alt="desk" className={classes.image} />
        <Box className={classes.icons}>
            <Link to={`/update/${post._id}`}> <Edit className={classes.icon} /> </Link>
            <Delete  onClick={deleteBlog} className={classes.icon} color="error" />
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>

        <Box className={classes.subheading}>
            <Link to={`/?username=${post.username}`} className={classes.link}>
            <Typography>Author:<span style={{fontWeight:650}}> {post.username}</span></Typography></Link>
            <Typography style={{marginLeft:"auto"}}>{new Date(post.createdDate).toDateString()}</Typography>
        </Box>
        <Typography>
            {post.description}
        </Typography>
    </Box>)
};

export default DetailView;