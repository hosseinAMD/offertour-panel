import React from 'react';
import Grid from '@material-ui/core/Grid';
import Comments from "./Comments";
import ToursVisitsReport from "./ToursVisitsReport";
import AgencyProfileVisitsReport from "./AgencyProfileVisitsReport";


const Dashboard = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <ToursVisitsReport/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <AgencyProfileVisitsReport/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Comments/>
        </Grid>
    </Grid>
);

export default Dashboard;