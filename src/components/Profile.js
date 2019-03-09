import React from 'react';
import Grid from '@material-ui/core/Grid';
import AgencyProfile from "./AgencyProfile";


const Profile = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <AgencyProfile/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <p>User</p>
        </Grid>
    </Grid>
);

export default Profile;