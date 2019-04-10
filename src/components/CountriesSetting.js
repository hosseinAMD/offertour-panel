import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import FilterCountry from "./FilterCountry";
import AddCountry from "./AddCountry";
import CountriesList from "./CountriesList";

const CountriesSetting = () => (
    <Grid container spacing={24} className="my-container">
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="right" in={true} mountOnEnter>
                <FilterCountry/>
            </Slide>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="left" in={true} mountOnEnter>
                <AddCountry/>
            </Slide>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Slide direction="up" in={true} mountOnEnter>
                <CountriesList/>
            </Slide>
        </Grid>
    </Grid>
);

export default CountriesSetting;