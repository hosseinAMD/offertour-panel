import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AddCity from "./AddCity";
import FilterCity from "./FilterCity";
import CitiesList from "./CitiesList";
import AddAirport from "./AddAirport";

const AirportsSetting = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" in={true} mountOnEnter>
                <FilterCity/>
            </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" in={true} mountOnEnter>
                <AddAirport/>
            </Slide>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Slide direction="up" in={true} mountOnEnter>
                <CitiesList/>
            </Slide>
        </Grid>
    </Grid>
);

export default AirportsSetting;