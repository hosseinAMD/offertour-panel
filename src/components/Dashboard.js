import React from 'react';
import Grid from '@material-ui/core/Grid';
import Comments from "./Comments";
import ToursVisitsReport from "./ToursVisitsReport";
import AgencyProfileVisitsReport from "./AgencyProfileVisitsReport";
import AgencyCategoriesReport from "./AgencyCategoriesReport";
import Slide from '@material-ui/core/Slide';


const Dashboard = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="down" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <ToursVisitsReport/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="left" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <AgencyProfileVisitsReport/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="right" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <Comments/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="up" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <AgencyCategoriesReport/>
            </Slide>
        </Grid>
    </Grid>
);

export default Dashboard;