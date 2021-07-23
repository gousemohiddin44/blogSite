import React, {useState,useEffect} from "react"
import {Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import {createPost , uploadFile} from "../../service/api";
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
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:10
    },
    textfeild:{
        flex:1,
        margin:"0 30px",
        fontSize:25
    },
    textarea:{
        marginTop:20,
        width:"100%",
        border:"none",
        fontSize:18,
        "&:focus-visible":{
            outline:"none"
        }
    }
}));

const initialValues = {
    title:"",
    description:"",
    picture:"",
    username:"GouseMohiddin",
    categories:"All",
    createdDate: new Date()
}

function CreateView(){

    const classes = useStyles();
    
    const [post,setPost] = useState(initialValues);
    const [file,setFile] = useState();
    const history = useHistory();
    const [image,setImage] = useState();

    const url=post.picture ? post.picture : "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"


    useEffect(()=>{
        const getImage = async ()=>{
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    },[file]);

    const handleChange = (e)=>{
        setPost({...post , [e.target.name]:e.target.value});
    };

    const savePost = async ()=>{
        await createPost(post);
        history.push("/");
    }

    return (
    <Box className={classes.container}>
        <img src={url} alt="img" className={classes.image} />

        <FormControl className={classes.form}>
            <label htmlFor="fileinput">
            <AddCircle fontSize="large" color="action" />
            <input type="file" id="fileinput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
            </label>

            <InputBase onChange={(e)=>handleChange(e)} name="title" placeholder="title" className={classes.textfeild} />
            <Button variant="contained" color="primary" onClick={savePost}>Publish</Button>
        </FormControl>
        <TextareaAutosize onChange={(e)=>handleChange(e)} name="description" minRows={5} placeholder="Tell your story..." className={classes.textarea} />
            
    </Box>
    )
};

export default CreateView;