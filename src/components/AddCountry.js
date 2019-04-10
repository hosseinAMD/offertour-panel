import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import HeaderChip from "./HeaderChip";
import {headerBlue} from "../config/colors";

class AddCountry extends React.Component {
    render() {
        return (
            <Paper elevation={1} className="right-dir setting-forms-paper">
                <HeaderChip label="افزودن کشور" icon="add_circle" color={headerBlue}/>
                <Divider/>
                Add Country
            </Paper>
        );
    }
}

export default AddCountry;