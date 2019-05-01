import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import HeaderChip from './HeaderChip';
import AgencyForm from "./AgencyForm";

const AddAgency = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='افزودن آژانس' color='#0288d1' icon='person_add'/>
                <Divider/>
                <br/>
                <AgencyForm/>
            </Paper>
        </Grid>
    </Grid>
);

export default AddAgency;