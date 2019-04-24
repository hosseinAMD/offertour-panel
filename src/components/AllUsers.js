import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

class AllUsers extends React.Component {
    render() {
        return (
            <Grid container spacing={24} className="my-container">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Slide direction="up" in={true} mountOnEnter>
                        <div>
                            <Button component={NavLink} to="/add-support-admin" variant="contained"
                                    color="primary" className="edit-button">افزودن پشتیبان</Button>
                            <Button component={NavLink} to="/add-agency" variant="contained"

                                    color="primary" className="edit-button">افزودن آژانس</Button>
                        </div>
                    </Slide>
                </Grid>
            </Grid>
        );
    }
}

export default AllUsers;