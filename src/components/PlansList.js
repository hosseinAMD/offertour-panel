import React from 'react';
import Grid from '@material-ui/core/Grid';
import plans from '../data/plans';
import PlanItem from "./PlanItem";

const PlansList = () => (
    <Grid container spacing={24} className="my-container">
        {plans.map((plan) => (<PlanItem plan={plan}/>))}
    </Grid>
);

export default PlansList;