import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import HeaderChip from './HeaderChip';
import AgencyUserForm from "./AgencyUserForm";

const AddAgencyUser = () => (
    <Paper elevation={1} className="right-dir agency-paper">
        <HeaderChip label='افزودن کاربر' color='#0288d1' icon='person_add'/>
        <Divider/>
        <br/>
        <AgencyUserForm/>
    </Paper>
);

export default AddAgencyUser;