import React from 'react';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            chart
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            comments
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            active plan
        </Grid>
    </Grid>
);

export default Dashboard;