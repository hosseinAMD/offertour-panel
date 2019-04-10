import React from 'react';
import HeaderChip from "./HeaderChip";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const DataSettings = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='تنظیمات داده ها' color='#0288d1' icon='file_copy'/>
        <Divider/>
        <br/>
    </Paper>
);

export default DataSettings;