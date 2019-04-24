import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import AgencyForm from "./AgencyForm";

const AddAgency = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='افزودن آژانس' color='#0288d1' icon='person_add'/>
        <Divider/>
        <br/>
        <AgencyForm/>
    </Paper>
);

export default AddAgency;