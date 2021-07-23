import { AppBar, Toolbar,Typography,makeStyles } from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";

const useStyles = makeStyles({
    component:{
        backgroundColor:"#fff",
        color:"#000"
    },
    container:{
        justifyContent:"center",
        '& > *':{
            padding:20,
        }
    },
    link:{
        textDecoration:"none",
        color:"#000"
    }
});

function Header() {

    const classes = useStyles();
    const history = useHistory();

    const { oktaAuth, authState } = useOktaAuth();

    if(authState) return null;

    const login = async ()=> history.push('/login');

    const logout = async ()=> oktaAuth.signOut();

    const button = authState.isAuthenticated ? 
    <button onClick={logout} style={{backgroundColor:"unset",border:"none",textTransform:"uppercase"}}>Logout</button> :
    <button onClick={login}>Login</button>;


    return ( 
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to="/" className={classes.link}>
                    <Typography>HOME</Typography>
                </Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>{button}</Typography>

            </Toolbar> 
        </AppBar>
    )
};

export default Header;