import React from 'react';
import Grid from '@material-ui/core/Grid';
import PlansList from "./PlansList";

const Plan = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <PlansList/>
        </Grid>
    </Grid>
);

export default Plan;