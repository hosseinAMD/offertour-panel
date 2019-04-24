import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import PlanForm from "./PlanForm";

const EditPlan = (props) => {
    const plans = JSON.parse(localStorage.getItem('plans'));
    const plan = plans.find((item) => item.Id === parseInt(props.match.params.id));
    return (
        <Grid container spacing={24} className="my-container">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={1} className="right-dir agency-paper">
                    <HeaderChip label='ویرایش پلن' color='#0288d1' icon='attach_money'/>
                    <Divider/>
                    <br/>
                    <PlanForm plan={plan}/>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default EditPlan;