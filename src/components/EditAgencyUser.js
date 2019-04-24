import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import AgencyUserForm from "./AgencyUserForm";
import {loggedInUser} from "../config/config";

const EditAgencyUser = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper elevation={1} className="right-dir agency-paper">
                <HeaderChip label='ویرایش کاربر' color='#0288d1' icon='person_add'/>
                <Divider/>
                <br/>
                <AgencyUserForm agencyUser={loggedInUser}/>
            </Paper>
        </Grid>
    </Grid>
);

export default EditAgencyUser;