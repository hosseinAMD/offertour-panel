import React from 'react';
import Grid from '@material-ui/core/Grid';
import PlansList from "./PlansList";
import ActivePlan from "./ActivePlan";
import RecentBills from "./RecentBills";
import Slide from "@material-ui/core/Slide";

const Plan = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="right"in={true} mountOnEnter>
                <RecentBills/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Slide direction="left" in={true} mountOnEnter>
                <ActivePlan/>
            </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Slide direction="up"  in={true} mountOnEnter>
                <PlansList/>
            </Slide>
        </Grid>
    </Grid>
);

export default Plan;