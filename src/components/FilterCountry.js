import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";

class FilterCountry extends React.Component{
    render() {
        return (
            <div>
                <Paper elevation={1} className="right-dir setting-forms-paper">
                    <HeaderChip label="جستجو در کشورها" icon="search" color={headerBlue}/>
                    <Divider/>
                    FIlter Country
                </Paper>
            </div>
        );
    }
}

export default FilterCountry;