import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: "#6495ED",
        color: "white",
        width: "86%"
    },
    table: {
        border: "1px solid rgba(244,244,244,1)"
    },
    link:{
        textDecoration:"none",
        color:"inherit"
    }
});

function Categories() {

    const classes = useStyles();

    return ( <React.Fragment >
        <Link to = "/create" style={{textDecoration:"none",color:"inherit"}}>
        <Button variant = "contained" className = { classes.create } > Create Blog </Button> 
        </Link> 

        <Table className = { classes.table } >
        <TableHead >
        <TableRow >
        <TableCell ><Link to={"/"} className={classes.link}> All Categories</Link> </TableCell>
        </TableRow > 
        </TableHead> 
        <TableBody > {
            categories.map((category) => {
                return ( <TableRow >
                    <TableCell > <Link to={`/?category=${category}`} className={classes.link}>  { category } </Link> </TableCell> 
                    </TableRow > )
            })
        } 
        </TableBody> </Table> 
        </React.Fragment>
    )
};

export default Categories;