import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AddAirport from "./AddAirport";
import FilterAirport from "./FilterAirport";
import AirportsList from "./AirportsList";
import AddTerminal from "./AddTerminal";

const TerminalsSetting = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" in={true} mountOnEnter>
                <FilterAirport/>
            </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" in={true} mountOnEnter>
                <AddTerminal/>
            </Slide>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Slide direction="up" in={true} mountOnEnter>
                <AirportsList/>
            </Slide>
        </Grid>
    </Grid>
);

export default TerminalsSetting;