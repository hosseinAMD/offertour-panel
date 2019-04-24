import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {headerBlue} from "../config/colors";
import AgencyUsersList from "./AgencyUsersList";

class AgencyUsers extends React.Component {
    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <div>
                            <Paper elevation={1} className="right-dir setting-forms-paper">
                                <HeaderChip label="لیست کاربران" icon="supervisor_account" color={headerBlue}/>
                                <Divider/>
                                <br/>
                                <AgencyUsersList/>
                                <br/>
                                <Button component={NavLink} to="/add-agency-user" variant="contained"
                                        color="primary" className="edit-button">افزودن</Button>
                            </Paper>
                        </div>

                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default AgencyUsers;