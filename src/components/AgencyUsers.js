import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

class AgencyUsers extends React.Component{
    render() {
        return(
            <Grid container spacing={24} className="my-container">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <Button component={NavLink} to="/add-agency-user" variant="contained"
                                color="primary" className="edit-button">افزودن</Button>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default AgencyUsers;