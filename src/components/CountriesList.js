import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";

const CountriesList = () => (
    <Paper elevation={1} className="right-dir setting-forms-paper">
        <HeaderChip label="لیست کشورها" icon="flag" color={headerBlue}/>
        <Divider/>
        List countries
    </Paper>
);

export default CountriesList;