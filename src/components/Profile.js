import React from 'react';
import Grid from '@material-ui/core/Grid';
import AgencyProfile from "./AgencyProfile";
import UserProfile from "./UserProfile";
import Slide from '@material-ui/core/Slide';
import {role} from "../config/config";

const Profile = () => {
    if(role==='support'){
        return(
            <Grid container spacing={24} className="my-container">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <UserProfile/>
                    </Slide>
                </Grid>
            </Grid>
        );
    } else {
        return(
            <Grid container spacing={24} className="my-container">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter>
                        <AgencyProfile/>
                    </Slide>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter>
                        <UserProfile/>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default Profile;