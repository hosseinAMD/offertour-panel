import React from 'react';
import Grid from '@material-ui/core/Grid';
import AgencyProfile from "./AgencyProfile";
import UserProfile from "./UserProfile";
import Slide from '@material-ui/core/Slide';

const Profile = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <AgencyProfile/>
            </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" timeout={{enter: '1000ms'}} in={true} mountOnEnter unmountOnExit>
                <UserProfile/>
            </Slide>
        </Grid>
    </Grid>
);

export default Profile;