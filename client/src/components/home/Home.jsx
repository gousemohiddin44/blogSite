import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";
import {Grid} from "@material-ui/core";

function Home() { 
    return (
        <React.Fragment>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item lg={10} xs={12} sm={2}>
                    <Posts />
                </Grid> 
            </Grid>
        </React.Fragment>
    )
}

export default Home;