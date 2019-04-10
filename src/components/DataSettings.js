import React from 'react';
import HeaderChip from "./HeaderChip";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import DataSettingsItem from "./DataSettingsItem";

const DataSettings = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='تنظیمات داده ها' color='#0288d1' icon='file_copy'/>
        <Divider/>
        <br/>
        <DataSettingsItem icon="flag" label="کشورها" to="/country-setting"/>
        <DataSettingsItem icon="golf_course" label="استان ها" to="/province-setting"/>
        <DataSettingsItem icon="location_on" label="شهر ها" to="/city-setting"/>
        <DataSettingsItem icon="local_airport" label="فرودگاه ها" to="/airport-setting"/>
        <DataSettingsItem icon="directions_bus" label="ترمینال ها" to="/terminal-setting"/>
    </Paper>
);

export default DataSettings;