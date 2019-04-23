import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AgencyRatesAndComments from "./AgencyRatesAndComments";
import BlogPostComments from "./BlogPostComments";

const LastCommentsAndRates = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" in={true} mountOnEnter>
                <AgencyRatesAndComments/>
            </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" in={true} mountOnEnter>
                <BlogPostComments/>
            </Slide>
        </Grid>
    </Grid>
);

export default LastCommentsAndRates;